# Reflexer Liquidation Pool For Gitcoin GR10 Hack

## Contracts

LiquidationPool is the main Contract. where below functions are there,  
-   Deposit RAI
-   Withdraw RAI before used for liquidate
-   Claim Eth which is accured by liquidate safe as per your share in pool
-   transfer Internal RAI For Liquidate to accountingengine

In the contract once RAI is deposited by user so after 10 days of period user can claim thier eth. So claiming can go in first come fisrt serve. Time period can change by owner.

## Test Case

Testing has bee done on mainnet fork by hardhat tool.

## To Setup

1). Clone Repo  
2). add .env file to root and add below config

    MNEMONIC=''
    INFURA_API_KEY=
    ALCHEMY_API_KEY=
    ETHERSCAN_API_KEY=
    FORK_ENABLED="false"

3). Install dependency, `yarn`  
4). npx hardhat compile  
5). npx hardhat test  

## Contact

[Twitter](https://twitter.com/RadadiyaSunny)  
`Discord: sunny#3937` 