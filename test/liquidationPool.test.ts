const { expect } = require("chai");
const { BigNumber, Wallet } = require("ethers");
const { formatEther, parseEther } =require('@ethersproject/units')
const raiAbi = require('../abis/raiAbi.json');
const hre = require("hardhat");

// Mainnet Fork and test case for mainnet with hardhat network by impersonate account from mainnet
describe("deployed Contract on Mainnet fork", function() {
    let accounts: any
    let LiquidationPoolContract: any
    let LiquidationPoolContract_Instance: any
    let ISafeEngineContract: any
    let raiContract: any
    let accountToImpersonate: any
    let raiAddress: any
    let signer: any
    let signer2: any
    let impersonateBalanceBefore: any
    let ourAccountBalanceBefore: any
    let ourAccountBalanceAfter: any
    let maxValue: any
    let safeEngine: any
    let accountingEngine: any
    let coinJoin: any

    describe('create functions', () => {
        before(async () => {
            maxValue = '115792089237316195423570985008687907853269984665640564039457584007913129639935'
            accounts = await hre.ethers.getSigners();

            // Mainnet addresses
            accountToImpersonate = '0x820f92c1B3aD8E962E6C6D9d7CaF2a550Aec46fB' // Dai rick address
            raiAddress = '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919' // $dai
            accountingEngine = '0xcEe6Aa1aB47d0Fb0f24f51A3072EC16E20F90fcE'
            safeEngine = '0xCC88a9d330da1133Df3A7bD823B95e52511A6962'
            coinJoin = '0x0A5653CCa4DB1B6E265F47CAf6969e64f1CFdC45'

            await hre.network.provider.request({
                method: "hardhat_impersonateAccount",
                params: [accountToImpersonate]
            })
            signer = await hre.ethers.provider.getSigner(accountToImpersonate)
            signer2 = await hre.ethers.provider.getSigner(accounts[0].address)

            raiContract = new hre.ethers.Contract(raiAddress, raiAbi, signer)
            impersonateBalanceBefore = await raiContract.balanceOf(accountToImpersonate)
            ourAccountBalanceBefore = await raiContract.balanceOf(accounts[0].address)

            await raiContract.transfer(accounts[0].address,  hre.ethers.utils.parseUnits('100', 18))
            ourAccountBalanceAfter = await raiContract.balanceOf(accounts[0].address)

            LiquidationPoolContract = await hre.ethers.getContractFactory('LiquidationPool');
            LiquidationPoolContract_Instance = await LiquidationPoolContract.deploy(raiAddress, accountingEngine, safeEngine, coinJoin)

            const safeEngineAbi = await hre.artifacts.readArtifact("ISafeEngine")
            ISafeEngineContract = new hre.ethers.Contract(safeEngine, safeEngineAbi.abi, signer)

            await raiContract.connect(signer).approve(LiquidationPoolContract_Instance.address, maxValue);
            await raiContract.connect(signer2).approve(LiquidationPoolContract_Instance.address, maxValue);

        });
        it("hardhat_impersonateAccount and check transfered balance to our account", async function() {
            expect(ourAccountBalanceBefore).to.equal(0)
            expect(ourAccountBalanceAfter).to.equal(hre.ethers.utils.parseUnits('100', 18))
        });
        describe('depositRai()', () => {
            it('#1 Should revert for amount 0', async function() {
                await expect(
                    LiquidationPoolContract_Instance.connect(signer).depositRAI(hre.ethers.utils.parseUnits('0', 18)),
                ).to.be.revertedWith('LiquidationPool/Rai Amount is ZERO');
            })
            it('#2 Should revert for not enough Rai in wallet', async function() {
                await expect(
                    LiquidationPoolContract_Instance.connect(signer).depositRAI(hre.ethers.utils.parseUnits('500', 18)),
                ).to.be.revertedWith('Coin/insufficient-balance');
            })
            it('#3 User can Deposit Rai', async function() {
                await LiquidationPoolContract_Instance.connect(signer).depositRAI(hre.ethers.utils.parseUnits('100', 18));
                const userBalanceInLiquidationPool = await LiquidationPoolContract_Instance.userRaiBalanceMapping(accountToImpersonate)
                expect(userBalanceInLiquidationPool[0].toString()).to.equal(hre.ethers.utils.parseUnits('100', 18))
            })
        })
        describe('withdrawRai()', () => {
            it('#1 User Can Withdraw Rai', async function() {
                const userBalanceInLiquidationPool1 = await LiquidationPoolContract_Instance.userRaiBalanceMapping(accountToImpersonate)
                await LiquidationPoolContract_Instance.connect(signer).withdrawRAIBeforeLiquidate(hre.ethers.utils.parseUnits('100', 18));
                const userBalanceInLiquidationPool2 = await LiquidationPoolContract_Instance.userRaiBalanceMapping(accountToImpersonate)
                expect(userBalanceInLiquidationPool1[0].toString()).to.equal(hre.ethers.utils.parseUnits('100', 18))
                expect(userBalanceInLiquidationPool2[0].toString()).to.equal(hre.ethers.utils.parseUnits('0', 18))
            })
            it('#2 Should Revert if Amount is 0', async function() {
                await expect(
                    LiquidationPoolContract_Instance.connect(signer).withdrawRAIBeforeLiquidate(hre.ethers.utils.parseUnits('0', 18)),
                ).to.be.revertedWith('LiquidationPool/Rai Amount is ZERO');
            })
            it('#3 Should Revert if Amount is 0', async function() {
                await expect(
                    LiquidationPoolContract_Instance.connect(signer).withdrawRAIBeforeLiquidate(hre.ethers.utils.parseUnits('10', 18)),
                ).to.be.revertedWith('LiquidationPool/Low Rai Balance');
            })
        })
    
        describe('claimETH() and trasferRaiInternal()', () => {

            it('#1 First Deposit Rai by two user', async function() {
                await LiquidationPoolContract_Instance.connect(signer).depositRAI(hre.ethers.utils.parseUnits('50', 18));
                await LiquidationPoolContract_Instance.connect(signer2).depositRAI(hre.ethers.utils.parseUnits('50', 18));
            })

            it('#2 Should revert if it claims before finish locking period', async function() {
                await expect(
                    LiquidationPoolContract_Instance.connect(signer).claimETH(hre.ethers.utils.parseUnits('50', 18)),
                ).to.be.revertedWith('LiquidationPool/Wait to finish locking period.');
            })
            it('#3 Should revert bcuz not enough deposited', async function() {
                await hre.ethers.provider.send("evm_setNextBlockTimestamp", [1782969212]) 
                await hre.ethers.provider.send("evm_mine")
                await expect(
                    LiquidationPoolContract_Instance.connect(signer).claimETH(hre.ethers.utils.parseUnits('60', 18)),
                ).to.be.revertedWith('LiquidationPool/Not Enough Rai balance');
            })
            it('#3 Should revert bcuz not enough rai used to liquidate', async function() {
                await hre.ethers.provider.send("evm_setNextBlockTimestamp", [1782979212])
                await hre.ethers.provider.send("evm_mine")
                await expect(
                    LiquidationPoolContract_Instance.connect(signer).claimETH(hre.ethers.utils.parseUnits('50', 18)),
                ).to.be.revertedWith('LiquidationPool/Not Enough ETH used currently');
            })
            it('#4 Should able to transfer Internal Rai For Liquidate and claim eth', async function() {
                await hre.ethers.provider.send("evm_setNextBlockTimestamp", [1782989212])
                await hre.ethers.provider.send("evm_mine")
                const internaBal0 = await ISafeEngineContract.coinBalance(LiquidationPoolContract_Instance.address)
                await LiquidationPoolContract_Instance.transferRAIInternalForLiquidate(internaBal0);

                await signer.sendTransaction({
                    to: LiquidationPoolContract_Instance.address,
                    value: hre.ethers.utils.parseEther("2")
                });

                const beforeEthBalance =  await hre.ethers.provider.getBalance(accountToImpersonate)
                await LiquidationPoolContract_Instance.connect(signer).claimETH(hre.ethers.utils.parseUnits('50', 18)); // Claim ETH Here

                const afterEthBalance =  await hre.ethers.provider.getBalance(accountToImpersonate)
                const diffBalance = afterEthBalance.sub(beforeEthBalance);
                expect(diffBalance.toString()).to.be.closeTo(hre.ethers.utils.parseUnits('0.9'), hre.ethers.utils.parseUnits('1'));
            })
        })
    });
})
