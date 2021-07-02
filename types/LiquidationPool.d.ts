/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LiquidationPoolInterface extends ethers.utils.Interface {
  functions: {
    "accountingEngine()": FunctionFragment;
    "claimETH(uint256)": FunctionFragment;
    "coinJoin()": FunctionFragment;
    "depositRAI(uint256)": FunctionFragment;
    "iCoinJoin()": FunctionFragment;
    "iSafeEngine()": FunctionFragment;
    "liquidationEngine()": FunctionFragment;
    "owner()": FunctionFragment;
    "raiToken()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setClaimWaitingTime(uint256)": FunctionFragment;
    "totalRaiBalance()": FunctionFragment;
    "totalUsedRaiBalanceForETH()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferRAIInternalForLiquidate(uint256)": FunctionFragment;
    "userRaiBalanceMapping(address)": FunctionFragment;
    "waitingTime()": FunctionFragment;
    "withdrawRAIBeforeLiquidate(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountingEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimETH",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "coinJoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositRAI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "iCoinJoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "iSafeEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationEngine",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "raiToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimWaitingTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalRaiBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalUsedRaiBalanceForETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferRAIInternalForLiquidate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userRaiBalanceMapping",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "waitingTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRAIBeforeLiquidate",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountingEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "coinJoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositRAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "iCoinJoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "iSafeEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "raiToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimWaitingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRaiBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalUsedRaiBalanceForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRAIInternalForLiquidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRaiBalanceMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "waitingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRAIBeforeLiquidate",
    data: BytesLike
  ): Result;

  events: {
    "ClaimETH(address,uint256)": EventFragment;
    "DepositRAI(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransferInternalCoins(uint256,uint256)": EventFragment;
    "WithdrawRAI(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositRAI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferInternalCoins"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawRAI"): EventFragment;
}

export class LiquidationPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LiquidationPoolInterface;

  functions: {
    accountingEngine(overrides?: CallOverrides): Promise<[string]>;

    "accountingEngine()"(overrides?: CallOverrides): Promise<[string]>;

    claimETH(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimETH(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    coinJoin(overrides?: CallOverrides): Promise<[string]>;

    "coinJoin()"(overrides?: CallOverrides): Promise<[string]>;

    depositRAI(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "depositRAI(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    iCoinJoin(overrides?: CallOverrides): Promise<[string]>;

    "iCoinJoin()"(overrides?: CallOverrides): Promise<[string]>;

    iSafeEngine(overrides?: CallOverrides): Promise<[string]>;

    "iSafeEngine()"(overrides?: CallOverrides): Promise<[string]>;

    liquidationEngine(overrides?: CallOverrides): Promise<[string]>;

    "liquidationEngine()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    raiToken(overrides?: CallOverrides): Promise<[string]>;

    "raiToken()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimWaitingTime(
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setClaimWaitingTime(uint256)"(
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalRaiBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalRaiBalance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalUsedRaiBalanceForETH(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalUsedRaiBalanceForETH()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferRAIInternalForLiquidate(
      _internalRaiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferRAIInternalForLiquidate(uint256)"(
      _internalRaiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userRaiBalanceMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        userRaiBalance: BigNumber;
        timestamp: BigNumber;
      }
    >;

    "userRaiBalanceMapping(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        userRaiBalance: BigNumber;
        timestamp: BigNumber;
      }
    >;

    waitingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "waitingTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawRAIBeforeLiquidate(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawRAIBeforeLiquidate(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accountingEngine(overrides?: CallOverrides): Promise<string>;

  "accountingEngine()"(overrides?: CallOverrides): Promise<string>;

  claimETH(
    _raiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimETH(uint256)"(
    _raiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  coinJoin(overrides?: CallOverrides): Promise<string>;

  "coinJoin()"(overrides?: CallOverrides): Promise<string>;

  depositRAI(
    _raiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "depositRAI(uint256)"(
    _raiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  iCoinJoin(overrides?: CallOverrides): Promise<string>;

  "iCoinJoin()"(overrides?: CallOverrides): Promise<string>;

  iSafeEngine(overrides?: CallOverrides): Promise<string>;

  "iSafeEngine()"(overrides?: CallOverrides): Promise<string>;

  liquidationEngine(overrides?: CallOverrides): Promise<string>;

  "liquidationEngine()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  raiToken(overrides?: CallOverrides): Promise<string>;

  "raiToken()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimWaitingTime(
    _timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setClaimWaitingTime(uint256)"(
    _timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalRaiBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "totalRaiBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalUsedRaiBalanceForETH(overrides?: CallOverrides): Promise<BigNumber>;

  "totalUsedRaiBalanceForETH()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferRAIInternalForLiquidate(
    _internalRaiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferRAIInternalForLiquidate(uint256)"(
    _internalRaiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userRaiBalanceMapping(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { userRaiBalance: BigNumber; timestamp: BigNumber }
  >;

  "userRaiBalanceMapping(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { userRaiBalance: BigNumber; timestamp: BigNumber }
  >;

  waitingTime(overrides?: CallOverrides): Promise<BigNumber>;

  "waitingTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawRAIBeforeLiquidate(
    _raiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawRAIBeforeLiquidate(uint256)"(
    _raiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accountingEngine(overrides?: CallOverrides): Promise<string>;

    "accountingEngine()"(overrides?: CallOverrides): Promise<string>;

    claimETH(
      _raiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "claimETH(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    coinJoin(overrides?: CallOverrides): Promise<string>;

    "coinJoin()"(overrides?: CallOverrides): Promise<string>;

    depositRAI(
      _raiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositRAI(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    iCoinJoin(overrides?: CallOverrides): Promise<string>;

    "iCoinJoin()"(overrides?: CallOverrides): Promise<string>;

    iSafeEngine(overrides?: CallOverrides): Promise<string>;

    "iSafeEngine()"(overrides?: CallOverrides): Promise<string>;

    liquidationEngine(overrides?: CallOverrides): Promise<string>;

    "liquidationEngine()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    raiToken(overrides?: CallOverrides): Promise<string>;

    "raiToken()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setClaimWaitingTime(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setClaimWaitingTime(uint256)"(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalRaiBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRaiBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalUsedRaiBalanceForETH(overrides?: CallOverrides): Promise<BigNumber>;

    "totalUsedRaiBalanceForETH()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferRAIInternalForLiquidate(
      _internalRaiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferRAIInternalForLiquidate(uint256)"(
      _internalRaiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userRaiBalanceMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        userRaiBalance: BigNumber;
        timestamp: BigNumber;
      }
    >;

    "userRaiBalanceMapping(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        userRaiBalance: BigNumber;
        timestamp: BigNumber;
      }
    >;

    waitingTime(overrides?: CallOverrides): Promise<BigNumber>;

    "waitingTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawRAIBeforeLiquidate(
      _raiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawRAIBeforeLiquidate(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ClaimETH(
      _user: null,
      _ethAmount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _user: string; _ethAmount: BigNumber }
    >;

    DepositRAI(
      _user: null,
      _raiAmount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _user: string; _raiAmount: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TransferInternalCoins(
      _raiAmount: null,
      _timestamp: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _raiAmount: BigNumber; _timestamp: BigNumber }
    >;

    WithdrawRAI(
      _user: null,
      _raiAmount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _user: string; _raiAmount: BigNumber }
    >;
  };

  estimateGas: {
    accountingEngine(overrides?: CallOverrides): Promise<BigNumber>;

    "accountingEngine()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimETH(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimETH(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    coinJoin(overrides?: CallOverrides): Promise<BigNumber>;

    "coinJoin()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositRAI(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "depositRAI(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    iCoinJoin(overrides?: CallOverrides): Promise<BigNumber>;

    "iCoinJoin()"(overrides?: CallOverrides): Promise<BigNumber>;

    iSafeEngine(overrides?: CallOverrides): Promise<BigNumber>;

    "iSafeEngine()"(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationEngine(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidationEngine()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    raiToken(overrides?: CallOverrides): Promise<BigNumber>;

    "raiToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimWaitingTime(
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setClaimWaitingTime(uint256)"(
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalRaiBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRaiBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalUsedRaiBalanceForETH(overrides?: CallOverrides): Promise<BigNumber>;

    "totalUsedRaiBalanceForETH()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferRAIInternalForLiquidate(
      _internalRaiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferRAIInternalForLiquidate(uint256)"(
      _internalRaiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userRaiBalanceMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userRaiBalanceMapping(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    waitingTime(overrides?: CallOverrides): Promise<BigNumber>;

    "waitingTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawRAIBeforeLiquidate(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawRAIBeforeLiquidate(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accountingEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "accountingEngine()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimETH(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimETH(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    coinJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "coinJoin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositRAI(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "depositRAI(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    iCoinJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "iCoinJoin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    iSafeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "iSafeEngine()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "liquidationEngine()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    raiToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "raiToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimWaitingTime(
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setClaimWaitingTime(uint256)"(
      _timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalRaiBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalRaiBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalUsedRaiBalanceForETH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalUsedRaiBalanceForETH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferRAIInternalForLiquidate(
      _internalRaiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferRAIInternalForLiquidate(uint256)"(
      _internalRaiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userRaiBalanceMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userRaiBalanceMapping(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    waitingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "waitingTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawRAIBeforeLiquidate(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawRAIBeforeLiquidate(uint256)"(
      _raiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}