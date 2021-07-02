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
2). add 
