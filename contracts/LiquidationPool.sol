pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

interface ISafeEngine {
    function transferInternalCoins(address src, address dst, uint256 rad) external;
    function coinBalance(address src) external view returns(uint256);
    function approveSAFEModification(address account) external;
}

interface ICoinJoin {
    function join(address account, uint256 wad) external;
    function exit(address account, uint256 wad) external;
}

contract LiquidationPool is ReentrancyGuard, Ownable { 
    
    using SafeERC20 for IERC20;
    IERC20 public raiToken;
    ISafeEngine public iSafeEngine;
    ICoinJoin public iCoinJoin;

    struct userDepositDetail {
        uint256 userRaiBalance;
        uint256 timestamp;
    }
    
    mapping(address => userDepositDetail) public userRaiBalanceMapping;
    uint256 public totalRaiBalance;
    uint256 public totalUsedRaiBalanceForETH;
    uint256 public waitingTime;

    address public accountingEngine;
    address public coinJoin;

    address public liquidationEngine = 0x27Efc6FFE79692E0521E7e27657cF228240A06c2;

    receive() external payable {
    }

    event DepositRAI(address _user, uint256 _raiAmount);
    event WithdrawRAI(address _user, uint256 _raiAmount);
    event ClaimETH(address _user, uint256 _ethAmount);
    event TransferInternalCoins(uint256 _raiAmount, uint256 _timestamp);

    constructor(address _raiToken, address _accountingEngine, address _iSafeEngine, address _coinJoin) {

        waitingTime = 10 days; // waiting time is locking period to claim reward eth. So old user can claim first

        accountingEngine = _accountingEngine;
        iSafeEngine = ISafeEngine(_iSafeEngine);
        iCoinJoin = ICoinJoin(_coinJoin);

        raiToken = IERC20(_raiToken);
        raiToken.safeApprove(_iSafeEngine, type(uint256).max);
        raiToken.safeApprove(address(iCoinJoin), type(uint256).max);
    }
    
    function depositRAI(uint256 _raiAmount) public {
        require(_raiAmount > 0, "LiquidationPool/Rai Amount is ZERO");
        raiToken.safeTransferFrom(msg.sender, address(this), _raiAmount);
        join(_raiAmount);

        userRaiBalanceMapping[msg.sender].userRaiBalance = userRaiBalanceMapping[msg.sender].userRaiBalance + _raiAmount;
        userRaiBalanceMapping[msg.sender].timestamp = block.timestamp;
        totalRaiBalance = totalRaiBalance + _raiAmount;
        
        emit DepositRAI(msg.sender, _raiAmount);
    }
    
    function transferRAIInternalForLiquidate(uint256 _internalRaiAmount) public nonReentrant {
        require(_internalRaiAmount <= iSafeEngine.coinBalance(address(this)), "LiquidationPool/Not Enough Internal Rai Balance");

        uint256 systemRaiAmount = (totalRaiBalance * _internalRaiAmount) / iSafeEngine.coinBalance(address(this));
        
        iSafeEngine.transferInternalCoins(
            address(this), 
            accountingEngine, 
            _internalRaiAmount
        ); // Transfer RAI to Accounting Engine through SafeEngine
        
        totalUsedRaiBalanceForETH = totalUsedRaiBalanceForETH + systemRaiAmount;
        totalRaiBalance = totalRaiBalance - systemRaiAmount;
        
        emit TransferInternalCoins(_internalRaiAmount, block.timestamp);
    }
    
    function claimETH(uint256 _raiAmount) public {
        require(userRaiBalanceMapping[msg.sender].timestamp + (waitingTime) < block.timestamp, "LiquidationPool/Wait to finish locking period."); // Can not claim before 10 days
        require(userRaiBalanceMapping[msg.sender].userRaiBalance >= _raiAmount, "LiquidationPool/Not Enough Rai balance");
        require(totalUsedRaiBalanceForETH >= _raiAmount, "LiquidationPool/Not Enough ETH used currently");
        
        uint256 balance = address(this).balance;
        uint256 userEthShare = ( _raiAmount * balance ) / totalUsedRaiBalanceForETH;
        
        userRaiBalanceMapping[msg.sender].userRaiBalance = userRaiBalanceMapping[msg.sender].userRaiBalance - _raiAmount;
        totalUsedRaiBalanceForETH = totalUsedRaiBalanceForETH - _raiAmount;
        
        if (userRaiBalanceMapping[msg.sender].userRaiBalance == 0) {
            userRaiBalanceMapping[msg.sender].timestamp = 0;
        }
        
        payable(msg.sender).transfer(userEthShare);
        emit ClaimETH(msg.sender, userEthShare);
    }
    
    function withdrawRAIBeforeLiquidate(uint256 _raiAmount) public {
        require(_raiAmount > 0, "LiquidationPool/Rai Amount is ZERO");
        require(_raiAmount <= userRaiBalanceMapping[msg.sender].userRaiBalance, 'LiquidationPool/Low Rai Balance');
        userRaiBalanceMapping[msg.sender].userRaiBalance = userRaiBalanceMapping[msg.sender].userRaiBalance - _raiAmount;
        
        if (userRaiBalanceMapping[msg.sender].userRaiBalance == 0) {
            userRaiBalanceMapping[msg.sender].timestamp = 0;
        }
        
        totalRaiBalance = totalRaiBalance - _raiAmount;
        exit(_raiAmount);
        raiToken.safeTransfer(msg.sender, _raiAmount);
        emit WithdrawRAI(msg.sender, _raiAmount);
    }

    function join(uint256 _raiAmount) internal {
        require(_raiAmount > 0, "LiquidationPool/Not Enough Rai Balance");
        iCoinJoin.join(address(this), _raiAmount);
    }

    function exit(uint256 _raiAmount) internal {
        require(_raiAmount > 0, "LiquidationPool/Not Enough Rai Balance");
        iSafeEngine.approveSAFEModification(address(iCoinJoin));
        iCoinJoin.exit(address(this), _raiAmount);
    }

    function setClaimWaitingTime(uint256 _timestamp) public onlyOwner {
        waitingTime = _timestamp;
    }
}