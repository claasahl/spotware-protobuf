type bytes = Buffer;
type double = number;
type uint32 = number;
type int32 = number;
type uint64 = Long;
type int64 = Long;
type bool = boolean;
interface IProtoMessage {
  /**
   * Contains id of ProtoPayloadType or other custom PayloadTypes (e.g. ProtoOAPayloadType)
   */
  payloadType: uint32;
  /**
   * Contains id of ProtoPayloadType or other custom PayloadTypes (e.g. ProtoOAPayloadType)
   */
  payload?: bytes | null;
  /**
   * Serialized protobuf message that corresponds to payloadType
   */
  clientMsgId?: string | null;
}

interface IProtoErrorRes {
  payloadType?: ProtoPayloadType | null;
  /**
   * Contains name of ProtoErrorCode or other custom ErrorCodes (e.g. ProtoCHErrorCode)
   */
  errorCode: string;
  /**
   * Contains name of ProtoErrorCode or other custom ErrorCodes (e.g. ProtoCHErrorCode)
   */
  description?: string | null;
  /**
   * Error description
   */
  maintenanceEndTimestamp?: uint64 | null;
}

/**
 * Event that is sent from Open API proxy and can be used as criteria that connection is healthy when no other messages are sent by cTrader platform. Open API client can send this message when he needs to keep the connection open for a period without other messages longer than 30 seconds
 */
interface IProtoHeartbeatEvent {
  payloadType?: ProtoPayloadType | null;
}

class ProtoMessage {
  public static fromBuffer(buffer: Buffer): IProtoMessage {}
  public static toBuffer(message: IProtoMessage): Buffer {}
}

class ProtoErrorRes {
  public static fromBuffer(buffer: Buffer): IProtoErrorRes {}
  public static toBuffer(message: IProtoErrorRes): Buffer {}
}

/**
 * Event that is sent from Open API proxy and can be used as criteria that connection is healthy when no other messages are sent by cTrader platform. Open API client can send this message when he needs to keep the connection open for a period without other messages longer than 30 seconds
 */
class ProtoHeartbeatEvent {
  public static fromBuffer(buffer: Buffer): IProtoHeartbeatEvent {}
  public static toBuffer(message: IProtoHeartbeatEvent): Buffer {}
}

/**
 * --- INTENSIVE COMMANDS 1 - 49
 * --- COMMON API 50 - 69
 */
enum ProtoPayloadType {
  /**
   * common intensive
   */
  PROTO_MESSAGE = 5,
  /**
   * common commands
   */
  ERROR_RES = 50,
  HEARTBEAT_EVENT = 51
}

/**
 * COMMON error codes 1 - 99
 */
enum ProtoErrorCode {
  UNKNOWN_ERROR = 1,
  UNSUPPORTED_MESSAGE = 2,
  INVALID_REQUEST = 3,
  WRONG_PASSWORD = 4,
  TIMEOUT_ERROR = 5,
  ENTITY_NOT_FOUND = 6,
  CANT_ROUTE_REQUEST = 7,
  FRAME_TOO_LONG = 8,
  MARKET_CLOSED = 9,
  CONCURRENT_MODIFICATION = 10,
  BLOCKED_PAYLOAD_TYPE = 11
}

/**
 * Request for the authorizing an application to work with the cTrader platform Proxies.
 */
interface IProtoOAApplicationAuthReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique Client ID provided during the registration.
   */
  clientId: string;
  /**
   * The unique Client ID provided during the registration.
   */
  clientSecret: string;
}

/**
 * Response to the ProtoOAApplicationAuthReq request.
 */
interface IProtoOAApplicationAuthRes {
  payloadType?: ProtoOAPayloadType | null;
}

/**
 * Request for the authorizing trading account session. Requires established authorized connection with the client application using ProtoOAApplicationAuthReq.
 */
interface IProtoOAAccountAuthReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountId: int64;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  accessToken: string;
}

/**
 * Response to the ProtoOAApplicationAuthRes request.
 */
interface IProtoOAAccountAuthRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountId: int64;
}

/**
 * Generic response when an ERROR occurred.
 */
interface IProtoOAErrorRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountId?: int64 | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  errorCode: string;
  /**
   * The name of the ProtoErrorCode or the other custom ErrorCodes (e.g. ProtoCHErrorCode).
   */
  description?: string | null;
}

/**
 * The event that is sent when the connection with the client application is cancelled by the server. All the sessions for the traders' accounts will be terminated.
 */
interface IProtoOAClientDisconnectEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The disconnection reason explained. For example: The application access was blocked by cTrader Administrator.
   */
  reason?: string | null;
}

/**
 * Event that is sent when a session to a specific trader's account is terminated by the server but the existing connections with the other trader's accounts are maintained.
 */
interface IProtoOAAccountsTokenInvalidatedEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountIds: int64[];
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  reason?: string | null;
}

/**
 * Request for getting the proxy version. Can be used to check the current version of the Open API scheme.
 */
interface IProtoOAVersionReq {
  payloadType?: ProtoOAPayloadType | null;
}

/**
 * Response to the ProtoOAVersionReq request.
 */
interface IProtoOAVersionRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The current version of the server application.
   */
  version: string;
}

/**
 * Request for sending a new trading order. Allowed only if the accessToken has the "trade" permissions for the trading account.
 */
interface IProtoOANewOrderReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountId: int64;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  symbolId: int64;
  /**
   * The unique identifier of a symbol in cTrader platform.
   */
  orderType: ProtoOAOrderType;
  /**
   * The type of an order - MARKET, LIMIT, STOP, MARKET_RANGE, STOP_LIMIT.
   */
  tradeSide: ProtoOATradeSide;
  /**
   * The trade direction - BUY or SELL.
   */
  volume: int64;
  /**
   * The volume represented in 0.01 of a unit (e.g. US$ 10.00 = 1000).
   */
  limitPrice?: double | null;
  /**
   * The limit price, can be specified for the LIMIT order only.
   */
  stopPrice?: double | null;
  /**
   * Stop Price, can be specified for the STOP and the STOP_LIMIT orders only.
   */
  timeInForce?: ProtoOATimeInForce | null;
  /**
   * The specific order execution or expiration instruction - GOOD_TILL_DATE, GOOD_TILL_CANCEL, IMMEDIATE_OR_CANCEL, FILL_OR_KILL, MARKET_ON_OPEN.
   */
  expirationTimestamp?: int64 | null;
  /**
   * The exact Order expiration time. Should be set for the Good Till Date orders.
   */
  stopLoss?: double | null;
  /**
   * The absolute Stop Loss price (1.23456 for example). Not supported for the MARKER orders.
   */
  takeProfit?: double | null;
  /**
   * The absolute Take Profit price (1.23456 for example). Unsupported for the MARKER orders.
   */
  comment?: string | null;
  /**
   * User-specified comment. MaxLength = 512.
   */
  baseSlippagePrice?: double | null;
  /**
   * Base price to calculate relative slippage price for MARKET_RANGE order.
   */
  slippageInPoints?: int32 | null;
  /**
   * Slippage distance for MARKET_RANGE and STOP_LIMIT order.
   */
  label?: string | null;
  /**
   * User-specified label. MaxLength = 100.
   */
  positionId?: int64 | null;
  /**
   * Reference to the existing position if the Order is intended to modify it.
   */
  clientOrderId?: string | null;
  /**
   * Optional user-specific clientOrderId (similar to FIX ClOrderID). MaxLength = 50.
   */
  relativeStopLoss?: int64 | null;
  /**
   * Relative Stop Loss that can be specified instead of the absolute as one. Specified in 1/100000 of unit of a price. For BUY stopLoss = entryPrice - relativeStopLoss, for SELL stopLoss = entryPrice + relativeStopLoss.
   */
  relativeTakeProfit?: int64 | null;
  /**
   * Relative Take Profit that can be specified instead of the absolute one. Specified in 1/100000 of unit of a price. For BUY takeProfit = entryPrice + relativeTakeProfit, for SELL takeProfit = entryPrice - relativeTakeProfit.
   */
  guaranteedStopLoss?: bool | null;
  /**
   * If TRUE then stopLoss is guaranteed. Available for the French Risk or the Guaranteed Stop Loss Accounts.
   */
  trailingStopLoss?: bool | null;
  /**
   * If TRUE then the Stop Loss is Trailing.
   */
  stopTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/**
 * The event that is sent following the successful order acceptance or execution by the server. Acts as response to the ProtoOANewOrderReq, ProtoOACancelOrderReq, ProtoOAAmendOrderReq, ProtoOAAmendPositionSLTPReq, ProtoOAClosePositionReq requests. Also, the event is sent when a Deposit/Withdrawal took place.
 */
interface IProtoOAExecutionEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  executionType: ProtoOAExecutionType;
  /**
   * Type of the order operation. For example: ACCEPTED, FILLED, etc.
   */
  position?: ProtoOAPosition | null;
  /**
   * Reference to the position linked with the execution
   */
  order?: ProtoOAOrder | null;
  /**
   * Reference to the initial order.
   */
  deal?: ProtoOADeal | null;
  /**
   * Reference to the deal (execution).
   */
  bonusDepositWithdraw?: ProtoOABonusDepositWithdraw | null;
  /**
   * Reference to the Bonus Deposit or Withdrawal operation.
   */
  depositWithdraw?: ProtoOADepositWithdraw | null;
  /**
   * Reference to the Deposit or Withdrawal operation.
   */
  errorCode?: string | null;
  /**
   * The name of the ProtoErrorCode or the other custom ErrorCodes (e.g. ProtoCHErrorCode).
   */
  isServerEvent?: bool | null;
}

/**
 * Request for cancelling existing pending order. Allowed only if the accessToken has "trade" permissions for the trading account.
 */
interface IProtoOACancelOrderReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  orderId: int64;
}

/**
 * Request for amending the existing pending order. Allowed only if the Access Token has "trade" permissions for the trading account.
 */
interface IProtoOAAmendOrderReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  orderId: int64;
  /**
   * The unique ID of the order.
   */
  volume?: int64 | null;
  /**
   * Volume, represented in 0.01 of a unit (e.g. cents).
   */
  limitPrice?: double | null;
  /**
   * The Limit Price, can be specified for the LIMIT order only.
   */
  stopPrice?: double | null;
  /**
   * The Stop Price, can be specified for the STOP and the STOP_LIMIT orders.
   */
  expirationTimestamp?: int64 | null;
  /**
   * The exact Order expiration time. Should be set for the Good Till Date orders.
   */
  stopLoss?: double | null;
  /**
   * The absolute Stop Loss price (e.g. 1.23456). Not supported for the MARKER orders.
   */
  takeProfit?: double | null;
  /**
   * The absolute Take Profit price (e.g. 1.23456). Not supported for the MARKER orders.
   */
  slippageInPoints?: int32 | null;
  /**
   * Slippage distance for the MARKET_RANGE and the STOP_LIMIT orders.
   */
  relativeStopLoss?: int64 | null;
  /**
   * The relative Stop Loss can be specified instead of the absolute one. Specified in 1/100000 of a unit of price. For BUY stopLoss = entryPrice - relativeStopLoss, for SELL stopLoss = entryPrice + relativeStopLoss.
   */
  relativeTakeProfit?: int64 | null;
  /**
   * The relative Take Profit can be specified instead of the absolute one. Specified in 1/100000 of a unit of price. For BUY takeProfit = entryPrice + relativeTakeProfit, for SELL takeProfit = entryPrice - relativeTakeProfit.
   */
  guaranteedStopLoss?: bool | null;
  /**
   * If TRUE then the Stop Loss is guaranteed. Available for the French Risk or the Guaranteed Stop Loss Accounts.
   */
  trailingStopLoss?: bool | null;
  /**
   * If TRUE then the Trailing Stop Loss is applied.
   */
  stopTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/**
 * Request for amending StopLoss and TakeProfit of existing position. Allowed only if the accessToken has "trade" permissions for the trading account.
 */
interface IProtoOAAmendPositionSLTPReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  positionId: int64;
  /**
   * The unique ID of the position to amend.
   */
  stopLoss?: double | null;
  /**
   * Absolute Stop Loss price (1.23456 for example).
   */
  takeProfit?: double | null;
  /**
   * Absolute Take Profit price (1.26543 for example).
   */
  guaranteedStopLoss?: bool | null;
  /**
   * If TRUE then the Stop Loss is guaranteed. Available for the French Risk or the Guaranteed Stop Loss Accounts.
   */
  trailingStopLoss?: bool | null;
  /**
   * If TRUE then the Trailing Stop Loss is applied.
   */
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/**
 * Request for closing or partially closing of an existing position. Allowed only if the accessToken has "trade" permissions for the trading account.
 */
interface IProtoOAClosePositionReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  positionId: int64;
  /**
   * The unique ID of the position to close.
   */
  volume: int64;
}

/**
 * Event that is sent when the level of the Trailing Stop Loss is changed due to the price level changes.
 */
interface IProtoOATrailingSLChangedEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  positionId: int64;
  /**
   * The unique ID of the position.
   */
  orderId: int64;
  /**
   * The unique ID of the order.
   */
  stopPrice: double;
  /**
   * New value of the Stop Loss price.
   */
  utcLastUpdateTimestamp: int64;
}

/**
 * Request for the list of assets available for a trader's account.
 */
interface IProtoOAAssetListReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Response to the ProtoOAAssetListReq request.
 */
interface IProtoOAAssetListRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  asset: ProtoOAAsset[];
}

/**
 * Request for a list of symbols available for a trading account. Symbol entries are returned with the limited set of fields.
 */
interface IProtoOASymbolsListReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Response to the ProtoOASymbolsListReq request.
 */
interface IProtoOASymbolsListRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbol: ProtoOALightSymbol[];
}

/**
 * Request for getting a full symbol entity.
 */
interface IProtoOASymbolByIdReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64[];
}

/**
 * Response to the ProtoOASymbolByIdReq request.
 */
interface IProtoOASymbolByIdRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbol: ProtoOASymbol[];
}

/**
 * Request for getting a conversion chain between two assets that consists of several symbols. Use when no direct quote is available
 */
interface IProtoOASymbolsForConversionReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  firstAssetId: int64;
  /**
   * The ID of the firs asset in the conversation chain. e.g.: for EUR/USD the firstAssetId is EUR ID and lastAssetId is USD ID.
   */
  lastAssetId: int64;
}

/**
 * Response to the ProtoOASymbolsForConversionReq request.
 */
interface IProtoOASymbolsForConversionRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbol: ProtoOALightSymbol[];
}

/**
 * Event that is sent when the symbol is changed on the Server side.
 */
interface IProtoOASymbolChangedEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64[];
}

/**
 * Request for a list of asset classes available for the trader's account.
 */
interface IProtoOAAssetClassListReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Response to the ProtoOAAssetListReq request.
 */
interface IProtoOAAssetClassListRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  assetClass: ProtoOAAssetClass[];
}

/**
 * Request for getting data of Trader's Account.
 */
interface IProtoOATraderReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Response to the ProtoOATraderReq request.
 */
interface IProtoOATraderRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  trader: ProtoOATrader;
}

/**
 * Event that is sent when a Trader is updated on Server side.
 */
interface IProtoOATraderUpdatedEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  trader: ProtoOATrader;
}

/**
 * Request for getting Trader's current open positions and pending orders data.
 */
interface IProtoOAReconcileReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * The response to the ProtoOAReconcileReq request.
 */
interface IProtoOAReconcileRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  position: ProtoOAPosition[];
  /**
   * The list of trader's account open positions.
   */
  order: ProtoOAOrder[];
}

/**
 * Event that is sent when errors occur during the order requests.
 */
interface IProtoOAOrderErrorEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  errorCode: string;
  /**
   * The name of the ProtoErrorCode or the other custom ErrorCodes (e.g. ProtoCHErrorCode).
   */
  orderId?: int64 | null;
  /**
   * The unique ID of the order.
   */
  positionId?: int64 | null;
  /**
   * The unique ID of the position.
   */
  description?: string | null;
}

/**
 * Request for getting Trader's deals historical data (execution details).
 */
interface IProtoOADealListReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  fromTimestamp: int64;
  /**
   * The UNIX time from which the search starts >=0 (1-1-1970). Validation: toTimestamp - fromTimestamp <= 604800000 (1 week).
   */
  toTimestamp: int64;
  /**
   * The UNIX time where to stop searching <= 2147483646000 (19-1-2038).
   */
  maxRows?: int32 | null;
}

/**
 * The response to the ProtoOADealListRes request.
 */
interface IProtoOADealListRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  deal: ProtoOADeal[];
  /**
   * The list of the deals.
   */
  hasMore: bool;
}

/**
 * Request for getting the margin estimate. Can be used before sending a new order request.
 */
interface IProtoOAExpectedMarginReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64;
  /**
   * Unique identifier of the Symbol in cTrader platform.
   */
  volume: int64[];
}

/**
 * The response to the ProtoOAExpectedMarginReq request.
 */
interface IProtoOAExpectedMarginRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  margin: ProtoOAExpectedMargin[];
}

/**
 * Event that is sent when the margin allocated to a specific position is changed.
 */
interface IProtoOAMarginChangedEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  positionId: uint64;
  /**
   * The unique ID of the position.
   */
  usedMargin: uint64;
}

/**
 * Request for getting Trader's historical data of deposits and withdrawals.
 */
interface IProtoOACashFlowHistoryListReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  fromTimestamp: int64;
  /**
   * The UNIX time from which the search starts >=0 (1-1-1970). Validation: toTimestamp - fromTimestamp <= 604800000 (1 week).
   */
  toTimestamp: int64;
}

/**
 * Response to the ProtoOACashFlowHistoryListReq request.
 */
interface IProtoOACashFlowHistoryListRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  depositWithdraw: ProtoOADepositWithdraw[];
}

/**
 * Request for getting the list of granted trader's account for the access token.
 */
interface IProtoOAGetAccountListByAccessTokenReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The Access Token issued for providing access to the Trader's Account.
   */
  accessToken: string;
}

/**
 * Response to the ProtoOAGetAccountListByAccessTokenReq request.
 */
interface IProtoOAGetAccountListByAccessTokenRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The Access Token issued for providing access to the Trader's Account.
   */
  accessToken: string;
  /**
   * The Access Token issued for providing access to the Trader's Account.
   */
  permissionScope?: ProtoOAClientPermissionScope | null;
  /**
   * SCOPE_VIEW, SCOPE_TRADE.
   */
  ctidTraderAccount: ProtoOACtidTraderAccount[];
}

/**
 * +------------------------------------------------------------------+
 * |                              Quotes                              |
 * +------------------------------------------------------------------+
 *  Request for subscribing on spot events of the specified symbol.
 */
interface IProtoOASubscribeSpotsReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64[];
}

/**
 * Response to the ProtoOASubscribeSpotsReq request.
 */
interface IProtoOASubscribeSpotsRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Request for unsubscribing from the spot events of the specified symbol.
 */
interface IProtoOAUnsubscribeSpotsReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64[];
}

/**
 * Response to the ProtoOASubscribeSpotsRes request.
 */
interface IProtoOAUnsubscribeSpotsRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Event that is sent when a new spot event is generated on the server side. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq.
 */
interface IProtoOASpotEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64;
  /**
   * Unique identifier of the Symbol in cTrader platform.
   */
  bid?: uint64 | null;
  /**
   * Bid price.
   */
  ask?: uint64 | null;
  /**
   * Ask price.
   */
  trendbar: ProtoOATrendbar[];
}

/**
 * Request for subscribing for live trend bars. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq.
 */
interface IProtoOASubscribeLiveTrendbarReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  period: ProtoOATrendbarPeriod;
  /**
   * Specifies period of trend bar series (e.g. M1, M10, etc.).
   */
  symbolId: int64;
}

/**
 * Request for unsubscribing from the live trend bars.
 */
interface IProtoOAUnsubscribeLiveTrendbarReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  period: ProtoOATrendbarPeriod;
  /**
   * Specifies period of trend bar series (e.g. M1, M10, etc.).
   */
  symbolId: int64;
}

/**
 * Request for getting historical trend bars for the symbol.
 */
interface IProtoOAGetTrendbarsReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  fromTimestamp: int64;
  /**
   * The exact time of starting the search in milliseconds. Must be bigger or equal to zero (1-1-1970). Validation: toTimestamp - fromTimestamp <= X, where X depends on series period: M1, M2, M3, M4, M5: 302400000 (5 weeks); M10, M15, M30, H1: 21168000000 (35 weeks), H4, H12, D1: 31622400000 (1 year); W1, MN1: 158112000000 (5 years).
   */
  toTimestamp: int64;
  /**
   * The exact time of finishing the search in milliseconds. Smaller or equal to 2147483646000 (19-1-2038).
   */
  period: ProtoOATrendbarPeriod;
  /**
   * Specifies period of trend bar series (e.g. M1, M10, etc.).
   */
  symbolId: int64;
}

/**
 * Response to the ProtoOAGetTrendbarsReq request.
 */
interface IProtoOAGetTrendbarsRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  period: ProtoOATrendbarPeriod;
  /**
   * Specifies period of trend bar series (e.g. M1, M10, etc.).
   */
  timestamp: int64;
  /**
   * Equals to toTimestamp from the request.
   */
  trendbar: ProtoOATrendbar[];
  /**
   * The list of trend bars.
   */
  symbolId?: int64 | null;
}

/**
 * Request for getting historical tick data for the symbol.
 */
interface IProtoOAGetTickDataReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64;
  /**
   * Unique identifier of the Symbol in cTrader platform.
   */
  type: ProtoOAQuoteType;
  /**
   * Bid/Ask (1/2).
   */
  fromTimestamp: int64;
  /**
   * The exact time of starting the search in milliseconds. Must be bigger of equal to zero (1-1-1970). Validation: toTimestamp - fromTimestamp <= 604800000 (1 week).
   */
  toTimestamp: int64;
}

/**
 * Response to the ProtoOAGetTickDataReq request.
 */
interface IProtoOAGetTickDataRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  tickData: ProtoOATickData[];
  /**
   * The list of ticks.
   */
  hasMore: bool;
}

/**
 * Request for getting details of Trader's profile. Limited due to GDRP requirements.
 */
interface IProtoOAGetCtidProfileByTokenReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The Access Token issued for providing access to the Trader's Account.
   */
  accessToken: string;
}

/**
 * Response to the ProtoOAGetCtidProfileByTokenReq request.
 */
interface IProtoOAGetCtidProfileByTokenRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Trader's profile.
   */
  profile: ProtoOACtidProfile;
}

/**
 * Event that is sent when the structure of depth of market is changed. Requires subscription on the depth of markets for the symbol, see ProtoOASubscribeDepthQuotesReq.
 */
interface IProtoOADepthEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: uint64;
  /**
   * Unique identifier of the Symbol in cTrader platform.
   */
  newQuotes: ProtoOADepthQuote[];
  /**
   * The list of changes in the depth of market quotes.
   */
  deletedQuotes: uint64[];
}

/**
 * Request for subscribing on depth of market of the specified symbol.
 */
interface IProtoOASubscribeDepthQuotesReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64[];
}

/**
 * Response to the ProtoOASubscribeDepthQuotesReq request.
 */
interface IProtoOASubscribeDepthQuotesRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Request for unsubscribing from the depth of market of the specified symbol.
 */
interface IProtoOAUnsubscribeDepthQuotesReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolId: int64[];
}

/**
 * Response to the ProtoOAUnsubscribeDepthQuotesReq request.
 */
interface IProtoOAUnsubscribeDepthQuotesRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Request for a list of symbol categories available for a trading account.
 */
interface IProtoOASymbolCategoryListReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
}

/**
 * Response to the ProtoSymbolCategoryListReq request.
 */
interface IProtoOASymbolCategoryListRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  ctidTraderAccountId: int64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.
   */
  symbolCategory: ProtoOASymbolCategory[];
}

/**
 * Request for logout of  trading account session.
 */
interface IProtoOAAccountLogoutReq {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountId: int64;
}

/**
 * Response to the ProtoOATraderLogoutReq request.
 */
interface IProtoOAAccountLogoutRes {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountId: int64;
}

/**
 * Event that is sent when the established session for an account is dropped on the server side.
 * A new session must be authorized for the account.
 */
interface IProtoOAAccountDisconnectEvent {
  payloadType?: ProtoOAPayloadType | null;
  /**
   * The unique identifier of the trader's account in cTrader platform.
   */
  ctidTraderAccountId: int64;
}

/**
 * Request for the authorizing an application to work with the cTrader platform Proxies.
 */
class ProtoOAApplicationAuthReq {
  public static fromBuffer(buffer: Buffer): IProtoOAApplicationAuthReq {}
  public static toBuffer(message: IProtoOAApplicationAuthReq): Buffer {}
}

/**
 * Response to the ProtoOAApplicationAuthReq request.
 */
class ProtoOAApplicationAuthRes {
  public static fromBuffer(buffer: Buffer): IProtoOAApplicationAuthRes {}
  public static toBuffer(message: IProtoOAApplicationAuthRes): Buffer {}
}

/**
 * Request for the authorizing trading account session. Requires established authorized connection with the client application using ProtoOAApplicationAuthReq.
 */
class ProtoOAAccountAuthReq {
  public static fromBuffer(buffer: Buffer): IProtoOAAccountAuthReq {}
  public static toBuffer(message: IProtoOAAccountAuthReq): Buffer {}
}

/**
 * Response to the ProtoOAApplicationAuthRes request.
 */
class ProtoOAAccountAuthRes {
  public static fromBuffer(buffer: Buffer): IProtoOAAccountAuthRes {}
  public static toBuffer(message: IProtoOAAccountAuthRes): Buffer {}
}

/**
 * Generic response when an ERROR occurred.
 */
class ProtoOAErrorRes {
  public static fromBuffer(buffer: Buffer): IProtoOAErrorRes {}
  public static toBuffer(message: IProtoOAErrorRes): Buffer {}
}

/**
 * The event that is sent when the connection with the client application is cancelled by the server. All the sessions for the traders' accounts will be terminated.
 */
class ProtoOAClientDisconnectEvent {
  public static fromBuffer(buffer: Buffer): IProtoOAClientDisconnectEvent {}
  public static toBuffer(message: IProtoOAClientDisconnectEvent): Buffer {}
}

/**
 * Event that is sent when a session to a specific trader's account is terminated by the server but the existing connections with the other trader's accounts are maintained.
 */
class ProtoOAAccountsTokenInvalidatedEvent {
  public static fromBuffer(
    buffer: Buffer
  ): IProtoOAAccountsTokenInvalidatedEvent {}
  public static toBuffer(
    message: IProtoOAAccountsTokenInvalidatedEvent
  ): Buffer {}
}

/**
 * Request for getting the proxy version. Can be used to check the current version of the Open API scheme.
 */
class ProtoOAVersionReq {
  public static fromBuffer(buffer: Buffer): IProtoOAVersionReq {}
  public static toBuffer(message: IProtoOAVersionReq): Buffer {}
}

/**
 * Response to the ProtoOAVersionReq request.
 */
class ProtoOAVersionRes {
  public static fromBuffer(buffer: Buffer): IProtoOAVersionRes {}
  public static toBuffer(message: IProtoOAVersionRes): Buffer {}
}

/**
 * Request for sending a new trading order. Allowed only if the accessToken has the "trade" permissions for the trading account.
 */
class ProtoOANewOrderReq {
  public static fromBuffer(buffer: Buffer): IProtoOANewOrderReq {}
  public static toBuffer(message: IProtoOANewOrderReq): Buffer {}
}

/**
 * The event that is sent following the successful order acceptance or execution by the server. Acts as response to the ProtoOANewOrderReq, ProtoOACancelOrderReq, ProtoOAAmendOrderReq, ProtoOAAmendPositionSLTPReq, ProtoOAClosePositionReq requests. Also, the event is sent when a Deposit/Withdrawal took place.
 */
class ProtoOAExecutionEvent {
  public static fromBuffer(buffer: Buffer): IProtoOAExecutionEvent {}
  public static toBuffer(message: IProtoOAExecutionEvent): Buffer {}
}

/**
 * Request for cancelling existing pending order. Allowed only if the accessToken has "trade" permissions for the trading account.
 */
class ProtoOACancelOrderReq {
  public static fromBuffer(buffer: Buffer): IProtoOACancelOrderReq {}
  public static toBuffer(message: IProtoOACancelOrderReq): Buffer {}
}

/**
 * Request for amending the existing pending order. Allowed only if the Access Token has "trade" permissions for the trading account.
 */
class ProtoOAAmendOrderReq {
  public static fromBuffer(buffer: Buffer): IProtoOAAmendOrderReq {}
  public static toBuffer(message: IProtoOAAmendOrderReq): Buffer {}
}

/**
 * Request for amending StopLoss and TakeProfit of existing position. Allowed only if the accessToken has "trade" permissions for the trading account.
 */
class ProtoOAAmendPositionSLTPReq {
  public static fromBuffer(buffer: Buffer): IProtoOAAmendPositionSLTPReq {}
  public static toBuffer(message: IProtoOAAmendPositionSLTPReq): Buffer {}
}

/**
 * Request for closing or partially closing of an existing position. Allowed only if the accessToken has "trade" permissions for the trading account.
 */
class ProtoOAClosePositionReq {
  public static fromBuffer(buffer: Buffer): IProtoOAClosePositionReq {}
  public static toBuffer(message: IProtoOAClosePositionReq): Buffer {}
}

/**
 * Event that is sent when the level of the Trailing Stop Loss is changed due to the price level changes.
 */
class ProtoOATrailingSLChangedEvent {
  public static fromBuffer(buffer: Buffer): IProtoOATrailingSLChangedEvent {}
  public static toBuffer(message: IProtoOATrailingSLChangedEvent): Buffer {}
}

/**
 * Request for the list of assets available for a trader's account.
 */
class ProtoOAAssetListReq {
  public static fromBuffer(buffer: Buffer): IProtoOAAssetListReq {}
  public static toBuffer(message: IProtoOAAssetListReq): Buffer {}
}

/**
 * Response to the ProtoOAAssetListReq request.
 */
class ProtoOAAssetListRes {
  public static fromBuffer(buffer: Buffer): IProtoOAAssetListRes {}
  public static toBuffer(message: IProtoOAAssetListRes): Buffer {}
}

/**
 * Request for a list of symbols available for a trading account. Symbol entries are returned with the limited set of fields.
 */
class ProtoOASymbolsListReq {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolsListReq {}
  public static toBuffer(message: IProtoOASymbolsListReq): Buffer {}
}

/**
 * Response to the ProtoOASymbolsListReq request.
 */
class ProtoOASymbolsListRes {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolsListRes {}
  public static toBuffer(message: IProtoOASymbolsListRes): Buffer {}
}

/**
 * Request for getting a full symbol entity.
 */
class ProtoOASymbolByIdReq {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolByIdReq {}
  public static toBuffer(message: IProtoOASymbolByIdReq): Buffer {}
}

/**
 * Response to the ProtoOASymbolByIdReq request.
 */
class ProtoOASymbolByIdRes {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolByIdRes {}
  public static toBuffer(message: IProtoOASymbolByIdRes): Buffer {}
}

/**
 * Request for getting a conversion chain between two assets that consists of several symbols. Use when no direct quote is available
 */
class ProtoOASymbolsForConversionReq {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolsForConversionReq {}
  public static toBuffer(message: IProtoOASymbolsForConversionReq): Buffer {}
}

/**
 * Response to the ProtoOASymbolsForConversionReq request.
 */
class ProtoOASymbolsForConversionRes {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolsForConversionRes {}
  public static toBuffer(message: IProtoOASymbolsForConversionRes): Buffer {}
}

/**
 * Event that is sent when the symbol is changed on the Server side.
 */
class ProtoOASymbolChangedEvent {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolChangedEvent {}
  public static toBuffer(message: IProtoOASymbolChangedEvent): Buffer {}
}

/**
 * Request for a list of asset classes available for the trader's account.
 */
class ProtoOAAssetClassListReq {
  public static fromBuffer(buffer: Buffer): IProtoOAAssetClassListReq {}
  public static toBuffer(message: IProtoOAAssetClassListReq): Buffer {}
}

/**
 * Response to the ProtoOAAssetListReq request.
 */
class ProtoOAAssetClassListRes {
  public static fromBuffer(buffer: Buffer): IProtoOAAssetClassListRes {}
  public static toBuffer(message: IProtoOAAssetClassListRes): Buffer {}
}

/**
 * Request for getting data of Trader's Account.
 */
class ProtoOATraderReq {
  public static fromBuffer(buffer: Buffer): IProtoOATraderReq {}
  public static toBuffer(message: IProtoOATraderReq): Buffer {}
}

/**
 * Response to the ProtoOATraderReq request.
 */
class ProtoOATraderRes {
  public static fromBuffer(buffer: Buffer): IProtoOATraderRes {}
  public static toBuffer(message: IProtoOATraderRes): Buffer {}
}

/**
 * Event that is sent when a Trader is updated on Server side.
 */
class ProtoOATraderUpdatedEvent {
  public static fromBuffer(buffer: Buffer): IProtoOATraderUpdatedEvent {}
  public static toBuffer(message: IProtoOATraderUpdatedEvent): Buffer {}
}

/**
 * Request for getting Trader's current open positions and pending orders data.
 */
class ProtoOAReconcileReq {
  public static fromBuffer(buffer: Buffer): IProtoOAReconcileReq {}
  public static toBuffer(message: IProtoOAReconcileReq): Buffer {}
}

/**
 * The response to the ProtoOAReconcileReq request.
 */
class ProtoOAReconcileRes {
  public static fromBuffer(buffer: Buffer): IProtoOAReconcileRes {}
  public static toBuffer(message: IProtoOAReconcileRes): Buffer {}
}

/**
 * Event that is sent when errors occur during the order requests.
 */
class ProtoOAOrderErrorEvent {
  public static fromBuffer(buffer: Buffer): IProtoOAOrderErrorEvent {}
  public static toBuffer(message: IProtoOAOrderErrorEvent): Buffer {}
}

/**
 * Request for getting Trader's deals historical data (execution details).
 */
class ProtoOADealListReq {
  public static fromBuffer(buffer: Buffer): IProtoOADealListReq {}
  public static toBuffer(message: IProtoOADealListReq): Buffer {}
}

/**
 * The response to the ProtoOADealListRes request.
 */
class ProtoOADealListRes {
  public static fromBuffer(buffer: Buffer): IProtoOADealListRes {}
  public static toBuffer(message: IProtoOADealListRes): Buffer {}
}

/**
 * Request for getting the margin estimate. Can be used before sending a new order request.
 */
class ProtoOAExpectedMarginReq {
  public static fromBuffer(buffer: Buffer): IProtoOAExpectedMarginReq {}
  public static toBuffer(message: IProtoOAExpectedMarginReq): Buffer {}
}

/**
 * The response to the ProtoOAExpectedMarginReq request.
 */
class ProtoOAExpectedMarginRes {
  public static fromBuffer(buffer: Buffer): IProtoOAExpectedMarginRes {}
  public static toBuffer(message: IProtoOAExpectedMarginRes): Buffer {}
}

/**
 * Event that is sent when the margin allocated to a specific position is changed.
 */
class ProtoOAMarginChangedEvent {
  public static fromBuffer(buffer: Buffer): IProtoOAMarginChangedEvent {}
  public static toBuffer(message: IProtoOAMarginChangedEvent): Buffer {}
}

/**
 * Request for getting Trader's historical data of deposits and withdrawals.
 */
class ProtoOACashFlowHistoryListReq {
  public static fromBuffer(buffer: Buffer): IProtoOACashFlowHistoryListReq {}
  public static toBuffer(message: IProtoOACashFlowHistoryListReq): Buffer {}
}

/**
 * Response to the ProtoOACashFlowHistoryListReq request.
 */
class ProtoOACashFlowHistoryListRes {
  public static fromBuffer(buffer: Buffer): IProtoOACashFlowHistoryListRes {}
  public static toBuffer(message: IProtoOACashFlowHistoryListRes): Buffer {}
}

/**
 * Request for getting the list of granted trader's account for the access token.
 */
class ProtoOAGetAccountListByAccessTokenReq {
  public static fromBuffer(
    buffer: Buffer
  ): IProtoOAGetAccountListByAccessTokenReq {}
  public static toBuffer(
    message: IProtoOAGetAccountListByAccessTokenReq
  ): Buffer {}
}

/**
 * Response to the ProtoOAGetAccountListByAccessTokenReq request.
 */
class ProtoOAGetAccountListByAccessTokenRes {
  public static fromBuffer(
    buffer: Buffer
  ): IProtoOAGetAccountListByAccessTokenRes {}
  public static toBuffer(
    message: IProtoOAGetAccountListByAccessTokenRes
  ): Buffer {}
}

/**
 * +------------------------------------------------------------------+
 * |                              Quotes                              |
 * +------------------------------------------------------------------+
 *  Request for subscribing on spot events of the specified symbol.
 */
class ProtoOASubscribeSpotsReq {
  public static fromBuffer(buffer: Buffer): IProtoOASubscribeSpotsReq {}
  public static toBuffer(message: IProtoOASubscribeSpotsReq): Buffer {}
}

/**
 * Response to the ProtoOASubscribeSpotsReq request.
 */
class ProtoOASubscribeSpotsRes {
  public static fromBuffer(buffer: Buffer): IProtoOASubscribeSpotsRes {}
  public static toBuffer(message: IProtoOASubscribeSpotsRes): Buffer {}
}

/**
 * Request for unsubscribing from the spot events of the specified symbol.
 */
class ProtoOAUnsubscribeSpotsReq {
  public static fromBuffer(buffer: Buffer): IProtoOAUnsubscribeSpotsReq {}
  public static toBuffer(message: IProtoOAUnsubscribeSpotsReq): Buffer {}
}

/**
 * Response to the ProtoOASubscribeSpotsRes request.
 */
class ProtoOAUnsubscribeSpotsRes {
  public static fromBuffer(buffer: Buffer): IProtoOAUnsubscribeSpotsRes {}
  public static toBuffer(message: IProtoOAUnsubscribeSpotsRes): Buffer {}
}

/**
 * Event that is sent when a new spot event is generated on the server side. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq.
 */
class ProtoOASpotEvent {
  public static fromBuffer(buffer: Buffer): IProtoOASpotEvent {}
  public static toBuffer(message: IProtoOASpotEvent): Buffer {}
}

/**
 * Request for subscribing for live trend bars. Requires subscription on the spot events, see ProtoOASubscribeSpotsReq.
 */
class ProtoOASubscribeLiveTrendbarReq {
  public static fromBuffer(buffer: Buffer): IProtoOASubscribeLiveTrendbarReq {}
  public static toBuffer(message: IProtoOASubscribeLiveTrendbarReq): Buffer {}
}

/**
 * Request for unsubscribing from the live trend bars.
 */
class ProtoOAUnsubscribeLiveTrendbarReq {
  public static fromBuffer(
    buffer: Buffer
  ): IProtoOAUnsubscribeLiveTrendbarReq {}
  public static toBuffer(message: IProtoOAUnsubscribeLiveTrendbarReq): Buffer {}
}

/**
 * Request for getting historical trend bars for the symbol.
 */
class ProtoOAGetTrendbarsReq {
  public static fromBuffer(buffer: Buffer): IProtoOAGetTrendbarsReq {}
  public static toBuffer(message: IProtoOAGetTrendbarsReq): Buffer {}
}

/**
 * Response to the ProtoOAGetTrendbarsReq request.
 */
class ProtoOAGetTrendbarsRes {
  public static fromBuffer(buffer: Buffer): IProtoOAGetTrendbarsRes {}
  public static toBuffer(message: IProtoOAGetTrendbarsRes): Buffer {}
}

/**
 * Request for getting historical tick data for the symbol.
 */
class ProtoOAGetTickDataReq {
  public static fromBuffer(buffer: Buffer): IProtoOAGetTickDataReq {}
  public static toBuffer(message: IProtoOAGetTickDataReq): Buffer {}
}

/**
 * Response to the ProtoOAGetTickDataReq request.
 */
class ProtoOAGetTickDataRes {
  public static fromBuffer(buffer: Buffer): IProtoOAGetTickDataRes {}
  public static toBuffer(message: IProtoOAGetTickDataRes): Buffer {}
}

/**
 * Request for getting details of Trader's profile. Limited due to GDRP requirements.
 */
class ProtoOAGetCtidProfileByTokenReq {
  public static fromBuffer(buffer: Buffer): IProtoOAGetCtidProfileByTokenReq {}
  public static toBuffer(message: IProtoOAGetCtidProfileByTokenReq): Buffer {}
}

/**
 * Response to the ProtoOAGetCtidProfileByTokenReq request.
 */
class ProtoOAGetCtidProfileByTokenRes {
  public static fromBuffer(buffer: Buffer): IProtoOAGetCtidProfileByTokenRes {}
  public static toBuffer(message: IProtoOAGetCtidProfileByTokenRes): Buffer {}
}

/**
 * Event that is sent when the structure of depth of market is changed. Requires subscription on the depth of markets for the symbol, see ProtoOASubscribeDepthQuotesReq.
 */
class ProtoOADepthEvent {
  public static fromBuffer(buffer: Buffer): IProtoOADepthEvent {}
  public static toBuffer(message: IProtoOADepthEvent): Buffer {}
}

/**
 * Request for subscribing on depth of market of the specified symbol.
 */
class ProtoOASubscribeDepthQuotesReq {
  public static fromBuffer(buffer: Buffer): IProtoOASubscribeDepthQuotesReq {}
  public static toBuffer(message: IProtoOASubscribeDepthQuotesReq): Buffer {}
}

/**
 * Response to the ProtoOASubscribeDepthQuotesReq request.
 */
class ProtoOASubscribeDepthQuotesRes {
  public static fromBuffer(buffer: Buffer): IProtoOASubscribeDepthQuotesRes {}
  public static toBuffer(message: IProtoOASubscribeDepthQuotesRes): Buffer {}
}

/**
 * Request for unsubscribing from the depth of market of the specified symbol.
 */
class ProtoOAUnsubscribeDepthQuotesReq {
  public static fromBuffer(buffer: Buffer): IProtoOAUnsubscribeDepthQuotesReq {}
  public static toBuffer(message: IProtoOAUnsubscribeDepthQuotesReq): Buffer {}
}

/**
 * Response to the ProtoOAUnsubscribeDepthQuotesReq request.
 */
class ProtoOAUnsubscribeDepthQuotesRes {
  public static fromBuffer(buffer: Buffer): IProtoOAUnsubscribeDepthQuotesRes {}
  public static toBuffer(message: IProtoOAUnsubscribeDepthQuotesRes): Buffer {}
}

/**
 * Request for a list of symbol categories available for a trading account.
 */
class ProtoOASymbolCategoryListReq {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolCategoryListReq {}
  public static toBuffer(message: IProtoOASymbolCategoryListReq): Buffer {}
}

/**
 * Response to the ProtoSymbolCategoryListReq request.
 */
class ProtoOASymbolCategoryListRes {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolCategoryListRes {}
  public static toBuffer(message: IProtoOASymbolCategoryListRes): Buffer {}
}

/**
 * Request for logout of  trading account session.
 */
class ProtoOAAccountLogoutReq {
  public static fromBuffer(buffer: Buffer): IProtoOAAccountLogoutReq {}
  public static toBuffer(message: IProtoOAAccountLogoutReq): Buffer {}
}

/**
 * Response to the ProtoOATraderLogoutReq request.
 */
class ProtoOAAccountLogoutRes {
  public static fromBuffer(buffer: Buffer): IProtoOAAccountLogoutRes {}
  public static toBuffer(message: IProtoOAAccountLogoutRes): Buffer {}
}

/**
 * Event that is sent when the established session for an account is dropped on the server side.
 * A new session must be authorized for the account.
 */
class ProtoOAAccountDisconnectEvent {
  public static fromBuffer(buffer: Buffer): IProtoOAAccountDisconnectEvent {}
  public static toBuffer(message: IProtoOAAccountDisconnectEvent): Buffer {}
}

enum ProtoOAPayloadType {
  PROTO_OA_APPLICATION_AUTH_REQ = 2100,
  PROTO_OA_APPLICATION_AUTH_RES = 2101,
  PROTO_OA_ACCOUNT_AUTH_REQ = 2102,
  PROTO_OA_ACCOUNT_AUTH_RES = 2103,
  PROTO_OA_VERSION_REQ = 2104,
  PROTO_OA_VERSION_RES = 2105,
  PROTO_OA_NEW_ORDER_REQ = 2106,
  PROTO_OA_TRAILING_SL_CHANGED_EVENT = 2107,
  PROTO_OA_CANCEL_ORDER_REQ = 2108,
  PROTO_OA_AMEND_ORDER_REQ = 2109,
  PROTO_OA_AMEND_POSITION_SLTP_REQ = 2110,
  PROTO_OA_CLOSE_POSITION_REQ = 2111,
  PROTO_OA_ASSET_LIST_REQ = 2112,
  PROTO_OA_ASSET_LIST_RES = 2113,
  PROTO_OA_SYMBOLS_LIST_REQ = 2114,
  PROTO_OA_SYMBOLS_LIST_RES = 2115,
  PROTO_OA_SYMBOL_BY_ID_REQ = 2116,
  PROTO_OA_SYMBOL_BY_ID_RES = 2117,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ = 2118,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_RES = 2119,
  PROTO_OA_SYMBOL_CHANGED_EVENT = 2120,
  PROTO_OA_TRADER_REQ = 2121,
  PROTO_OA_TRADER_RES = 2122,
  PROTO_OA_TRADER_UPDATE_EVENT = 2123,
  PROTO_OA_RECONCILE_REQ = 2124,
  PROTO_OA_RECONCILE_RES = 2125,
  PROTO_OA_EXECUTION_EVENT = 2126,
  PROTO_OA_SUBSCRIBE_SPOTS_REQ = 2127,
  PROTO_OA_SUBSCRIBE_SPOTS_RES = 2128,
  PROTO_OA_UNSUBSCRIBE_SPOTS_REQ = 2129,
  PROTO_OA_UNSUBSCRIBE_SPOTS_RES = 2130,
  PROTO_OA_SPOT_EVENT = 2131,
  PROTO_OA_ORDER_ERROR_EVENT = 2132,
  PROTO_OA_DEAL_LIST_REQ = 2133,
  PROTO_OA_DEAL_LIST_RES = 2134,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ = 2135,
  PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ = 2136,
  PROTO_OA_GET_TRENDBARS_REQ = 2137,
  PROTO_OA_GET_TRENDBARS_RES = 2138,
  PROTO_OA_EXPECTED_MARGIN_REQ = 2139,
  PROTO_OA_EXPECTED_MARGIN_RES = 2140,
  PROTO_OA_MARGIN_CHANGED_EVENT = 2141,
  PROTO_OA_ERROR_RES = 2142,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ = 2143,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_RES = 2144,
  PROTO_OA_GET_TICKDATA_REQ = 2145,
  PROTO_OA_GET_TICKDATA_RES = 2146,
  PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT = 2147,
  PROTO_OA_CLIENT_DISCONNECT_EVENT = 2148,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ = 2149,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES = 2150,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ = 2151,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES = 2152,
  PROTO_OA_ASSET_CLASS_LIST_REQ = 2153,
  PROTO_OA_ASSET_CLASS_LIST_RES = 2154,
  PROTO_OA_DEPTH_EVENT = 2155,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ = 2156,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES = 2157,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ = 2158,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES = 2159,
  PROTO_OA_SYMBOL_CATEGORY_REQ = 2160,
  PROTO_OA_SYMBOL_CATEGORY_RES = 2161,
  PROTO_OA_ACCOUNT_LOGOUT_REQ = 2162,
  PROTO_OA_ACCOUNT_LOGOUT_RES = 2163,
  PROTO_OA_ACCOUNT_DISCONNECT_EVENT = 2164
}

enum ProtoOADayOfWeek {
  NONE = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7
}

/**
 * Enum for specifying type of trading commission.
 */
enum ProtoOACommissionType {
  /**
   * USD per million USD volume - usually used for FX. Example: 50 USD for 1 mil USD of trading volume. In cents.
   */
  USD_PER_MIL_USD = 1,
  /**
   * USD per million USD volume - usually used for FX. Example: 50 USD for 1 mil USD of trading volume. In cents.
   */
  USD_PER_LOT = 2,
  /**
   * USD per 1 lot - usually used for CFDs and futures for commodities, and indices. Example: 15 USD for 1 contract. In cents.
   */
  PERCENTAGE = 3,
  /**
   * Percentage of trading volume - usually used for Equities. Example: 0.005% of notional trading volume. Multiplied by 100,00.
   */
  QUOTE_CCY_PER_LOT = 4
}

/**
 * Enum for specifying stop loss and take profit distances.
 */
enum ProtoOASymbolDistanceType {
  SYMBOL_DISTANCE_IN_POINTS = 1,
  SYMBOL_DISTANCE_IN_PERCENTAGE = 2
}

/**
 * Enum for specifying type of minimum trading commission.
 */
enum ProtoOAMinCommissionType {
  CURRENCY = 1,
  QUOTE_CURRENCY = 2
}

/**
 * Enum for specifying symbol trading mode.
 */
enum ProtoOATradingMode {
  ENABLED = 0,
  DISABLED_WITHOUT_PENDINGS_EXECUTION = 1,
  DISABLED_WITH_PENDINGS_EXECUTION = 2,
  CLOSE_ONLY_MODE = 3
}

/**
 * Enum for specifying access right for a trader.
 */
enum ProtoOAAccessRights {
  /**
   * Enable all trading.
   */
  FULL_ACCESS = 0,
  /**
   * Enable all trading.
   */
  CLOSE_ONLY = 1,
  /**
   * Only closing trading request are enabled.
   */
  NO_TRADING = 2,
  /**
   * View only access.
   */
  NO_LOGIN = 3
}

/**
 * Enum for specifying margin calculation type for an account.
 */
enum ProtoOATotalMarginCalculationType {
  MAX = 0,
  SUM = 1,
  NET = 2
}

/**
 * Enum for specifying type of an account.
 */
enum ProtoOAAccountType {
  /**
   * Allows multiple positions on a trading account for a symbol.
   */
  HEDGED = 0,
  /**
   * Allows multiple positions on a trading account for a symbol.
   */
  NETTED = 1,
  /**
   * Only one position per symbol is allowed on a trading account.
   */
  SPREAD_BETTING = 2
}

/**
 * Position status ENUM.
 */
enum ProtoOAPositionStatus {
  POSITION_STATUS_OPEN = 1,
  POSITION_STATUS_CLOSED = 2,
  /**
   * Empty position is created for pending order.
   */
  POSITION_STATUS_CREATED = 3,
  /**
   * Empty position is created for pending order.
   */
  POSITION_STATUS_ERROR = 4
}

/**
 * Trader side ENUM. Used for order, position, deal.
 */
enum ProtoOATradeSide {
  BUY = 1,
  SELL = 2
}

/**
 * Order type ENUM.
 */
enum ProtoOAOrderType {
  MARKET = 1,
  LIMIT = 2,
  STOP = 3,
  STOP_LOSS_TAKE_PROFIT = 4,
  MARKET_RANGE = 5,
  STOP_LIMIT = 6
}

/**
 * Order's time in force ENUM.
 */
enum ProtoOATimeInForce {
  GOOD_TILL_DATE = 1,
  GOOD_TILL_CANCEL = 2,
  IMMEDIATE_OR_CANCEL = 3,
  FILL_OR_KILL = 4,
  MARKET_ON_OPEN = 5
}

/**
 * Order status ENUM.
 */
enum ProtoOAOrderStatus {
  /**
   * Order request validated and accepted for execution.
   */
  ORDER_STATUS_ACCEPTED = 1,
  /**
   * Order request validated and accepted for execution.
   */
  ORDER_STATUS_FILLED = 2,
  /**
   * Order is fully filled.
   */
  ORDER_STATUS_REJECTED = 3,
  /**
   * Order is rejected due to validation.
   */
  ORDER_STATUS_EXPIRED = 4,
  /**
   * Order expired. Might be valid for orders with partially filled volume that were expired on LP.
   */
  ORDER_STATUS_CANCELLED = 5
}

/**
 * Stop Order and Stop Lost triggering method ENUM.
 */
enum ProtoOAOrderTriggerMethod {
  /**
   * Stop Order: buy is triggered by ask, sell by bid; Stop Loss Order: for buy position is triggered by bid and for sell position by ask.
   */
  TRADE = 1,
  /**
   * Stop Order: buy is triggered by ask, sell by bid; Stop Loss Order: for buy position is triggered by bid and for sell position by ask.
   */
  OPPOSITE = 2,
  /**
   * Stop Order: buy is triggered by bid, sell by ask; Stop Loss Order: for buy position is triggered by ask and for sell position by bid.
   */
  DOUBLE_TRADE = 3,
  /**
   * The same as TRADE, but trigger is checked after the second consecutive tick.
   */
  DOUBLE_OPPOSITE = 4
}

/**
 * Execution event type ENUM.
 */
enum ProtoOAExecutionType {
  /**
   * Order passed validation.
   */
  ORDER_ACCEPTED = 2,
  /**
   * Order passed validation.
   */
  ORDER_FILLED = 3,
  /**
   * Order filled.
   */
  ORDER_REPLACED = 4,
  /**
   * Pending order is changed with a new one.
   */
  ORDER_CANCELLED = 5,
  /**
   * Order cancelled.
   */
  ORDER_EXPIRED = 6,
  /**
   * Order with GTD time in force is expired.
   */
  ORDER_REJECTED = 7,
  /**
   * Order is rejected due to validations.
   */
  ORDER_CANCEL_REJECTED = 8,
  /**
   * Cancel order request is rejected.
   */
  SWAP = 9,
  /**
   * Type related to SWAP execution events.
   */
  DEPOSIT_WITHDRAW = 10,
  /**
   * Type related to event of deposit or withdrawal cash flow operation.
   */
  ORDER_PARTIAL_FILL = 11,
  /**
   * Order is partially filled.
   */
  BONUS_DEPOSIT_WITHDRAW = 12
}

/**
 * Bonus operation type ENUM.
 */
enum ProtoOAChangeBonusType {
  BONUS_DEPOSIT = 0,
  BONUS_WITHDRAW = 1
}

/**
 * Balance operation entity. Covers all cash movement operations related to account, trading, IB operations, mirroring, etc.
 */
enum ProtoOAChangeBalanceType {
  /**
   * Cash deposit.
   */
  BALANCE_DEPOSIT = 0,
  /**
   * Cash deposit.
   */
  BALANCE_WITHDRAW = 1,
  /**
   * Cash withdrawal.
   */
  BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER = 3,
  /**
   * Received mirroring commission.
   */
  BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER = 4,
  /**
   * Paid mirroring commission.
   */
  BALANCE_DEPOSIT_IB_COMMISSIONS = 5,
  /**
   * For IB account. Commissions paid by trader.
   */
  BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE = 6,
  /**
   * For IB account. Withdrawal of commissions shared with broker.
   */
  BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB = 7,
  /**
   * For IB account. Commissions paid by sub-ibs.
   */
  BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER = 8,
  /**
   * For IB account. Commissions paid by broker.
   */
  BALANCE_DEPOSIT_REBATE = 9,
  /**
   * Deposit rebate for trading volume for period.
   */
  BALANCE_WITHDRAW_REBATE = 10,
  /**
   * Withdrawal of rebate.
   */
  BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER = 11,
  /**
   * Mirroring commission.
   */
  BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER = 12,
  /**
   * Mirroring commission.
   */
  BALANCE_WITHDRAW_BONUS_COMPENSATION = 13,
  /**
   * For IB account. Share commission with the Broker.
   */
  BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER = 14,
  /**
   * IB commissions.
   */
  BALANCE_DEPOSIT_DIVIDENDS = 15,
  /**
   * Deposit dividends payments.
   */
  BALANCE_WITHDRAW_DIVIDENDS = 16,
  /**
   * Negative dividend charge for short position.
   */
  BALANCE_WITHDRAW_GSL_CHARGE = 17,
  /**
   * Charge for guaranteedStopLoss.
   */
  BALANCE_WITHDRAW_ROLLOVER = 18,
  /**
   * Charge of rollover fee for Shariah compliant accounts.
   */
  BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS = 19,
  /**
   * Broker's operation to deposit bonus.
   */
  BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS = 20,
  /**
   * Broker's operation to withdrawal bonus.
   */
  BALANCE_DEPOSIT_SWAP = 21,
  /**
   * Deposits of negative SWAP.
   */
  BALANCE_WITHDRAW_SWAP = 22,
  /**
   * Mirroring commission.
   */
  BALANCE_DEPOSIT_MANAGEMENT_FEE = 27,
  /**
   * Mirroring commission.
   */
  BALANCE_WITHDRAW_MANAGEMENT_FEE = 28,
  /**
   * Mirroring commission.
   */
  BALANCE_DEPOSIT_PERFORMANCE_FEE = 29,
  /**
   * Mirroring commission.
   */
  BALANCE_WITHDRAW_INACTIVITY_FEE = 35
}

/**
 * Deal status ENUM.
 */
enum ProtoOADealStatus {
  /**
   * Deal filled.
   */
  FILLED = 2,
  /**
   * Deal filled.
   */
  PARTIALLY_FILLED = 3,
  /**
   * Deal is partially filled.
   */
  REJECTED = 4,
  /**
   * Deal is correct but was rejected by liquidity provider (e.g. no liquidity).
   */
  INTERNALLY_REJECTED = 5,
  /**
   * Deal rejected by server (e.g. no price quotes).
   */
  ERROR = 6,
  /**
   * Deal is rejected by LP due to error (e.g. symbol is unknown).
   */
  MISSED = 7
}

/**
 * Trendbar period ENUM.
 */
enum ProtoOATrendbarPeriod {
  M1 = 1,
  M2 = 2,
  M3 = 3,
  M4 = 4,
  M5 = 5,
  M10 = 6,
  M15 = 7,
  M30 = 8,
  H1 = 9,
  H4 = 10,
  H12 = 11,
  D1 = 12,
  W1 = 13,
  MN1 = 14
}

/**
 * Price quote type.
 */
enum ProtoOAQuoteType {
  BID = 1,
  ASK = 2
}

/**
 * Open API application permission in regards to token ENUM.
 */
enum ProtoOAClientPermissionScope {
  /**
   * Allows to use only view commends. Trade is prohibited.
   */
  SCOPE_VIEW = 0,
  /**
   * Allows to use only view commends. Trade is prohibited.
   */
  SCOPE_TRADE = 1
}

/**
 * Error code ENUM.
 */
enum ProtoOAErrorCode {
  /**
   * When token used for account authorization is expired.
   */
  OA_AUTH_TOKEN_EXPIRED = 1,
  /**
   * When token used for account authorization is expired.
   */
  ACCOUNT_NOT_AUTHORIZED = 2,
  /**
   * When account is not authorized.
   */
  INCORRECT_BOUNDARIES = 35,
  /**
   * Used for time and numeric boundaries.
   */
  CONNECTIONS_LIMIT_EXCEEDED = 67
}

/**
 * Asset entity.
 */
interface IProtoOAAsset {
  /**
   * The unique asset ID.
   */
  assetId: int64;
  /**
   * The unique asset ID.
   */
  name: string;
  /**
   * The asset name.
   */
  displayName?: string | null;
}

/**
 * Trading symbol entity.
 */
interface IProtoOASymbol {
  /**
   * The unique identifier of the symbol in specific server environment within cTrader platform. Different servers have different IDs.
   */
  symbolId: int64;
  /**
   * The unique identifier of the symbol in specific server environment within cTrader platform. Different servers have different IDs.
   */
  digits: int32;
  /**
   * Number of price digits to be displayed.
   */
  pipPosition: int32;
  /**
   * Pip position on digits.
   */
  enableShortSelling?: bool | null;
  /**
   * If TRUE then the short selling with the symbol is enabled.
   */
  guaranteedStopLoss?: bool | null;
  /**
   * If TRUE then setting of guaranteedStopLoss is available for limited risk accounts.
   */
  swapRollover3Days?: ProtoOADayOfWeek | null;
  /**
   * Day of the week when SWAP charge amount will be tripled. Doesn't impact Rollover Commission.
   */
  swapLong?: double | null;
  /**
   * SWAP charge for long positions.
   */
  swapShort?: double | null;
  /**
   * SWAP charge for short positions.
   */
  maxVolume?: int64 | null;
  /**
   * Maximum allowed volume in cents for an order with a symbol.
   */
  minVolume?: int64 | null;
  /**
   * Minimum allowed volume in cents for an order with a symbol.
   */
  stepVolume?: int64 | null;
  /**
   * Step of the volume in cents for an order.
   */
  maxExposure?: uint64 | null;
  /**
   * Value of max exposure per symbol, per account. Blocks execution if breached.
   */
  schedule: ProtoOAInterval[];
  /**
   * Symbol trading interval, specified in seconds starting from SUNDAY 00:00 in specified time zone.
   */
  commission: int64;
  /**
   * Commission base amount. Total commission depends on commissionType.
   */
  commissionType?: ProtoOACommissionType | null;
  /**
   * Commission type. See ProtoOACommissionType for details.
   */
  slDistance?: uint32 | null;
  /**
   * Minimum allowed distance between stop loss and current market price.
   */
  tpDistance?: uint32 | null;
  /**
   * Minimum allowed distance between take profit and current market price.
   */
  gslDistance?: uint32 | null;
  /**
   * Minimum allowed distance between guaranteed stop loss and current market price.
   */
  gslCharge?: int64 | null;
  /**
   * Guaranteed stop loss fee.
   */
  distanceSetIn?: ProtoOASymbolDistanceType | null;
  /**
   * Unit of distance measure for slDistance, tpDistance, gslDistance.
   */
  minCommission?: int64 | null;
  /**
   * Minimum commission amount per trade.
   */
  minCommissionType?: ProtoOAMinCommissionType | null;
  /**
   * Minimum commission Type. See ProtoOAMinCommissionType for details.
   */
  minCommissionAsset?: string | null;
  /**
   * Currency for minimum commission. (USD or quote currency).
   */
  rolloverCommission?: int64 | null;
  /**
   * Amount of commission per trade for Shariah Compliant accounts in deposit currency (swapFree = TRUE).
   */
  skipRolloverDays?: int32 | null;
  /**
   * Initial period before the first rolloverCommission will be charged on the account.
   */
  scheduleTimeZone?: string | null;
  /**
   * Time zone for the symbol trading intervals.
   */
  tradingMode?: ProtoOATradingMode | null;
  /**
   * Rules for trading with the symbol. See ProtoOATradingMode for details.
   */
  rolloverCommission3Days?: ProtoOADayOfWeek | null;
}

/**
 * Lightweight symbol entity.
 */
interface IProtoOALightSymbol {
  /**
   * The unique identifier of the symbol in specific server environment within cTrader platform. Different brokers might have different IDs.
   */
  symbolId: int64;
  /**
   * The unique identifier of the symbol in specific server environment within cTrader platform. Different brokers might have different IDs.
   */
  symbolName?: string | null;
  /**
   * Name of the symbol (e.g. EUR/USD).
   */
  enabled?: bool | null;
  /**
   * If TRUE then symbol is visible for traders.
   */
  baseAssetId?: int64 | null;
  /**
   * Base asset.
   */
  quoteAssetId?: int64 | null;
  /**
   * Quote asset.
   */
  symbolCategoryId?: int64 | null;
  /**
   * Id of the symbol category used for symbols grouping.
   */
  description?: string | null;
}

/**
 * Symbol category entity.
 */
interface IProtoOASymbolCategory {
  /**
   * The unique identifier of the symbol category.
   */
  id: int64;
  /**
   * The unique identifier of the symbol category.
   */
  assetClassId: int64;
  /**
   * Link to the asset class. One asset class can have many symbol categories.
   */
  name: string;
}

/**
 * Symbol trading session entity.
 */
interface IProtoOAInterval {
  /**
   * Interval start, specified in seconds starting from SUNDAY 00:00 in specified time zone (inclusive to the interval).
   */
  startSecond: uint32;
  /**
   * Interval start, specified in seconds starting from SUNDAY 00:00 in specified time zone (inclusive to the interval).
   */
  endSecond: uint32;
}

/**
 * Trading account entity.
 */
interface IProtoOATrader {
  /**
   * The unique Trader's Account ID used to match the responses to the Trader's Account.
   */
  ctidTraderAccountId: int64;
  /**
   * The unique Trader's Account ID used to match the responses to the Trader's Account.
   */
  balance: int64;
  /**
   * Current account balance in cents (e.g. If USD 100.00 then value = 10000).
   */
  balanceVersion?: int64 | null;
  /**
   * Balance version used to identify the final balance. Increments each time when the trader's account balance is changed.
   */
  managerBonus?: int64 | null;
  /**
   * Amount of broker's bonus allocated to the account in cents.
   */
  ibBonus?: int64 | null;
  /**
   * Amount of introducing broker bonus allocated to the account cents.
   */
  nonWithdrawableBonus?: int64 | null;
  /**
   * Broker's bonus that cannot be withdrew from the account as cash.
   */
  accessRights?: ProtoOAAccessRights | null;
  /**
   * Access rights that an owner has to the account in cTrader platform. See ProtoOAAccessRights for details.
   */
  depositAssetId: int64;
  /**
   * Deposit currency of the account.
   */
  swapFree?: bool | null;
  /**
   * If TRUE than account is Shariah compliant.
   */
  leverageInCents?: uint32 | null;
  /**
   * Account leverage (e.g. If leverage = 1:50 then value = 5000).
   */
  totalMarginCalculationType?: ProtoOATotalMarginCalculationType | null;
  /**
   * Margin computation type for the account (MAX, SUM, NET).
   */
  maxLeverage?: uint32 | null;
  /**
   * Maximum allowed leverage for the account. Used as validation when a Trader can change leverage value.
   */
  frenchRisk?: bool | null;
  /**
   * If TRUE then account is AMF compliant.
   */
  traderLogin?: int64 | null;
  /**
   * ID of the account that is unique per server (Broker).
   */
  accountType?: ProtoOAAccountType | null;
  /**
   * Account type: HEDGED, NETTED, etc.
   */
  brokerName?: string | null;
  /**
   * Some whitelabel assigned to trader by broker at the moment of account creation.
   */
  registrationTimestamp?: int64 | null;
}

/**
 * Trade position entity.
 */
interface IProtoOAPosition {
  /**
   * The unique ID of the position. Note: trader might have two positions with the same id if positions are taken from accounts from different brokers.
   */
  positionId: int64;
  /**
   * The unique ID of the position. Note: trader might have two positions with the same id if positions are taken from accounts from different brokers.
   */
  tradeData: ProtoOATradeData;
  /**
   * Position details. See ProtoOATradeData for details.
   */
  positionStatus: ProtoOAPositionStatus;
  /**
   * Current status of the position.
   */
  swap: int64;
  /**
   * Total amount of charged swap on open position.
   */
  price?: double | null;
  /**
   * VWAP price of the position based on all executions (orders) linked to the position.
   */
  stopLoss?: double | null;
  /**
   * Current stop loss price.
   */
  takeProfit?: double | null;
  /**
   * Current take profit price.
   */
  utcLastUpdateTimestamp?: int64 | null;
  /**
   * Time of the last change of the position, including amend SL/TP of the position, execution of related order, cancel or related order, etc.
   */
  commission?: int64 | null;
  /**
   * Current unrealized commission related to the position.
   */
  marginRate?: double | null;
  /**
   * Rate for used margin computation. Represented as Base/Deposit.
   */
  mirroringCommission?: int64 | null;
  /**
   * Amount of unrealized commission related to following of strategy provider.
   */
  guaranteedStopLoss?: bool | null;
  /**
   * If TRUE then position's stop loss is guaranteedStopLoss.
   */
  usedMargin?: uint64 | null;
  /**
   * Amount of margin used for the position in deposit currency.
   */
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/**
 * Position/order trading details entity.
 */
interface IProtoOATradeData {
  /**
   * The unique identifier of the symbol in specific server environment within cTrader platform. Different brokers might have different IDs.
   */
  symbolId: int64;
  /**
   * The unique identifier of the symbol in specific server environment within cTrader platform. Different brokers might have different IDs.
   */
  volume: int64;
  /**
   * Volume in cents.
   */
  tradeSide: ProtoOATradeSide;
  /**
   * Buy, Sell.
   */
  openTimestamp?: int64 | null;
  /**
   * Time when position was opened or order was created.
   */
  label?: string | null;
  /**
   * Text label specified during order request.
   */
  guaranteedStopLoss?: bool | null;
}

/**
 * Trade order entity.
 */
interface IProtoOAOrder {
  /**
   * The unique ID of the order. Note: trader might have two orders with the same id if orders are taken from accounts from different brokers.
   */
  orderId: int64;
  /**
   * The unique ID of the order. Note: trader might have two orders with the same id if orders are taken from accounts from different brokers.
   */
  tradeData: ProtoOATradeData;
  /**
   * Detailed trader data.
   */
  orderType: ProtoOAOrderType;
  /**
   * Order type.
   */
  orderStatus: ProtoOAOrderStatus;
  /**
   * Order status.
   */
  expirationTimestamp?: int64 | null;
  /**
   * If the order has time in force GTD then expiration is specified.
   */
  executionPrice?: double | null;
  /**
   * Price at which an order was executed. For order with FILLED status.
   */
  executedVolume?: int64 | null;
  /**
   * Part of the volume that was filled.
   */
  utcLastUpdateTimestamp?: int64 | null;
  /**
   * Timestamp of the last update of the order.
   */
  baseSlippagePrice?: double | null;
  /**
   * Used for Market Range order with combination of slippageInPoints to specify price range were order can be executed.
   */
  slippageInPoints?: int64 | null;
  /**
   * Used for Market Range and STOP_LIMIT orders to to specify price range were order can be executed.
   */
  closingOrder?: bool | null;
  /**
   * If TRUE then the order is closing part of whole position. Must have specified positionId.
   */
  limitPrice?: double | null;
  /**
   * Valid only for LIMIT orders.
   */
  stopPrice?: double | null;
  /**
   * Valid only for STOP and STOP_LIMIT orders.
   */
  stopLoss?: double | null;
  /**
   * Absolute stopLoss price.
   */
  takeProfit?: double | null;
  /**
   * Absolute takeProfit price.
   */
  clientOrderId?: string | null;
  /**
   * Optional ClientOrderId. Max Length = 50 chars.
   */
  timeInForce?: ProtoOATimeInForce | null;
  /**
   * Order's time in force. Depends on order type.
   */
  positionId?: int64 | null;
  /**
   * ID of the position linked to the order (e.g. closing order, order that increase volume of a specific position, etc.).
   */
  relativeStopLoss?: int64 | null;
  /**
   * Relative stopLoss that can be specified instead of absolute as one. Specified in 1/100'000 of unit of a price. For BUY stopLoss = entryPrice - relativeStopLoss, for SELL stopLoss = entryPrice + relativeStopLoss.
   */
  relativeTakeProfit?: int64 | null;
  /**
   * Relative takeProfit that can be specified instead of absolute one. Specified in 1/100'000 of unit of a price. ForBUY takeProfit = entryPrice + relativeTakeProfit, for SELL takeProfit = entryPrice - relativeTakeProfit.
   */
  isStopOut?: bool | null;
  /**
   * If TRUE then order was stopped out from server side.
   */
  trailingStopLoss?: bool | null;
  /**
   * If TRUE then order is trailingStopLoss. Valid for STOP_LOSS_TAKE_PROFIT order.
   */
  stopTriggerMethod?: ProtoOAOrderTriggerMethod | null;
}

/**
 * Bonus deposit/withdrawal entity.
 */
interface IProtoOABonusDepositWithdraw {
  /**
   * Type of the operation. Deposit/Withdrawal.
   */
  operationType: ProtoOAChangeBonusType;
  /**
   * Type of the operation. Deposit/Withdrawal.
   */
  bonusHistoryId: int64;
  /**
   * The unique ID of the bonus deposit/withdrawal operation.
   */
  managerBonus: int64;
  /**
   * Total amount of broker's bonus after the operation.
   */
  managerDelta: int64;
  /**
   * Amount of bonus deposited/withdrew by manager.
   */
  ibBonus: int64;
  /**
   * Total amount of introducing broker's bonus after the operation.
   */
  ibDelta: int64;
  /**
   * Amount of bonus deposited/withdrew by introducing broker.
   */
  changeBonusTimestamp: int64;
  /**
   * Time when the bonus operation was executed.
   */
  externalNote?: string | null;
  /**
   * Note added to operation. Visible to the trader.
   */
  introducingBrokerId?: int64 | null;
}

/**
 * Account deposit/withdrawal operation entity.
 */
interface IProtoOADepositWithdraw {
  /**
   * Type of the operation. Deposit/Withdrawal.
   */
  operationType: ProtoOAChangeBalanceType;
  /**
   * Type of the operation. Deposit/Withdrawal.
   */
  balanceHistoryId: int64;
  /**
   * The unique ID of the deposit/withdrawal operation.
   */
  balance: int64;
  /**
   * Account balance after the operation was executed.
   */
  delta: int64;
  /**
   * Amount of deposit/withdrawal operation.
   */
  changeBalanceTimestamp: int64;
  /**
   * Time when deposit/withdrawal operation was executed.
   */
  externalNote?: string | null;
  /**
   * Note added to operation. Visible to the trader.
   */
  balanceVersion?: int64 | null;
  /**
   * Balance version used to identify the final balance. Increments each time when the trader's account balance is changed.
   */
  equity?: int64 | null;
}

/**
 * Execution entity.
 */
interface IProtoOADeal {
  /**
   * The unique ID of the execution deal.
   */
  dealId: int64;
  /**
   * The unique ID of the execution deal.
   */
  orderId: int64;
  /**
   * Source order of the deal.
   */
  positionId: int64;
  /**
   * Source position of the deal.
   */
  volume: int64;
  /**
   * Volume sent for execution, in cents.
   */
  filledVolume: int64;
  /**
   * Filled volume, in cents.
   */
  symbolId: int64;
  /**
   * The unique identifier of the symbol in specific server environment within cTrader platform. Different servers have different IDs.
   */
  createTimestamp: int64;
  /**
   * Time when the deal was sent for execution.
   */
  executionTimestamp: int64;
  /**
   * Time when the deal was executed.
   */
  utcLastUpdateTimestamp?: int64 | null;
  /**
   * Timestamp when the deal was created, executed or rejected.
   */
  executionPrice?: double | null;
  /**
   * Execution price.
   */
  tradeSide: ProtoOATradeSide;
  /**
   * Buy/Sell.
   */
  dealStatus: ProtoOADealStatus;
  /**
   * Status of the deal.
   */
  marginRate?: double | null;
  /**
   * Rate for used margin computation. Represented as Base/Deposit.
   */
  commission?: int64 | null;
  /**
   * Amount of trading commission associated with the deal.
   */
  baseToUsdConversionRate?: double | null;
  /**
   * Base to USD conversion rate on the time of deal execution.
   */
  closePositionDetail?: ProtoOAClosePositionDetail | null;
}

/**
 * Trading details for closing deal.
 */
interface IProtoOAClosePositionDetail {
  /**
   * Position price at the moment of filling the closing order.
   */
  entryPrice: double;
  /**
   * Position price at the moment of filling the closing order.
   */
  grossProfit: int64;
  /**
   * Amount of realized gross profit after closing deal execution.
   */
  swap: int64;
  /**
   * Amount of realized swap in cents related to closed volume.
   */
  commission: int64;
  /**
   * Amount of realized commission in cents related to closed volume.
   */
  balance: int64;
  /**
   * Account balance after closing deal execution.
   */
  quoteToDepositConversionRate?: double | null;
  /**
   * Quote/Deposit currency conversion rate on the time of closing deal execution.
   */
  closedVolume?: int64 | null;
  /**
   * Closed volume in cents.
   */
  balanceVersion?: int64 | null;
}

/**
 * Historical Trendbar entity.
 */
interface IProtoOATrendbar {
  /**
   * Bar volume in ticks.
   */
  volume: int64;
  /**
   * Bar volume in ticks.
   */
  period?: ProtoOATrendbarPeriod | null;
  /**
   * Bar period.
   */
  low?: int64 | null;
  /**
   * Low price of the bar.
   */
  deltaOpen?: uint64 | null;
  /**
   * Delta between open and low price. open = low + deltaOpen.
   */
  deltaClose?: uint64 | null;
  /**
   * Delta between open and low price. close = low + deltaClose.
   */
  deltaHigh?: uint64 | null;
  /**
   * Delta between open and low price. high = low + deltaHigh.
   */
  utcTimestampInMinutes?: uint32 | null;
}

/**
 * Expected margin computation entity.
 */
interface IProtoOAExpectedMargin {
  /**
   * Volume in cents used for computation of expected margin.
   */
  volume: int64;
  /**
   * Volume in cents used for computation of expected margin.
   */
  buyMargin: int64;
  /**
   * Buy margin amount in cents.
   */
  sellMargin: int64;
}

/**
 * Historical tick data type.
 */
interface IProtoOATickData {
  /**
   * Tick timestamp.
   */
  timestamp: int64;
  /**
   * Tick timestamp.
   */
  tick: int64;
}

/**
 * Trader profile entity. Empty due to GDPR.
 */
interface IProtoOACtidProfile {
  userId: int64;
}

/**
 * Trader account entity.
 */
interface IProtoOACtidTraderAccount {
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.cTrader platform. Different brokers might have different ids
   */
  ctidTraderAccountId: uint64;
  /**
   * Unique identifier of the trader's account. Used to match responses to trader's accounts.cTrader platform. Different brokers might have different ids
   */
  isLive?: bool | null;
  /**
   * If TRUE then the account is belong to Live environment and live host must be used to authorize it
   */
  traderLogin?: int64 | null;
}

/**
 * Asset class entity.
 */
interface IProtoOAAssetClass {
  /**
   * Unique asset ID.
   */
  id?: int64 | null;
  /**
   * Unique asset ID.
   */
  name?: string | null;
}

/**
 * Depth of market entity.
 */
interface IProtoOADepthQuote {
  /**
   * Quote ID.
   */
  id: uint64;
  /**
   * Quote ID.
   */
  size: uint64;
  /**
   * Quote size in cents.
   */
  bid?: uint64 | null;
  /**
   * Bid price for bid quotes.
   */
  ask?: uint64 | null;
}

/**
 * Asset entity.
 */
class ProtoOAAsset {
  public static fromBuffer(buffer: Buffer): IProtoOAAsset {}
  public static toBuffer(message: IProtoOAAsset): Buffer {}
}

/**
 * Trading symbol entity.
 */
class ProtoOASymbol {
  public static fromBuffer(buffer: Buffer): IProtoOASymbol {}
  public static toBuffer(message: IProtoOASymbol): Buffer {}
}

/**
 * Lightweight symbol entity.
 */
class ProtoOALightSymbol {
  public static fromBuffer(buffer: Buffer): IProtoOALightSymbol {}
  public static toBuffer(message: IProtoOALightSymbol): Buffer {}
}

/**
 * Symbol category entity.
 */
class ProtoOASymbolCategory {
  public static fromBuffer(buffer: Buffer): IProtoOASymbolCategory {}
  public static toBuffer(message: IProtoOASymbolCategory): Buffer {}
}

/**
 * Symbol trading session entity.
 */
class ProtoOAInterval {
  public static fromBuffer(buffer: Buffer): IProtoOAInterval {}
  public static toBuffer(message: IProtoOAInterval): Buffer {}
}

/**
 * Trading account entity.
 */
class ProtoOATrader {
  public static fromBuffer(buffer: Buffer): IProtoOATrader {}
  public static toBuffer(message: IProtoOATrader): Buffer {}
}

/**
 * Trade position entity.
 */
class ProtoOAPosition {
  public static fromBuffer(buffer: Buffer): IProtoOAPosition {}
  public static toBuffer(message: IProtoOAPosition): Buffer {}
}

/**
 * Position/order trading details entity.
 */
class ProtoOATradeData {
  public static fromBuffer(buffer: Buffer): IProtoOATradeData {}
  public static toBuffer(message: IProtoOATradeData): Buffer {}
}

/**
 * Trade order entity.
 */
class ProtoOAOrder {
  public static fromBuffer(buffer: Buffer): IProtoOAOrder {}
  public static toBuffer(message: IProtoOAOrder): Buffer {}
}

/**
 * Bonus deposit/withdrawal entity.
 */
class ProtoOABonusDepositWithdraw {
  public static fromBuffer(buffer: Buffer): IProtoOABonusDepositWithdraw {}
  public static toBuffer(message: IProtoOABonusDepositWithdraw): Buffer {}
}

/**
 * Account deposit/withdrawal operation entity.
 */
class ProtoOADepositWithdraw {
  public static fromBuffer(buffer: Buffer): IProtoOADepositWithdraw {}
  public static toBuffer(message: IProtoOADepositWithdraw): Buffer {}
}

/**
 * Execution entity.
 */
class ProtoOADeal {
  public static fromBuffer(buffer: Buffer): IProtoOADeal {}
  public static toBuffer(message: IProtoOADeal): Buffer {}
}

/**
 * Trading details for closing deal.
 */
class ProtoOAClosePositionDetail {
  public static fromBuffer(buffer: Buffer): IProtoOAClosePositionDetail {}
  public static toBuffer(message: IProtoOAClosePositionDetail): Buffer {}
}

/**
 * Historical Trendbar entity.
 */
class ProtoOATrendbar {
  public static fromBuffer(buffer: Buffer): IProtoOATrendbar {}
  public static toBuffer(message: IProtoOATrendbar): Buffer {}
}

/**
 * Expected margin computation entity.
 */
class ProtoOAExpectedMargin {
  public static fromBuffer(buffer: Buffer): IProtoOAExpectedMargin {}
  public static toBuffer(message: IProtoOAExpectedMargin): Buffer {}
}

/**
 * Historical tick data type.
 */
class ProtoOATickData {
  public static fromBuffer(buffer: Buffer): IProtoOATickData {}
  public static toBuffer(message: IProtoOATickData): Buffer {}
}

/**
 * Trader profile entity. Empty due to GDPR.
 */
class ProtoOACtidProfile {
  public static fromBuffer(buffer: Buffer): IProtoOACtidProfile {}
  public static toBuffer(message: IProtoOACtidProfile): Buffer {}
}

/**
 * Trader account entity.
 */
class ProtoOACtidTraderAccount {
  public static fromBuffer(buffer: Buffer): IProtoOACtidTraderAccount {}
  public static toBuffer(message: IProtoOACtidTraderAccount): Buffer {}
}

/**
 * Asset class entity.
 */
class ProtoOAAssetClass {
  public static fromBuffer(buffer: Buffer): IProtoOAAssetClass {}
  public static toBuffer(message: IProtoOAAssetClass): Buffer {}
}

/**
 * Depth of market entity.
 */
class ProtoOADepthQuote {
  public static fromBuffer(buffer: Buffer): IProtoOADepthQuote {}
  public static toBuffer(message: IProtoOADepthQuote): Buffer {}
}
