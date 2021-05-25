import PBF from "pbf";

export enum ProtoOAPayloadType {
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
  PROTO_OA_ACCOUNT_DISCONNECT_EVENT = 2164,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES = 2165,
  PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES = 2166,
  PROTO_OA_MARGIN_CALL_LIST_REQ = 2167,
  PROTO_OA_MARGIN_CALL_LIST_RES = 2168,
  PROTO_OA_MARGIN_CALL_UPDATE_REQ = 2169,
  PROTO_OA_MARGIN_CALL_UPDATE_RES = 2170,
  PROTO_OA_MARGIN_CALL_UPDATE_EVENT = 2171,
  PROTO_OA_MARGIN_CALL_TRIGGER_EVENT = 2172,
  PROTO_OA_REFRESH_TOKEN_REQ = 2173,
  PROTO_OA_REFRESH_TOKEN_RES = 2174,
}

export enum ProtoOADayOfWeek {
  NONE = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}

export enum ProtoOACommissionType {
  USD_PER_MILLION_USD = 1,
  USD_PER_LOT = 2,
  PERCENTAGE_OF_VALUE = 3,
  QUOTE_CCY_PER_LOT = 4,
}

export enum ProtoOASymbolDistanceType {
  SYMBOL_DISTANCE_IN_POINTS = 1,
  SYMBOL_DISTANCE_IN_PERCENTAGE = 2,
}

export enum ProtoOAMinCommissionType {
  CURRENCY = 1,
  QUOTE_CURRENCY = 2,
}

export enum ProtoOATradingMode {
  ENABLED = 0,
  DISABLED_WITHOUT_PENDINGS_EXECUTION = 1,
  DISABLED_WITH_PENDINGS_EXECUTION = 2,
  CLOSE_ONLY_MODE = 3,
}

export enum ProtoOASwapCalculationType {
  PIPS = 0,
  PERCENTAGE = 1,
}

export enum ProtoOAAccessRights {
  FULL_ACCESS = 0,
  CLOSE_ONLY = 1,
  NO_TRADING = 2,
  NO_LOGIN = 3,
}

export enum ProtoOATotalMarginCalculationType {
  MAX = 0,
  SUM = 1,
  NET = 2,
}

export enum ProtoOAAccountType {
  HEDGED = 0,
  NETTED = 1,
  SPREAD_BETTING = 2,
}

export enum ProtoOAPositionStatus {
  POSITION_STATUS_OPEN = 1,
  POSITION_STATUS_CLOSED = 2,
  POSITION_STATUS_CREATED = 3,
  POSITION_STATUS_ERROR = 4,
}

export enum ProtoOATradeSide {
  BUY = 1,
  SELL = 2,
}

export enum ProtoOAOrderType {
  MARKET = 1,
  LIMIT = 2,
  STOP = 3,
  STOP_LOSS_TAKE_PROFIT = 4,
  MARKET_RANGE = 5,
  STOP_LIMIT = 6,
}

export enum ProtoOATimeInForce {
  GOOD_TILL_DATE = 1,
  GOOD_TILL_CANCEL = 2,
  IMMEDIATE_OR_CANCEL = 3,
  FILL_OR_KILL = 4,
  MARKET_ON_OPEN = 5,
}

export enum ProtoOAOrderStatus {
  ORDER_STATUS_ACCEPTED = 1,
  ORDER_STATUS_FILLED = 2,
  ORDER_STATUS_REJECTED = 3,
  ORDER_STATUS_EXPIRED = 4,
  ORDER_STATUS_CANCELLED = 5,
}

export enum ProtoOAOrderTriggerMethod {
  TRADE = 1,
  OPPOSITE = 2,
  DOUBLE_TRADE = 3,
  DOUBLE_OPPOSITE = 4,
}

export enum ProtoOAExecutionType {
  ORDER_ACCEPTED = 2,
  ORDER_FILLED = 3,
  ORDER_REPLACED = 4,
  ORDER_CANCELLED = 5,
  ORDER_EXPIRED = 6,
  ORDER_REJECTED = 7,
  ORDER_CANCEL_REJECTED = 8,
  SWAP = 9,
  DEPOSIT_WITHDRAW = 10,
  ORDER_PARTIAL_FILL = 11,
  BONUS_DEPOSIT_WITHDRAW = 12,
}

export enum ProtoOAChangeBonusType {
  BONUS_DEPOSIT = 0,
  BONUS_WITHDRAW = 1,
}

export enum ProtoOAChangeBalanceType {
  BALANCE_DEPOSIT = 0,
  BALANCE_WITHDRAW = 1,
  BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER = 3,
  BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER = 4,
  BALANCE_DEPOSIT_IB_COMMISSIONS = 5,
  BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE = 6,
  BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB = 7,
  BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER = 8,
  BALANCE_DEPOSIT_REBATE = 9,
  BALANCE_WITHDRAW_REBATE = 10,
  BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER = 11,
  BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER = 12,
  BALANCE_WITHDRAW_BONUS_COMPENSATION = 13,
  BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER = 14,
  BALANCE_DEPOSIT_DIVIDENDS = 15,
  BALANCE_WITHDRAW_DIVIDENDS = 16,
  BALANCE_WITHDRAW_GSL_CHARGE = 17,
  BALANCE_WITHDRAW_ROLLOVER = 18,
  BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS = 19,
  BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS = 20,
  BALANCE_DEPOSIT_SWAP = 21,
  BALANCE_WITHDRAW_SWAP = 22,
  BALANCE_DEPOSIT_MANAGEMENT_FEE = 27,
  BALANCE_WITHDRAW_MANAGEMENT_FEE = 28,
  BALANCE_DEPOSIT_PERFORMANCE_FEE = 29,
  BALANCE_WITHDRAW_FOR_SUBACCOUNT = 30,
  BALANCE_DEPOSIT_TO_SUBACCOUNT = 31,
  BALANCE_WITHDRAW_FROM_SUBACCOUNT = 32,
  BALANCE_DEPOSIT_FROM_SUBACCOUNT = 33,
  BALANCE_WITHDRAW_COPY_FEE = 34,
  BALANCE_WITHDRAW_INACTIVITY_FEE = 35,
  BALANCE_DEPOSIT_TRANSFER = 36,
  BALANCE_WITHDRAW_TRANSFER = 37,
  BALANCE_DEPOSIT_CONVERTED_BONUS = 38,
}

export enum ProtoOADealStatus {
  FILLED = 2,
  PARTIALLY_FILLED = 3,
  REJECTED = 4,
  INTERNALLY_REJECTED = 5,
  ERROR = 6,
  MISSED = 7,
}

export enum ProtoOATrendbarPeriod {
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
  MN1 = 14,
}

export enum ProtoOAQuoteType {
  BID = 1,
  ASK = 2,
}

export enum ProtoOAClientPermissionScope {
  SCOPE_VIEW = 0,
  SCOPE_TRADE = 1,
}

export enum ProtoOANotificationType {
  MARGIN_LEVEL_THRESHOLD_1 = 61,
  MARGIN_LEVEL_THRESHOLD_2 = 62,
  MARGIN_LEVEL_THRESHOLD_3 = 63,
}

export enum ProtoOAErrorCode {
  OA_AUTH_TOKEN_EXPIRED = 1,
  ACCOUNT_NOT_AUTHORIZED = 2,
  ALREADY_LOGGED_IN = 14,
  CH_CLIENT_AUTH_FAILURE = 101,
  CH_CLIENT_NOT_AUTHENTICATED = 102,
  CH_CLIENT_ALREADY_AUTHENTICATED = 103,
  CH_ACCESS_TOKEN_INVALID = 104,
  CH_SERVER_NOT_REACHABLE = 105,
  CH_CTID_TRADER_ACCOUNT_NOT_FOUND = 106,
  CH_OA_CLIENT_NOT_FOUND = 107,
  REQUEST_FREQUENCY_EXCEEDED = 108,
  SERVER_IS_UNDER_MAINTENANCE = 109,
  CHANNEL_IS_BLOCKED = 110,
  CONNECTIONS_LIMIT_EXCEEDED = 67,
  WORSE_GSL_NOT_ALLOWED = 68,
  SYMBOL_HAS_HOLIDAY = 69,
  NOT_SUBSCRIBED_TO_SPOTS = 112,
  ALREADY_SUBSCRIBED = 113,
  SYMBOL_NOT_FOUND = 114,
  UNKNOWN_SYMBOL = 115,
  INCORRECT_BOUNDARIES = 35,
  NO_QUOTES = 117,
  NOT_ENOUGH_MONEY = 118,
  MAX_EXPOSURE_REACHED = 119,
  POSITION_NOT_FOUND = 120,
  ORDER_NOT_FOUND = 121,
  POSITION_NOT_OPEN = 122,
  POSITION_LOCKED = 123,
  TOO_MANY_POSITIONS = 124,
  TRADING_BAD_VOLUME = 125,
  TRADING_BAD_STOPS = 126,
  TRADING_BAD_PRICES = 127,
  TRADING_BAD_STAKE = 128,
  PROTECTION_IS_TOO_CLOSE_TO_MARKET = 129,
  TRADING_BAD_EXPIRATION_DATE = 130,
  PENDING_EXECUTION = 131,
  TRADING_DISABLED = 132,
  TRADING_NOT_ALLOWED = 133,
  UNABLE_TO_CANCEL_ORDER = 134,
  UNABLE_TO_AMEND_ORDER = 135,
  SHORT_SELLING_NOT_ALLOWED = 136,
}

export enum ProtoOALimitedRiskMarginCalculationStrategy {
  ACCORDING_TO_LEVERAGE = 0,
  ACCORDING_TO_GSL = 1,
  ACCORDING_TO_GSL_AND_LEVERAGE = 2,
}

// ProtoOAApplicationAuthReq ===================================

export interface ProtoOAApplicationAuthReq {
  payloadType?: ProtoOAPayloadType;
  clientId: string;
  clientSecret: string;
}

export class ProtoOAApplicationAuthReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAApplicationAuthReqUtils._readField,
      {
        clientId: "",
        clientSecret: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAApplicationAuthReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.clientId = pbf.readString();
    if (tag === 3) obj.clientSecret = pbf.readString();
  }

  static write(obj: ProtoOAApplicationAuthReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.clientId !== undefined && obj.clientId !== null)
      pbf.writeStringField(2, obj.clientId);
    if (obj.clientSecret !== undefined && obj.clientSecret !== null)
      pbf.writeStringField(3, obj.clientSecret);
  }
}

// ProtoOAApplicationAuthRes ===================================

export interface ProtoOAApplicationAuthRes {
  payloadType?: ProtoOAPayloadType;
}

export class ProtoOAApplicationAuthResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(ProtoOAApplicationAuthResUtils._readField, {}, end);
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAApplicationAuthRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
  }

  static write(obj: ProtoOAApplicationAuthRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
  }
}

// ProtoOAAccountAuthReq =======================================

export interface ProtoOAAccountAuthReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  accessToken: string;
}

export class ProtoOAAccountAuthReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAccountAuthReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        accessToken: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAccountAuthReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.accessToken = pbf.readString();
  }

  static write(obj: ProtoOAAccountAuthReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.accessToken !== undefined && obj.accessToken !== null)
      pbf.writeStringField(3, obj.accessToken);
  }
}

// ProtoOAAccountAuthRes =======================================

export interface ProtoOAAccountAuthRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAAccountAuthResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAccountAuthResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAccountAuthRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAAccountAuthRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAErrorRes =============================================

export interface ProtoOAErrorRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId?: number;
  errorCode: string;
  description?: string;
  maintenanceEndTimestamp?: number;
}

export class ProtoOAErrorResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAErrorResUtils._readField,
      {
        errorCode: "",
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAErrorRes, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.errorCode = pbf.readString();
    if (tag === 4) obj.description = pbf.readString();
    if (tag === 5) obj.maintenanceEndTimestamp = pbf.readVarint64();
  }

  static write(obj: ProtoOAErrorRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.errorCode !== undefined && obj.errorCode !== null)
      pbf.writeStringField(3, obj.errorCode);
    if (obj.description !== undefined && obj.description !== null)
      pbf.writeStringField(4, obj.description);
    if (
      obj.maintenanceEndTimestamp !== undefined &&
      obj.maintenanceEndTimestamp !== null
    )
      pbf.writeVarintField(5, obj.maintenanceEndTimestamp);
  }
}

// ProtoOAClientDisconnectEvent ================================

export interface ProtoOAClientDisconnectEvent {
  payloadType?: ProtoOAPayloadType;
  reason?: string;
}

export class ProtoOAClientDisconnectEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAClientDisconnectEventUtils._readField,
      {},
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAClientDisconnectEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.reason = pbf.readString();
  }

  static write(obj: ProtoOAClientDisconnectEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.reason !== undefined && obj.reason !== null)
      pbf.writeStringField(2, obj.reason);
  }
}

// ProtoOAAccountsTokenInvalidatedEvent ========================

export interface ProtoOAAccountsTokenInvalidatedEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountIds: number[];
  reason?: string;
}

export class ProtoOAAccountsTokenInvalidatedEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAccountsTokenInvalidatedEventUtils._readField,
      {
        ctidTraderAccountIds: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAccountsTokenInvalidatedEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountIds.push(pbf.readVarint64());
    if (tag === 3) obj.reason = pbf.readString();
  }

  static write(
    obj: ProtoOAAccountsTokenInvalidatedEvent,
    pbf: PBF = new PBF()
  ) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountIds !== undefined &&
      obj.ctidTraderAccountIds !== null
    )
      obj.ctidTraderAccountIds.forEach((ctidTraderAccountIds) =>
        pbf.writeVarintField(2, ctidTraderAccountIds)
      );
    if (obj.reason !== undefined && obj.reason !== null)
      pbf.writeStringField(3, obj.reason);
  }
}

// ProtoOAVersionReq ===========================================

export interface ProtoOAVersionReq {
  payloadType?: ProtoOAPayloadType;
}

export class ProtoOAVersionReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(ProtoOAVersionReqUtils._readField, {}, end);
  }

  private static _readField(tag: number, obj?: ProtoOAVersionReq, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
  }

  static write(obj: ProtoOAVersionReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
  }
}

// ProtoOAVersionRes ===========================================

export interface ProtoOAVersionRes {
  payloadType?: ProtoOAPayloadType;
  version: string;
}

export class ProtoOAVersionResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAVersionResUtils._readField,
      {
        version: "",
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAVersionRes, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.version = pbf.readString();
  }

  static write(obj: ProtoOAVersionRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.version !== undefined && obj.version !== null)
      pbf.writeStringField(2, obj.version);
  }
}

// ProtoOANewOrderReq ==========================================

export interface ProtoOANewOrderReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number;
  orderType: ProtoOAOrderType;
  tradeSide: ProtoOATradeSide;
  volume: number;
  limitPrice?: number;
  stopPrice?: number;
  timeInForce?: ProtoOATimeInForce;
  expirationTimestamp?: number;
  stopLoss?: number;
  takeProfit?: number;
  comment?: string;
  baseSlippagePrice?: number;
  slippageInPoints?: number;
  label?: string;
  positionId?: number;
  clientOrderId?: string;
  relativeStopLoss?: number;
  relativeTakeProfit?: number;
  guaranteedStopLoss?: boolean;
  trailingStopLoss?: boolean;
  stopTriggerMethod?: ProtoOAOrderTriggerMethod;
}

export class ProtoOANewOrderReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOANewOrderReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: 0,
        orderType: ProtoOAOrderType.MARKET,
        tradeSide: ProtoOATradeSide.BUY,
        volume: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOANewOrderReq, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId = pbf.readVarint64();
    if (tag === 4) obj.orderType = pbf.readVarint();
    if (tag === 5) obj.tradeSide = pbf.readVarint();
    if (tag === 6) obj.volume = pbf.readVarint64();
    if (tag === 7) obj.limitPrice = pbf.readDouble();
    if (tag === 8) obj.stopPrice = pbf.readDouble();
    if (tag === 9) obj.timeInForce = pbf.readVarint();
    if (tag === 10) obj.expirationTimestamp = pbf.readVarint64();
    if (tag === 11) obj.stopLoss = pbf.readDouble();
    if (tag === 12) obj.takeProfit = pbf.readDouble();
    if (tag === 13) obj.comment = pbf.readString();
    if (tag === 14) obj.baseSlippagePrice = pbf.readDouble();
    if (tag === 15) obj.slippageInPoints = pbf.readVarint();
    if (tag === 16) obj.label = pbf.readString();
    if (tag === 17) obj.positionId = pbf.readVarint64();
    if (tag === 18) obj.clientOrderId = pbf.readString();
    if (tag === 19) obj.relativeStopLoss = pbf.readVarint64();
    if (tag === 20) obj.relativeTakeProfit = pbf.readVarint64();
    if (tag === 21) obj.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 22) obj.trailingStopLoss = pbf.readBoolean();
    if (tag === 23) obj.stopTriggerMethod = pbf.readVarint();
  }

  static write(obj: ProtoOANewOrderReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(3, obj.symbolId);
    if (obj.orderType !== undefined && obj.orderType !== null)
      pbf.writeVarintField(4, obj.orderType);
    if (obj.tradeSide !== undefined && obj.tradeSide !== null)
      pbf.writeVarintField(5, obj.tradeSide);
    if (obj.volume !== undefined && obj.volume !== null)
      pbf.writeVarintField(6, obj.volume);
    if (obj.limitPrice !== undefined && obj.limitPrice !== null)
      pbf.writeDoubleField(7, obj.limitPrice);
    if (obj.stopPrice !== undefined && obj.stopPrice !== null)
      pbf.writeDoubleField(8, obj.stopPrice);
    if (obj.timeInForce !== undefined && obj.timeInForce !== null)
      pbf.writeVarintField(9, obj.timeInForce);
    if (
      obj.expirationTimestamp !== undefined &&
      obj.expirationTimestamp !== null
    )
      pbf.writeVarintField(10, obj.expirationTimestamp);
    if (obj.stopLoss !== undefined && obj.stopLoss !== null)
      pbf.writeDoubleField(11, obj.stopLoss);
    if (obj.takeProfit !== undefined && obj.takeProfit !== null)
      pbf.writeDoubleField(12, obj.takeProfit);
    if (obj.comment !== undefined && obj.comment !== null)
      pbf.writeStringField(13, obj.comment);
    if (obj.baseSlippagePrice !== undefined && obj.baseSlippagePrice !== null)
      pbf.writeDoubleField(14, obj.baseSlippagePrice);
    if (obj.slippageInPoints !== undefined && obj.slippageInPoints !== null)
      pbf.writeVarintField(15, obj.slippageInPoints);
    if (obj.label !== undefined && obj.label !== null)
      pbf.writeStringField(16, obj.label);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(17, obj.positionId);
    if (obj.clientOrderId !== undefined && obj.clientOrderId !== null)
      pbf.writeStringField(18, obj.clientOrderId);
    if (obj.relativeStopLoss !== undefined && obj.relativeStopLoss !== null)
      pbf.writeVarintField(19, obj.relativeStopLoss);
    if (obj.relativeTakeProfit !== undefined && obj.relativeTakeProfit !== null)
      pbf.writeVarintField(20, obj.relativeTakeProfit);
    if (obj.guaranteedStopLoss !== undefined && obj.guaranteedStopLoss !== null)
      pbf.writeBooleanField(21, obj.guaranteedStopLoss);
    if (obj.trailingStopLoss !== undefined && obj.trailingStopLoss !== null)
      pbf.writeBooleanField(22, obj.trailingStopLoss);
    if (obj.stopTriggerMethod !== undefined && obj.stopTriggerMethod !== null)
      pbf.writeVarintField(23, obj.stopTriggerMethod);
  }
}

// ProtoOAExecutionEvent =======================================

export interface ProtoOAExecutionEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  executionType: ProtoOAExecutionType;
  position?: ProtoOAPosition;
  order?: ProtoOAOrder;
  deal?: ProtoOADeal;
  bonusDepositWithdraw?: ProtoOABonusDepositWithdraw;
  depositWithdraw?: ProtoOADepositWithdraw;
  errorCode?: string;
  isServerEvent?: boolean;
}

export class ProtoOAExecutionEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAExecutionEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        executionType: ProtoOAExecutionType.ORDER_ACCEPTED,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAExecutionEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.executionType = pbf.readVarint();
    if (tag === 4)
      obj.position = ProtoOAPositionUtils.read(pbf, pbf.readVarint() + pbf.pos);
    if (tag === 5)
      obj.order = ProtoOAOrderUtils.read(pbf, pbf.readVarint() + pbf.pos);
    if (tag === 6)
      obj.deal = ProtoOADealUtils.read(pbf, pbf.readVarint() + pbf.pos);
    if (tag === 7)
      obj.bonusDepositWithdraw = ProtoOABonusDepositWithdrawUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
    if (tag === 8)
      obj.depositWithdraw = ProtoOADepositWithdrawUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
    if (tag === 9) obj.errorCode = pbf.readString();
    if (tag === 10) obj.isServerEvent = pbf.readBoolean();
  }

  static write(obj: ProtoOAExecutionEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.executionType !== undefined && obj.executionType !== null)
      pbf.writeVarintField(3, obj.executionType);
    if (obj.position !== undefined && obj.position !== null)
      pbf.writeMessage(4, ProtoOAPositionUtils.write, obj.position);
    if (obj.order !== undefined && obj.order !== null)
      pbf.writeMessage(5, ProtoOAOrderUtils.write, obj.order);
    if (obj.deal !== undefined && obj.deal !== null)
      pbf.writeMessage(6, ProtoOADealUtils.write, obj.deal);
    if (
      obj.bonusDepositWithdraw !== undefined &&
      obj.bonusDepositWithdraw !== null
    )
      pbf.writeMessage(
        7,
        ProtoOABonusDepositWithdrawUtils.write,
        obj.bonusDepositWithdraw
      );
    if (obj.depositWithdraw !== undefined && obj.depositWithdraw !== null)
      pbf.writeMessage(
        8,
        ProtoOADepositWithdrawUtils.write,
        obj.depositWithdraw
      );
    if (obj.errorCode !== undefined && obj.errorCode !== null)
      pbf.writeStringField(9, obj.errorCode);
    if (obj.isServerEvent !== undefined && obj.isServerEvent !== null)
      pbf.writeBooleanField(10, obj.isServerEvent);
  }
}

// ProtoOACancelOrderReq =======================================

export interface ProtoOACancelOrderReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  orderId: number;
}

export class ProtoOACancelOrderReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOACancelOrderReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        orderId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOACancelOrderReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.orderId = pbf.readVarint64();
  }

  static write(obj: ProtoOACancelOrderReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.orderId !== undefined && obj.orderId !== null)
      pbf.writeVarintField(3, obj.orderId);
  }
}

// ProtoOAAmendOrderReq ========================================

export interface ProtoOAAmendOrderReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  orderId: number;
  volume?: number;
  limitPrice?: number;
  stopPrice?: number;
  expirationTimestamp?: number;
  stopLoss?: number;
  takeProfit?: number;
  slippageInPoints?: number;
  relativeStopLoss?: number;
  relativeTakeProfit?: number;
  guaranteedStopLoss?: boolean;
  trailingStopLoss?: boolean;
  stopTriggerMethod?: ProtoOAOrderTriggerMethod;
}

export class ProtoOAAmendOrderReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAmendOrderReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        orderId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAmendOrderReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.orderId = pbf.readVarint64();
    if (tag === 4) obj.volume = pbf.readVarint64();
    if (tag === 5) obj.limitPrice = pbf.readDouble();
    if (tag === 6) obj.stopPrice = pbf.readDouble();
    if (tag === 7) obj.expirationTimestamp = pbf.readVarint64();
    if (tag === 8) obj.stopLoss = pbf.readDouble();
    if (tag === 9) obj.takeProfit = pbf.readDouble();
    if (tag === 10) obj.slippageInPoints = pbf.readVarint();
    if (tag === 11) obj.relativeStopLoss = pbf.readVarint64();
    if (tag === 12) obj.relativeTakeProfit = pbf.readVarint64();
    if (tag === 13) obj.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 14) obj.trailingStopLoss = pbf.readBoolean();
    if (tag === 15) obj.stopTriggerMethod = pbf.readVarint();
  }

  static write(obj: ProtoOAAmendOrderReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.orderId !== undefined && obj.orderId !== null)
      pbf.writeVarintField(3, obj.orderId);
    if (obj.volume !== undefined && obj.volume !== null)
      pbf.writeVarintField(4, obj.volume);
    if (obj.limitPrice !== undefined && obj.limitPrice !== null)
      pbf.writeDoubleField(5, obj.limitPrice);
    if (obj.stopPrice !== undefined && obj.stopPrice !== null)
      pbf.writeDoubleField(6, obj.stopPrice);
    if (
      obj.expirationTimestamp !== undefined &&
      obj.expirationTimestamp !== null
    )
      pbf.writeVarintField(7, obj.expirationTimestamp);
    if (obj.stopLoss !== undefined && obj.stopLoss !== null)
      pbf.writeDoubleField(8, obj.stopLoss);
    if (obj.takeProfit !== undefined && obj.takeProfit !== null)
      pbf.writeDoubleField(9, obj.takeProfit);
    if (obj.slippageInPoints !== undefined && obj.slippageInPoints !== null)
      pbf.writeVarintField(10, obj.slippageInPoints);
    if (obj.relativeStopLoss !== undefined && obj.relativeStopLoss !== null)
      pbf.writeVarintField(11, obj.relativeStopLoss);
    if (obj.relativeTakeProfit !== undefined && obj.relativeTakeProfit !== null)
      pbf.writeVarintField(12, obj.relativeTakeProfit);
    if (obj.guaranteedStopLoss !== undefined && obj.guaranteedStopLoss !== null)
      pbf.writeBooleanField(13, obj.guaranteedStopLoss);
    if (obj.trailingStopLoss !== undefined && obj.trailingStopLoss !== null)
      pbf.writeBooleanField(14, obj.trailingStopLoss);
    if (obj.stopTriggerMethod !== undefined && obj.stopTriggerMethod !== null)
      pbf.writeVarintField(15, obj.stopTriggerMethod);
  }
}

// ProtoOAAmendPositionSLTPReq =================================

export interface ProtoOAAmendPositionSLTPReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  positionId: number;
  stopLoss?: number;
  takeProfit?: number;
  guaranteedStopLoss?: boolean;
  trailingStopLoss?: boolean;
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod;
}

export class ProtoOAAmendPositionSLTPReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAmendPositionSLTPReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        positionId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAmendPositionSLTPReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.positionId = pbf.readVarint64();
    if (tag === 4) obj.stopLoss = pbf.readDouble();
    if (tag === 5) obj.takeProfit = pbf.readDouble();
    if (tag === 7) obj.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 8) obj.trailingStopLoss = pbf.readBoolean();
    if (tag === 9) obj.stopLossTriggerMethod = pbf.readVarint();
  }

  static write(obj: ProtoOAAmendPositionSLTPReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(3, obj.positionId);
    if (obj.stopLoss !== undefined && obj.stopLoss !== null)
      pbf.writeDoubleField(4, obj.stopLoss);
    if (obj.takeProfit !== undefined && obj.takeProfit !== null)
      pbf.writeDoubleField(5, obj.takeProfit);
    if (obj.guaranteedStopLoss !== undefined && obj.guaranteedStopLoss !== null)
      pbf.writeBooleanField(7, obj.guaranteedStopLoss);
    if (obj.trailingStopLoss !== undefined && obj.trailingStopLoss !== null)
      pbf.writeBooleanField(8, obj.trailingStopLoss);
    if (
      obj.stopLossTriggerMethod !== undefined &&
      obj.stopLossTriggerMethod !== null
    )
      pbf.writeVarintField(9, obj.stopLossTriggerMethod);
  }
}

// ProtoOAClosePositionReq =====================================

export interface ProtoOAClosePositionReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  positionId: number;
  volume: number;
}

export class ProtoOAClosePositionReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAClosePositionReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        positionId: 0,
        volume: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAClosePositionReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.positionId = pbf.readVarint64();
    if (tag === 4) obj.volume = pbf.readVarint64();
  }

  static write(obj: ProtoOAClosePositionReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(3, obj.positionId);
    if (obj.volume !== undefined && obj.volume !== null)
      pbf.writeVarintField(4, obj.volume);
  }
}

// ProtoOATrailingSLChangedEvent ===============================

export interface ProtoOATrailingSLChangedEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  positionId: number;
  orderId: number;
  stopPrice: number;
  utcLastUpdateTimestamp: number;
}

export class ProtoOATrailingSLChangedEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATrailingSLChangedEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        positionId: 0,
        orderId: 0,
        stopPrice: 0,
        utcLastUpdateTimestamp: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOATrailingSLChangedEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.positionId = pbf.readVarint64();
    if (tag === 4) obj.orderId = pbf.readVarint64();
    if (tag === 5) obj.stopPrice = pbf.readDouble();
    if (tag === 6) obj.utcLastUpdateTimestamp = pbf.readVarint64();
  }

  static write(obj: ProtoOATrailingSLChangedEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(3, obj.positionId);
    if (obj.orderId !== undefined && obj.orderId !== null)
      pbf.writeVarintField(4, obj.orderId);
    if (obj.stopPrice !== undefined && obj.stopPrice !== null)
      pbf.writeDoubleField(5, obj.stopPrice);
    if (
      obj.utcLastUpdateTimestamp !== undefined &&
      obj.utcLastUpdateTimestamp !== null
    )
      pbf.writeVarintField(6, obj.utcLastUpdateTimestamp);
  }
}

// ProtoOAAssetListReq =========================================

export interface ProtoOAAssetListReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAAssetListReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAssetListReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAAssetListReq, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAAssetListReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAAssetListRes =========================================

export interface ProtoOAAssetListRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  asset: ProtoOAAsset[];
}

export class ProtoOAAssetListResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAssetListResUtils._readField,
      {
        ctidTraderAccountId: 0,
        asset: [],
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAAssetListRes, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.asset.push(ProtoOAAssetUtils.read(pbf, pbf.readVarint() + pbf.pos));
  }

  static write(obj: ProtoOAAssetListRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.asset !== undefined && obj.asset !== null)
      obj.asset.forEach((asset) =>
        pbf.writeMessage(3, ProtoOAAssetUtils.write, asset)
      );
  }
}

// ProtoOASymbolsListReq =======================================

export interface ProtoOASymbolsListReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  includeArchivedSymbols?: boolean;
}

export class ProtoOASymbolsListReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolsListReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolsListReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.includeArchivedSymbols = pbf.readBoolean();
  }

  static write(obj: ProtoOASymbolsListReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (
      obj.includeArchivedSymbols !== undefined &&
      obj.includeArchivedSymbols !== null
    )
      pbf.writeBooleanField(3, obj.includeArchivedSymbols);
  }
}

// ProtoOASymbolsListRes =======================================

export interface ProtoOASymbolsListRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbol: ProtoOALightSymbol[];
  archivedSymbol: ProtoOAArchivedSymbol[];
}

export class ProtoOASymbolsListResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolsListResUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbol: [],
        archivedSymbol: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolsListRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.symbol.push(
        ProtoOALightSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 4)
      obj.archivedSymbol.push(
        ProtoOAArchivedSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOASymbolsListRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbol !== undefined && obj.symbol !== null)
      obj.symbol.forEach((symbol) =>
        pbf.writeMessage(3, ProtoOALightSymbolUtils.write, symbol)
      );
    if (obj.archivedSymbol !== undefined && obj.archivedSymbol !== null)
      obj.archivedSymbol.forEach((archivedSymbol) =>
        pbf.writeMessage(4, ProtoOAArchivedSymbolUtils.write, archivedSymbol)
      );
  }
}

// ProtoOASymbolByIdReq ========================================

export interface ProtoOASymbolByIdReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number[];
}

export class ProtoOASymbolByIdReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolByIdReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolByIdReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId.push(pbf.readVarint64());
  }

  static write(obj: ProtoOASymbolByIdReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      obj.symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}

// ProtoOASymbolByIdRes ========================================

export interface ProtoOASymbolByIdRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbol: ProtoOASymbol[];
  archivedSymbol: ProtoOAArchivedSymbol[];
}

export class ProtoOASymbolByIdResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolByIdResUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbol: [],
        archivedSymbol: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolByIdRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.symbol.push(ProtoOASymbolUtils.read(pbf, pbf.readVarint() + pbf.pos));
    if (tag === 4)
      obj.archivedSymbol.push(
        ProtoOAArchivedSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOASymbolByIdRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbol !== undefined && obj.symbol !== null)
      obj.symbol.forEach((symbol) =>
        pbf.writeMessage(3, ProtoOASymbolUtils.write, symbol)
      );
    if (obj.archivedSymbol !== undefined && obj.archivedSymbol !== null)
      obj.archivedSymbol.forEach((archivedSymbol) =>
        pbf.writeMessage(4, ProtoOAArchivedSymbolUtils.write, archivedSymbol)
      );
  }
}

// ProtoOASymbolsForConversionReq ==============================

export interface ProtoOASymbolsForConversionReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  firstAssetId: number;
  lastAssetId: number;
}

export class ProtoOASymbolsForConversionReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolsForConversionReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        firstAssetId: 0,
        lastAssetId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolsForConversionReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.firstAssetId = pbf.readVarint64();
    if (tag === 4) obj.lastAssetId = pbf.readVarint64();
  }

  static write(obj: ProtoOASymbolsForConversionReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.firstAssetId !== undefined && obj.firstAssetId !== null)
      pbf.writeVarintField(3, obj.firstAssetId);
    if (obj.lastAssetId !== undefined && obj.lastAssetId !== null)
      pbf.writeVarintField(4, obj.lastAssetId);
  }
}

// ProtoOASymbolsForConversionRes ==============================

export interface ProtoOASymbolsForConversionRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbol: ProtoOALightSymbol[];
}

export class ProtoOASymbolsForConversionResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolsForConversionResUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbol: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolsForConversionRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.symbol.push(
        ProtoOALightSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOASymbolsForConversionRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbol !== undefined && obj.symbol !== null)
      obj.symbol.forEach((symbol) =>
        pbf.writeMessage(3, ProtoOALightSymbolUtils.write, symbol)
      );
  }
}

// ProtoOASymbolChangedEvent ===================================

export interface ProtoOASymbolChangedEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number[];
}

export class ProtoOASymbolChangedEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolChangedEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolChangedEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId.push(pbf.readVarint64());
  }

  static write(obj: ProtoOASymbolChangedEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      obj.symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}

// ProtoOAAssetClassListReq ====================================

export interface ProtoOAAssetClassListReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAAssetClassListReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAssetClassListReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAssetClassListReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAAssetClassListReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAAssetClassListRes ====================================

export interface ProtoOAAssetClassListRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  assetClass: ProtoOAAssetClass[];
}

export class ProtoOAAssetClassListResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAssetClassListResUtils._readField,
      {
        ctidTraderAccountId: 0,
        assetClass: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAssetClassListRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.assetClass.push(
        ProtoOAAssetClassUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOAAssetClassListRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.assetClass !== undefined && obj.assetClass !== null)
      obj.assetClass.forEach((assetClass) =>
        pbf.writeMessage(3, ProtoOAAssetClassUtils.write, assetClass)
      );
  }
}

// ProtoOATraderReq ============================================

export interface ProtoOATraderReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOATraderReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATraderReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOATraderReq, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOATraderReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOATraderRes ============================================

export interface ProtoOATraderRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  trader: ProtoOATrader;
}

export class ProtoOATraderResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATraderResUtils._readField,
      {
        ctidTraderAccountId: 0,
        trader: { balance: 0, ctidTraderAccountId: 0, depositAssetId: 0 },
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOATraderRes, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.trader = ProtoOATraderUtils.read(pbf, pbf.readVarint() + pbf.pos);
  }

  static write(obj: ProtoOATraderRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.trader !== undefined && obj.trader !== null)
      pbf.writeMessage(3, ProtoOATraderUtils.write, obj.trader);
  }
}

// ProtoOATraderUpdatedEvent ===================================

export interface ProtoOATraderUpdatedEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  trader: ProtoOATrader;
}

export class ProtoOATraderUpdatedEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATraderUpdatedEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        trader: { balance: 0, ctidTraderAccountId: 0, depositAssetId: 0 },
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOATraderUpdatedEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.trader = ProtoOATraderUtils.read(pbf, pbf.readVarint() + pbf.pos);
  }

  static write(obj: ProtoOATraderUpdatedEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.trader !== undefined && obj.trader !== null)
      pbf.writeMessage(3, ProtoOATraderUtils.write, obj.trader);
  }
}

// ProtoOAReconcileReq =========================================

export interface ProtoOAReconcileReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAReconcileReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAReconcileReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAReconcileReq, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAReconcileReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAReconcileRes =========================================

export interface ProtoOAReconcileRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  position: ProtoOAPosition[];
  order: ProtoOAOrder[];
}

export class ProtoOAReconcileResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAReconcileResUtils._readField,
      {
        ctidTraderAccountId: 0,
        position: [],
        order: [],
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAReconcileRes, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.position.push(
        ProtoOAPositionUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 4)
      obj.order.push(ProtoOAOrderUtils.read(pbf, pbf.readVarint() + pbf.pos));
  }

  static write(obj: ProtoOAReconcileRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.position !== undefined && obj.position !== null)
      obj.position.forEach((position) =>
        pbf.writeMessage(3, ProtoOAPositionUtils.write, position)
      );
    if (obj.order !== undefined && obj.order !== null)
      obj.order.forEach((order) =>
        pbf.writeMessage(4, ProtoOAOrderUtils.write, order)
      );
  }
}

// ProtoOAOrderErrorEvent ======================================

export interface ProtoOAOrderErrorEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  errorCode: string;
  orderId?: number;
  positionId?: number;
  description?: string;
}

export class ProtoOAOrderErrorEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAOrderErrorEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        errorCode: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAOrderErrorEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 5) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 2) obj.errorCode = pbf.readString();
    if (tag === 3) obj.orderId = pbf.readVarint64();
    if (tag === 6) obj.positionId = pbf.readVarint64();
    if (tag === 7) obj.description = pbf.readString();
  }

  static write(obj: ProtoOAOrderErrorEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(5, obj.ctidTraderAccountId);
    if (obj.errorCode !== undefined && obj.errorCode !== null)
      pbf.writeStringField(2, obj.errorCode);
    if (obj.orderId !== undefined && obj.orderId !== null)
      pbf.writeVarintField(3, obj.orderId);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(6, obj.positionId);
    if (obj.description !== undefined && obj.description !== null)
      pbf.writeStringField(7, obj.description);
  }
}

// ProtoOADealListReq ==========================================

export interface ProtoOADealListReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  fromTimestamp: number;
  toTimestamp: number;
  maxRows?: number;
}

export class ProtoOADealListReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOADealListReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        fromTimestamp: 0,
        toTimestamp: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOADealListReq, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.fromTimestamp = pbf.readVarint64();
    if (tag === 4) obj.toTimestamp = pbf.readVarint64();
    if (tag === 5) obj.maxRows = pbf.readVarint();
  }

  static write(obj: ProtoOADealListReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.fromTimestamp !== undefined && obj.fromTimestamp !== null)
      pbf.writeVarintField(3, obj.fromTimestamp);
    if (obj.toTimestamp !== undefined && obj.toTimestamp !== null)
      pbf.writeVarintField(4, obj.toTimestamp);
    if (obj.maxRows !== undefined && obj.maxRows !== null)
      pbf.writeVarintField(5, obj.maxRows);
  }
}

// ProtoOADealListRes ==========================================

export interface ProtoOADealListRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  deal: ProtoOADeal[];
  hasMore: boolean;
}

export class ProtoOADealListResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOADealListResUtils._readField,
      {
        ctidTraderAccountId: 0,
        deal: [],
        hasMore: false,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOADealListRes, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.deal.push(ProtoOADealUtils.read(pbf, pbf.readVarint() + pbf.pos));
    if (tag === 4) obj.hasMore = pbf.readBoolean();
  }

  static write(obj: ProtoOADealListRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.deal !== undefined && obj.deal !== null)
      obj.deal.forEach((deal) =>
        pbf.writeMessage(3, ProtoOADealUtils.write, deal)
      );
    if (obj.hasMore !== undefined && obj.hasMore !== null)
      pbf.writeBooleanField(4, obj.hasMore);
  }
}

// ProtoOAExpectedMarginReq ====================================

export interface ProtoOAExpectedMarginReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number;
  volume: number[];
}

export class ProtoOAExpectedMarginReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAExpectedMarginReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: 0,
        volume: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAExpectedMarginReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId = pbf.readVarint64();
    if (tag === 4) obj.volume.push(pbf.readVarint64());
  }

  static write(obj: ProtoOAExpectedMarginReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(3, obj.symbolId);
    if (obj.volume !== undefined && obj.volume !== null)
      obj.volume.forEach((volume) => pbf.writeVarintField(4, volume));
  }
}

// ProtoOAExpectedMarginRes ====================================

export interface ProtoOAExpectedMarginRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  margin: ProtoOAExpectedMargin[];
  moneyDigits?: number;
}

export class ProtoOAExpectedMarginResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAExpectedMarginResUtils._readField,
      {
        ctidTraderAccountId: 0,
        margin: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAExpectedMarginRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.margin.push(
        ProtoOAExpectedMarginUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 4) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOAExpectedMarginRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.margin !== undefined && obj.margin !== null)
      obj.margin.forEach((margin) =>
        pbf.writeMessage(3, ProtoOAExpectedMarginUtils.write, margin)
      );
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(4, obj.moneyDigits);
  }
}

// ProtoOAMarginChangedEvent ===================================

export interface ProtoOAMarginChangedEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  positionId: number;
  usedMargin: number;
  moneyDigits?: number;
}

export class ProtoOAMarginChangedEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAMarginChangedEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        positionId: 0,
        usedMargin: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAMarginChangedEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.positionId = pbf.readVarint64();
    if (tag === 4) obj.usedMargin = pbf.readVarint64();
    if (tag === 5) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOAMarginChangedEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(3, obj.positionId);
    if (obj.usedMargin !== undefined && obj.usedMargin !== null)
      pbf.writeVarintField(4, obj.usedMargin);
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(5, obj.moneyDigits);
  }
}

// ProtoOACashFlowHistoryListReq ===============================

export interface ProtoOACashFlowHistoryListReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  fromTimestamp: number;
  toTimestamp: number;
}

export class ProtoOACashFlowHistoryListReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOACashFlowHistoryListReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        fromTimestamp: 0,
        toTimestamp: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOACashFlowHistoryListReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.fromTimestamp = pbf.readVarint64();
    if (tag === 4) obj.toTimestamp = pbf.readVarint64();
  }

  static write(obj: ProtoOACashFlowHistoryListReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.fromTimestamp !== undefined && obj.fromTimestamp !== null)
      pbf.writeVarintField(3, obj.fromTimestamp);
    if (obj.toTimestamp !== undefined && obj.toTimestamp !== null)
      pbf.writeVarintField(4, obj.toTimestamp);
  }
}

// ProtoOACashFlowHistoryListRes ===============================

export interface ProtoOACashFlowHistoryListRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  depositWithdraw: ProtoOADepositWithdraw[];
}

export class ProtoOACashFlowHistoryListResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOACashFlowHistoryListResUtils._readField,
      {
        ctidTraderAccountId: 0,
        depositWithdraw: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOACashFlowHistoryListRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.depositWithdraw.push(
        ProtoOADepositWithdrawUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOACashFlowHistoryListRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.depositWithdraw !== undefined && obj.depositWithdraw !== null)
      obj.depositWithdraw.forEach((depositWithdraw) =>
        pbf.writeMessage(3, ProtoOADepositWithdrawUtils.write, depositWithdraw)
      );
  }
}

// ProtoOAGetAccountListByAccessTokenReq =======================

export interface ProtoOAGetAccountListByAccessTokenReq {
  payloadType?: ProtoOAPayloadType;
  accessToken: string;
}

export class ProtoOAGetAccountListByAccessTokenReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetAccountListByAccessTokenReqUtils._readField,
      {
        accessToken: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetAccountListByAccessTokenReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.accessToken = pbf.readString();
  }

  static write(
    obj: ProtoOAGetAccountListByAccessTokenReq,
    pbf: PBF = new PBF()
  ) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.accessToken !== undefined && obj.accessToken !== null)
      pbf.writeStringField(2, obj.accessToken);
  }
}

// ProtoOAGetAccountListByAccessTokenRes =======================

export interface ProtoOAGetAccountListByAccessTokenRes {
  payloadType?: ProtoOAPayloadType;
  accessToken: string;
  permissionScope?: ProtoOAClientPermissionScope;
  ctidTraderAccount: ProtoOACtidTraderAccount[];
}

export class ProtoOAGetAccountListByAccessTokenResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetAccountListByAccessTokenResUtils._readField,
      {
        accessToken: "",
        ctidTraderAccount: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetAccountListByAccessTokenRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.accessToken = pbf.readString();
    if (tag === 3) obj.permissionScope = pbf.readVarint();
    if (tag === 4)
      obj.ctidTraderAccount.push(
        ProtoOACtidTraderAccountUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(
    obj: ProtoOAGetAccountListByAccessTokenRes,
    pbf: PBF = new PBF()
  ) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.accessToken !== undefined && obj.accessToken !== null)
      pbf.writeStringField(2, obj.accessToken);
    if (obj.permissionScope !== undefined && obj.permissionScope !== null)
      pbf.writeVarintField(3, obj.permissionScope);
    if (obj.ctidTraderAccount !== undefined && obj.ctidTraderAccount !== null)
      obj.ctidTraderAccount.forEach((ctidTraderAccount) =>
        pbf.writeMessage(
          4,
          ProtoOACtidTraderAccountUtils.write,
          ctidTraderAccount
        )
      );
  }
}

// ProtoOARefreshTokenReq ======================================

export interface ProtoOARefreshTokenReq {
  payloadType?: ProtoOAPayloadType;
  refreshToken: string;
}

export class ProtoOARefreshTokenReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOARefreshTokenReqUtils._readField,
      {
        refreshToken: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOARefreshTokenReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.refreshToken = pbf.readString();
  }

  static write(obj: ProtoOARefreshTokenReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.refreshToken !== undefined && obj.refreshToken !== null)
      pbf.writeStringField(2, obj.refreshToken);
  }
}

// ProtoOARefreshTokenRes ======================================

export interface ProtoOARefreshTokenRes {
  payloadType?: ProtoOAPayloadType;
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
}

export class ProtoOARefreshTokenResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOARefreshTokenResUtils._readField,
      {
        accessToken: "",
        tokenType: "",
        expiresIn: 0,
        refreshToken: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOARefreshTokenRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.accessToken = pbf.readString();
    if (tag === 3) obj.tokenType = pbf.readString();
    if (tag === 4) obj.expiresIn = pbf.readVarint64();
    if (tag === 5) obj.refreshToken = pbf.readString();
  }

  static write(obj: ProtoOARefreshTokenRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.accessToken !== undefined && obj.accessToken !== null)
      pbf.writeStringField(2, obj.accessToken);
    if (obj.tokenType !== undefined && obj.tokenType !== null)
      pbf.writeStringField(3, obj.tokenType);
    if (obj.expiresIn !== undefined && obj.expiresIn !== null)
      pbf.writeVarintField(4, obj.expiresIn);
    if (obj.refreshToken !== undefined && obj.refreshToken !== null)
      pbf.writeStringField(5, obj.refreshToken);
  }
}

// ProtoOASubscribeSpotsReq ====================================

export interface ProtoOASubscribeSpotsReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number[];
}

export class ProtoOASubscribeSpotsReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASubscribeSpotsReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASubscribeSpotsReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId.push(pbf.readVarint64());
  }

  static write(obj: ProtoOASubscribeSpotsReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      obj.symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}

// ProtoOASubscribeSpotsRes ====================================

export interface ProtoOASubscribeSpotsRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOASubscribeSpotsResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASubscribeSpotsResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASubscribeSpotsRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOASubscribeSpotsRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAUnsubscribeSpotsReq ==================================

export interface ProtoOAUnsubscribeSpotsReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number[];
}

export class ProtoOAUnsubscribeSpotsReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAUnsubscribeSpotsReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAUnsubscribeSpotsReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId.push(pbf.readVarint64());
  }

  static write(obj: ProtoOAUnsubscribeSpotsReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      obj.symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}

// ProtoOAUnsubscribeSpotsRes ==================================

export interface ProtoOAUnsubscribeSpotsRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAUnsubscribeSpotsResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAUnsubscribeSpotsResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAUnsubscribeSpotsRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAUnsubscribeSpotsRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOASpotEvent ============================================

export interface ProtoOASpotEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number;
  bid?: number;
  ask?: number;
  trendbar: ProtoOATrendbar[];
  sessionClose?: number;
}

export class ProtoOASpotEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASpotEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: 0,
        trendbar: [],
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOASpotEvent, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId = pbf.readVarint64();
    if (tag === 4) obj.bid = pbf.readVarint64();
    if (tag === 5) obj.ask = pbf.readVarint64();
    if (tag === 6)
      obj.trendbar.push(
        ProtoOATrendbarUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 7) obj.sessionClose = pbf.readVarint64();
  }

  static write(obj: ProtoOASpotEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(3, obj.symbolId);
    if (obj.bid !== undefined && obj.bid !== null)
      pbf.writeVarintField(4, obj.bid);
    if (obj.ask !== undefined && obj.ask !== null)
      pbf.writeVarintField(5, obj.ask);
    if (obj.trendbar !== undefined && obj.trendbar !== null)
      obj.trendbar.forEach((trendbar) =>
        pbf.writeMessage(6, ProtoOATrendbarUtils.write, trendbar)
      );
    if (obj.sessionClose !== undefined && obj.sessionClose !== null)
      pbf.writeVarintField(7, obj.sessionClose);
  }
}

// ProtoOASubscribeLiveTrendbarReq =============================

export interface ProtoOASubscribeLiveTrendbarReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  period: ProtoOATrendbarPeriod;
  symbolId: number;
}

export class ProtoOASubscribeLiveTrendbarReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASubscribeLiveTrendbarReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        period: ProtoOATrendbarPeriod.M1,
        symbolId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASubscribeLiveTrendbarReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.period = pbf.readVarint();
    if (tag === 4) obj.symbolId = pbf.readVarint64();
  }

  static write(obj: ProtoOASubscribeLiveTrendbarReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.period !== undefined && obj.period !== null)
      pbf.writeVarintField(3, obj.period);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(4, obj.symbolId);
  }
}

// ProtoOASubscribeLiveTrendbarRes =============================

export interface ProtoOASubscribeLiveTrendbarRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOASubscribeLiveTrendbarResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASubscribeLiveTrendbarResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASubscribeLiveTrendbarRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOASubscribeLiveTrendbarRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAUnsubscribeLiveTrendbarReq ===========================

export interface ProtoOAUnsubscribeLiveTrendbarReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  period: ProtoOATrendbarPeriod;
  symbolId: number;
}

export class ProtoOAUnsubscribeLiveTrendbarReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAUnsubscribeLiveTrendbarReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        period: ProtoOATrendbarPeriod.M1,
        symbolId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAUnsubscribeLiveTrendbarReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.period = pbf.readVarint();
    if (tag === 4) obj.symbolId = pbf.readVarint64();
  }

  static write(obj: ProtoOAUnsubscribeLiveTrendbarReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.period !== undefined && obj.period !== null)
      pbf.writeVarintField(3, obj.period);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(4, obj.symbolId);
  }
}

// ProtoOAUnsubscribeLiveTrendbarRes ===========================

export interface ProtoOAUnsubscribeLiveTrendbarRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAUnsubscribeLiveTrendbarResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAUnsubscribeLiveTrendbarResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAUnsubscribeLiveTrendbarRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAUnsubscribeLiveTrendbarRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAGetTrendbarsReq ======================================

export interface ProtoOAGetTrendbarsReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  fromTimestamp: number;
  toTimestamp: number;
  period: ProtoOATrendbarPeriod;
  symbolId: number;
}

export class ProtoOAGetTrendbarsReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetTrendbarsReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        fromTimestamp: 0,
        toTimestamp: 0,
        period: ProtoOATrendbarPeriod.M1,
        symbolId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetTrendbarsReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.fromTimestamp = pbf.readVarint64();
    if (tag === 4) obj.toTimestamp = pbf.readVarint64();
    if (tag === 5) obj.period = pbf.readVarint();
    if (tag === 6) obj.symbolId = pbf.readVarint64();
  }

  static write(obj: ProtoOAGetTrendbarsReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.fromTimestamp !== undefined && obj.fromTimestamp !== null)
      pbf.writeVarintField(3, obj.fromTimestamp);
    if (obj.toTimestamp !== undefined && obj.toTimestamp !== null)
      pbf.writeVarintField(4, obj.toTimestamp);
    if (obj.period !== undefined && obj.period !== null)
      pbf.writeVarintField(5, obj.period);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(6, obj.symbolId);
  }
}

// ProtoOAGetTrendbarsRes ======================================

export interface ProtoOAGetTrendbarsRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  period: ProtoOATrendbarPeriod;
  timestamp: number;
  trendbar: ProtoOATrendbar[];
  symbolId?: number;
}

export class ProtoOAGetTrendbarsResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetTrendbarsResUtils._readField,
      {
        ctidTraderAccountId: 0,
        period: ProtoOATrendbarPeriod.M1,
        timestamp: 0,
        trendbar: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetTrendbarsRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.period = pbf.readVarint();
    if (tag === 4) obj.timestamp = pbf.readVarint64();
    if (tag === 5)
      obj.trendbar.push(
        ProtoOATrendbarUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 6) obj.symbolId = pbf.readVarint64();
  }

  static write(obj: ProtoOAGetTrendbarsRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.period !== undefined && obj.period !== null)
      pbf.writeVarintField(3, obj.period);
    if (obj.timestamp !== undefined && obj.timestamp !== null)
      pbf.writeVarintField(4, obj.timestamp);
    if (obj.trendbar !== undefined && obj.trendbar !== null)
      obj.trendbar.forEach((trendbar) =>
        pbf.writeMessage(5, ProtoOATrendbarUtils.write, trendbar)
      );
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(6, obj.symbolId);
  }
}

// ProtoOAGetTickDataReq =======================================

export interface ProtoOAGetTickDataReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number;
  type: ProtoOAQuoteType;
  fromTimestamp: number;
  toTimestamp: number;
}

export class ProtoOAGetTickDataReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetTickDataReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: 0,
        type: ProtoOAQuoteType.BID,
        fromTimestamp: 0,
        toTimestamp: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetTickDataReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId = pbf.readVarint64();
    if (tag === 4) obj.type = pbf.readVarint();
    if (tag === 5) obj.fromTimestamp = pbf.readVarint64();
    if (tag === 6) obj.toTimestamp = pbf.readVarint64();
  }

  static write(obj: ProtoOAGetTickDataReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(3, obj.symbolId);
    if (obj.type !== undefined && obj.type !== null)
      pbf.writeVarintField(4, obj.type);
    if (obj.fromTimestamp !== undefined && obj.fromTimestamp !== null)
      pbf.writeVarintField(5, obj.fromTimestamp);
    if (obj.toTimestamp !== undefined && obj.toTimestamp !== null)
      pbf.writeVarintField(6, obj.toTimestamp);
  }
}

// ProtoOAGetTickDataRes =======================================

export interface ProtoOAGetTickDataRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  tickData: ProtoOATickData[];
  hasMore: boolean;
}

export class ProtoOAGetTickDataResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetTickDataResUtils._readField,
      {
        ctidTraderAccountId: 0,
        tickData: [],
        hasMore: false,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetTickDataRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.tickData.push(
        ProtoOATickDataUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 4) obj.hasMore = pbf.readBoolean();
  }

  static write(obj: ProtoOAGetTickDataRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.tickData !== undefined && obj.tickData !== null)
      obj.tickData.forEach((tickData) =>
        pbf.writeMessage(3, ProtoOATickDataUtils.write, tickData)
      );
    if (obj.hasMore !== undefined && obj.hasMore !== null)
      pbf.writeBooleanField(4, obj.hasMore);
  }
}

// ProtoOAGetCtidProfileByTokenReq =============================

export interface ProtoOAGetCtidProfileByTokenReq {
  payloadType?: ProtoOAPayloadType;
  accessToken: string;
}

export class ProtoOAGetCtidProfileByTokenReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetCtidProfileByTokenReqUtils._readField,
      {
        accessToken: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetCtidProfileByTokenReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.accessToken = pbf.readString();
  }

  static write(obj: ProtoOAGetCtidProfileByTokenReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.accessToken !== undefined && obj.accessToken !== null)
      pbf.writeStringField(2, obj.accessToken);
  }
}

// ProtoOAGetCtidProfileByTokenRes =============================

export interface ProtoOAGetCtidProfileByTokenRes {
  payloadType?: ProtoOAPayloadType;
  profile: ProtoOACtidProfile;
}

export class ProtoOAGetCtidProfileByTokenResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAGetCtidProfileByTokenResUtils._readField,
      {
        profile: { userId: 0 },
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAGetCtidProfileByTokenRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2)
      obj.profile = ProtoOACtidProfileUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
  }

  static write(obj: ProtoOAGetCtidProfileByTokenRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.profile !== undefined && obj.profile !== null)
      pbf.writeMessage(2, ProtoOACtidProfileUtils.write, obj.profile);
  }
}

// ProtoOADepthEvent ===========================================

export interface ProtoOADepthEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number;
  newQuotes: ProtoOADepthQuote[];
  deletedQuotes: number[];
}

export class ProtoOADepthEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOADepthEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: 0,
        newQuotes: [],
        deletedQuotes: [],
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOADepthEvent, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId = pbf.readVarint64();
    if (tag === 4)
      obj.newQuotes.push(
        ProtoOADepthQuoteUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 5) pbf.readPackedVarint(obj.deletedQuotes);
  }

  static write(obj: ProtoOADepthEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(3, obj.symbolId);
    if (obj.newQuotes !== undefined && obj.newQuotes !== null)
      obj.newQuotes.forEach((newQuotes) =>
        pbf.writeMessage(4, ProtoOADepthQuoteUtils.write, newQuotes)
      );
    if (obj.deletedQuotes !== undefined && obj.deletedQuotes !== null)
      pbf.writePackedVarint(5, obj.deletedQuotes);
  }
}

// ProtoOASubscribeDepthQuotesReq ==============================

export interface ProtoOASubscribeDepthQuotesReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number[];
}

export class ProtoOASubscribeDepthQuotesReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASubscribeDepthQuotesReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASubscribeDepthQuotesReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId.push(pbf.readVarint64());
  }

  static write(obj: ProtoOASubscribeDepthQuotesReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      obj.symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}

// ProtoOASubscribeDepthQuotesRes ==============================

export interface ProtoOASubscribeDepthQuotesRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOASubscribeDepthQuotesResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASubscribeDepthQuotesResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASubscribeDepthQuotesRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOASubscribeDepthQuotesRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAUnsubscribeDepthQuotesReq ============================

export interface ProtoOAUnsubscribeDepthQuotesReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolId: number[];
}

export class ProtoOAUnsubscribeDepthQuotesReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAUnsubscribeDepthQuotesReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolId: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAUnsubscribeDepthQuotesReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) obj.symbolId.push(pbf.readVarint64());
  }

  static write(obj: ProtoOAUnsubscribeDepthQuotesReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      obj.symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}

// ProtoOAUnsubscribeDepthQuotesRes ============================

export interface ProtoOAUnsubscribeDepthQuotesRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAUnsubscribeDepthQuotesResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAUnsubscribeDepthQuotesResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAUnsubscribeDepthQuotesRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAUnsubscribeDepthQuotesRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOASymbolCategoryListReq ================================

export interface ProtoOASymbolCategoryListReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOASymbolCategoryListReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolCategoryListReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolCategoryListReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOASymbolCategoryListReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOASymbolCategoryListRes ================================

export interface ProtoOASymbolCategoryListRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  symbolCategory: ProtoOASymbolCategory[];
}

export class ProtoOASymbolCategoryListResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolCategoryListResUtils._readField,
      {
        ctidTraderAccountId: 0,
        symbolCategory: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolCategoryListRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.symbolCategory.push(
        ProtoOASymbolCategoryUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOASymbolCategoryListRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.symbolCategory !== undefined && obj.symbolCategory !== null)
      obj.symbolCategory.forEach((symbolCategory) =>
        pbf.writeMessage(3, ProtoOASymbolCategoryUtils.write, symbolCategory)
      );
  }
}

// ProtoOAAccountLogoutReq =====================================

export interface ProtoOAAccountLogoutReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAAccountLogoutReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAccountLogoutReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAccountLogoutReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAAccountLogoutReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAAccountLogoutRes =====================================

export interface ProtoOAAccountLogoutRes {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAAccountLogoutResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAccountLogoutResUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAccountLogoutRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAAccountLogoutRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAAccountDisconnectEvent ===============================

export interface ProtoOAAccountDisconnectEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAAccountDisconnectEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAccountDisconnectEventUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAAccountDisconnectEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAAccountDisconnectEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAMarginCallListReq ====================================

export interface ProtoOAMarginCallListReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
}

export class ProtoOAMarginCallListReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAMarginCallListReqUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAMarginCallListReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(obj: ProtoOAMarginCallListReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
  }
}

// ProtoOAMarginCallListRes ====================================

export interface ProtoOAMarginCallListRes {
  payloadType?: ProtoOAPayloadType;
  marginCall: ProtoOAMarginCall[];
}

export class ProtoOAMarginCallListResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAMarginCallListResUtils._readField,
      {
        marginCall: [],
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAMarginCallListRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2)
      obj.marginCall.push(
        ProtoOAMarginCallUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOAMarginCallListRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.marginCall !== undefined && obj.marginCall !== null)
      obj.marginCall.forEach((marginCall) =>
        pbf.writeMessage(2, ProtoOAMarginCallUtils.write, marginCall)
      );
  }
}

// ProtoOAMarginCallUpdateReq ==================================

export interface ProtoOAMarginCallUpdateReq {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  marginCall: ProtoOAMarginCall;
}

export class ProtoOAMarginCallUpdateReqUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAMarginCallUpdateReqUtils._readField,
      {
        ctidTraderAccountId: 0,
        marginCall: {
          marginCallType: ProtoOANotificationType.MARGIN_LEVEL_THRESHOLD_1,
          marginLevelThreshold: 0,
        },
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAMarginCallUpdateReq,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.marginCall = ProtoOAMarginCallUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
  }

  static write(obj: ProtoOAMarginCallUpdateReq, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.marginCall !== undefined && obj.marginCall !== null)
      pbf.writeMessage(3, ProtoOAMarginCallUtils.write, obj.marginCall);
  }
}

// ProtoOAMarginCallUpdateRes ==================================

export interface ProtoOAMarginCallUpdateRes {
  payloadType?: ProtoOAPayloadType;
}

export class ProtoOAMarginCallUpdateResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(ProtoOAMarginCallUpdateResUtils._readField, {}, end);
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAMarginCallUpdateRes,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
  }

  static write(obj: ProtoOAMarginCallUpdateRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
  }
}

// ProtoOAMarginCallUpdateEvent ================================

export interface ProtoOAMarginCallUpdateEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  marginCall: ProtoOAMarginCall;
}

export class ProtoOAMarginCallUpdateEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAMarginCallUpdateEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        marginCall: {
          marginCallType: ProtoOANotificationType.MARGIN_LEVEL_THRESHOLD_1,
          marginLevelThreshold: 0,
        },
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAMarginCallUpdateEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.marginCall = ProtoOAMarginCallUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
  }

  static write(obj: ProtoOAMarginCallUpdateEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.marginCall !== undefined && obj.marginCall !== null)
      pbf.writeMessage(3, ProtoOAMarginCallUtils.write, obj.marginCall);
  }
}

// ProtoOAMarginCallTriggerEvent ===============================

export interface ProtoOAMarginCallTriggerEvent {
  payloadType?: ProtoOAPayloadType;
  ctidTraderAccountId: number;
  marginCall: ProtoOAMarginCall;
}

export class ProtoOAMarginCallTriggerEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAMarginCallTriggerEventUtils._readField,
      {
        ctidTraderAccountId: 0,
        marginCall: {
          marginCallType: ProtoOANotificationType.MARGIN_LEVEL_THRESHOLD_1,
          marginLevelThreshold: 0,
        },
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAMarginCallTriggerEvent,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      obj.marginCall = ProtoOAMarginCallUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
  }

  static write(obj: ProtoOAMarginCallTriggerEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(2, obj.ctidTraderAccountId);
    if (obj.marginCall !== undefined && obj.marginCall !== null)
      pbf.writeMessage(3, ProtoOAMarginCallUtils.write, obj.marginCall);
  }
}

// ProtoOAAsset ================================================

export interface ProtoOAAsset {
  assetId: number;
  name: string;
  displayName?: string;
  digits?: number;
}

export class ProtoOAAssetUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAAssetUtils._readField,
      {
        assetId: 0,
        name: "",
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAAsset, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.assetId = pbf.readVarint64();
    if (tag === 2) obj.name = pbf.readString();
    if (tag === 3) obj.displayName = pbf.readString();
    if (tag === 4) obj.digits = pbf.readVarint();
  }

  static write(obj: ProtoOAAsset, pbf: PBF = new PBF()) {
    if (obj.assetId !== undefined && obj.assetId !== null)
      pbf.writeVarintField(1, obj.assetId);
    if (obj.name !== undefined && obj.name !== null)
      pbf.writeStringField(2, obj.name);
    if (obj.displayName !== undefined && obj.displayName !== null)
      pbf.writeStringField(3, obj.displayName);
    if (obj.digits !== undefined && obj.digits !== null)
      pbf.writeVarintField(4, obj.digits);
  }
}

// ProtoOASymbol ===============================================

export interface ProtoOASymbol {
  symbolId: number;
  digits: number;
  pipPosition: number;
  enableShortSelling?: boolean;
  guaranteedStopLoss?: boolean;
  swapRollover3Days?: ProtoOADayOfWeek;
  swapLong?: number;
  swapShort?: number;
  maxVolume?: number;
  minVolume?: number;
  stepVolume?: number;
  maxExposure?: number;
  schedule: ProtoOAInterval[];
  commission?: number;
  commissionType?: ProtoOACommissionType;
  slDistance?: number;
  tpDistance?: number;
  gslDistance?: number;
  gslCharge?: number;
  distanceSetIn?: ProtoOASymbolDistanceType;
  minCommission?: number;
  minCommissionType?: ProtoOAMinCommissionType;
  minCommissionAsset?: string;
  rolloverCommission?: number;
  skipRolloverDays?: number;
  scheduleTimeZone?: string;
  tradingMode?: ProtoOATradingMode;
  rolloverCommission3Days?: ProtoOADayOfWeek;
  swapCalculationType?: ProtoOASwapCalculationType;
  lotSize?: number;
  preciseTradingCommissionRate?: number;
  preciseMinCommission?: number;
  holiday: ProtoOAHoliday[];
}

export class ProtoOASymbolUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolUtils._readField,
      {
        symbolId: 0,
        digits: 0,
        pipPosition: 0,
        schedule: [],
        holiday: [],
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOASymbol, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.symbolId = pbf.readVarint64();
    if (tag === 2) obj.digits = pbf.readVarint();
    if (tag === 3) obj.pipPosition = pbf.readVarint();
    if (tag === 4) obj.enableShortSelling = pbf.readBoolean();
    if (tag === 5) obj.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 6) obj.swapRollover3Days = pbf.readVarint();
    if (tag === 7) obj.swapLong = pbf.readDouble();
    if (tag === 8) obj.swapShort = pbf.readDouble();
    if (tag === 9) obj.maxVolume = pbf.readVarint64();
    if (tag === 10) obj.minVolume = pbf.readVarint64();
    if (tag === 11) obj.stepVolume = pbf.readVarint64();
    if (tag === 12) obj.maxExposure = pbf.readVarint64();
    if (tag === 13)
      obj.schedule.push(
        ProtoOAIntervalUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
    if (tag === 14) obj.commission = pbf.readVarint64();
    if (tag === 15) obj.commissionType = pbf.readVarint();
    if (tag === 16) obj.slDistance = pbf.readVarint();
    if (tag === 17) obj.tpDistance = pbf.readVarint();
    if (tag === 18) obj.gslDistance = pbf.readVarint();
    if (tag === 19) obj.gslCharge = pbf.readVarint64();
    if (tag === 20) obj.distanceSetIn = pbf.readVarint();
    if (tag === 21) obj.minCommission = pbf.readVarint64();
    if (tag === 22) obj.minCommissionType = pbf.readVarint();
    if (tag === 23) obj.minCommissionAsset = pbf.readString();
    if (tag === 24) obj.rolloverCommission = pbf.readVarint64();
    if (tag === 25) obj.skipRolloverDays = pbf.readVarint();
    if (tag === 26) obj.scheduleTimeZone = pbf.readString();
    if (tag === 27) obj.tradingMode = pbf.readVarint();
    if (tag === 28) obj.rolloverCommission3Days = pbf.readVarint();
    if (tag === 29) obj.swapCalculationType = pbf.readVarint();
    if (tag === 30) obj.lotSize = pbf.readVarint64();
    if (tag === 31) obj.preciseTradingCommissionRate = pbf.readVarint64();
    if (tag === 32) obj.preciseMinCommission = pbf.readVarint64();
    if (tag === 33)
      obj.holiday.push(
        ProtoOAHolidayUtils.read(pbf, pbf.readVarint() + pbf.pos)
      );
  }

  static write(obj: ProtoOASymbol, pbf: PBF = new PBF()) {
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(1, obj.symbolId);
    if (obj.digits !== undefined && obj.digits !== null)
      pbf.writeVarintField(2, obj.digits);
    if (obj.pipPosition !== undefined && obj.pipPosition !== null)
      pbf.writeVarintField(3, obj.pipPosition);
    if (obj.enableShortSelling !== undefined && obj.enableShortSelling !== null)
      pbf.writeBooleanField(4, obj.enableShortSelling);
    if (obj.guaranteedStopLoss !== undefined && obj.guaranteedStopLoss !== null)
      pbf.writeBooleanField(5, obj.guaranteedStopLoss);
    if (obj.swapRollover3Days !== undefined && obj.swapRollover3Days !== null)
      pbf.writeVarintField(6, obj.swapRollover3Days);
    if (obj.swapLong !== undefined && obj.swapLong !== null)
      pbf.writeDoubleField(7, obj.swapLong);
    if (obj.swapShort !== undefined && obj.swapShort !== null)
      pbf.writeDoubleField(8, obj.swapShort);
    if (obj.maxVolume !== undefined && obj.maxVolume !== null)
      pbf.writeVarintField(9, obj.maxVolume);
    if (obj.minVolume !== undefined && obj.minVolume !== null)
      pbf.writeVarintField(10, obj.minVolume);
    if (obj.stepVolume !== undefined && obj.stepVolume !== null)
      pbf.writeVarintField(11, obj.stepVolume);
    if (obj.maxExposure !== undefined && obj.maxExposure !== null)
      pbf.writeVarintField(12, obj.maxExposure);
    if (obj.schedule !== undefined && obj.schedule !== null)
      obj.schedule.forEach((schedule) =>
        pbf.writeMessage(13, ProtoOAIntervalUtils.write, schedule)
      );
    if (obj.commission !== undefined && obj.commission !== null)
      pbf.writeVarintField(14, obj.commission);
    if (obj.commissionType !== undefined && obj.commissionType !== null)
      pbf.writeVarintField(15, obj.commissionType);
    if (obj.slDistance !== undefined && obj.slDistance !== null)
      pbf.writeVarintField(16, obj.slDistance);
    if (obj.tpDistance !== undefined && obj.tpDistance !== null)
      pbf.writeVarintField(17, obj.tpDistance);
    if (obj.gslDistance !== undefined && obj.gslDistance !== null)
      pbf.writeVarintField(18, obj.gslDistance);
    if (obj.gslCharge !== undefined && obj.gslCharge !== null)
      pbf.writeVarintField(19, obj.gslCharge);
    if (obj.distanceSetIn !== undefined && obj.distanceSetIn !== null)
      pbf.writeVarintField(20, obj.distanceSetIn);
    if (obj.minCommission !== undefined && obj.minCommission !== null)
      pbf.writeVarintField(21, obj.minCommission);
    if (obj.minCommissionType !== undefined && obj.minCommissionType !== null)
      pbf.writeVarintField(22, obj.minCommissionType);
    if (obj.minCommissionAsset !== undefined && obj.minCommissionAsset !== null)
      pbf.writeStringField(23, obj.minCommissionAsset);
    if (obj.rolloverCommission !== undefined && obj.rolloverCommission !== null)
      pbf.writeVarintField(24, obj.rolloverCommission);
    if (obj.skipRolloverDays !== undefined && obj.skipRolloverDays !== null)
      pbf.writeVarintField(25, obj.skipRolloverDays);
    if (obj.scheduleTimeZone !== undefined && obj.scheduleTimeZone !== null)
      pbf.writeStringField(26, obj.scheduleTimeZone);
    if (obj.tradingMode !== undefined && obj.tradingMode !== null)
      pbf.writeVarintField(27, obj.tradingMode);
    if (
      obj.rolloverCommission3Days !== undefined &&
      obj.rolloverCommission3Days !== null
    )
      pbf.writeVarintField(28, obj.rolloverCommission3Days);
    if (
      obj.swapCalculationType !== undefined &&
      obj.swapCalculationType !== null
    )
      pbf.writeVarintField(29, obj.swapCalculationType);
    if (obj.lotSize !== undefined && obj.lotSize !== null)
      pbf.writeVarintField(30, obj.lotSize);
    if (
      obj.preciseTradingCommissionRate !== undefined &&
      obj.preciseTradingCommissionRate !== null
    )
      pbf.writeVarintField(31, obj.preciseTradingCommissionRate);
    if (
      obj.preciseMinCommission !== undefined &&
      obj.preciseMinCommission !== null
    )
      pbf.writeVarintField(32, obj.preciseMinCommission);
    if (obj.holiday !== undefined && obj.holiday !== null)
      obj.holiday.forEach((holiday) =>
        pbf.writeMessage(33, ProtoOAHolidayUtils.write, holiday)
      );
  }
}

// ProtoOALightSymbol ==========================================

export interface ProtoOALightSymbol {
  symbolId: number;
  symbolName?: string;
  enabled?: boolean;
  baseAssetId?: number;
  quoteAssetId?: number;
  symbolCategoryId?: number;
  description?: string;
}

export class ProtoOALightSymbolUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOALightSymbolUtils._readField,
      {
        symbolId: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOALightSymbol, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.symbolId = pbf.readVarint64();
    if (tag === 2) obj.symbolName = pbf.readString();
    if (tag === 3) obj.enabled = pbf.readBoolean();
    if (tag === 4) obj.baseAssetId = pbf.readVarint64();
    if (tag === 5) obj.quoteAssetId = pbf.readVarint64();
    if (tag === 6) obj.symbolCategoryId = pbf.readVarint64();
    if (tag === 7) obj.description = pbf.readString();
  }

  static write(obj: ProtoOALightSymbol, pbf: PBF = new PBF()) {
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(1, obj.symbolId);
    if (obj.symbolName !== undefined && obj.symbolName !== null)
      pbf.writeStringField(2, obj.symbolName);
    if (obj.enabled !== undefined && obj.enabled !== null)
      pbf.writeBooleanField(3, obj.enabled);
    if (obj.baseAssetId !== undefined && obj.baseAssetId !== null)
      pbf.writeVarintField(4, obj.baseAssetId);
    if (obj.quoteAssetId !== undefined && obj.quoteAssetId !== null)
      pbf.writeVarintField(5, obj.quoteAssetId);
    if (obj.symbolCategoryId !== undefined && obj.symbolCategoryId !== null)
      pbf.writeVarintField(6, obj.symbolCategoryId);
    if (obj.description !== undefined && obj.description !== null)
      pbf.writeStringField(7, obj.description);
  }
}

// ProtoOAArchivedSymbol =======================================

export interface ProtoOAArchivedSymbol {
  symbolId: number;
  name: string;
  utcLastUpdateTimestamp: number;
  description?: string;
}

export class ProtoOAArchivedSymbolUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAArchivedSymbolUtils._readField,
      {
        symbolId: 0,
        name: "",
        utcLastUpdateTimestamp: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAArchivedSymbol,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.symbolId = pbf.readVarint64();
    if (tag === 2) obj.name = pbf.readString();
    if (tag === 3) obj.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 4) obj.description = pbf.readString();
  }

  static write(obj: ProtoOAArchivedSymbol, pbf: PBF = new PBF()) {
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(1, obj.symbolId);
    if (obj.name !== undefined && obj.name !== null)
      pbf.writeStringField(2, obj.name);
    if (
      obj.utcLastUpdateTimestamp !== undefined &&
      obj.utcLastUpdateTimestamp !== null
    )
      pbf.writeVarintField(3, obj.utcLastUpdateTimestamp);
    if (obj.description !== undefined && obj.description !== null)
      pbf.writeStringField(4, obj.description);
  }
}

// ProtoOASymbolCategory =======================================

export interface ProtoOASymbolCategory {
  id: number;
  assetClassId: number;
  name: string;
}

export class ProtoOASymbolCategoryUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOASymbolCategoryUtils._readField,
      {
        id: 0,
        assetClassId: 0,
        name: "",
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOASymbolCategory,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.id = pbf.readVarint64();
    if (tag === 2) obj.assetClassId = pbf.readVarint64();
    if (tag === 3) obj.name = pbf.readString();
  }

  static write(obj: ProtoOASymbolCategory, pbf: PBF = new PBF()) {
    if (obj.id !== undefined && obj.id !== null)
      pbf.writeVarintField(1, obj.id);
    if (obj.assetClassId !== undefined && obj.assetClassId !== null)
      pbf.writeVarintField(2, obj.assetClassId);
    if (obj.name !== undefined && obj.name !== null)
      pbf.writeStringField(3, obj.name);
  }
}

// ProtoOAInterval =============================================

export interface ProtoOAInterval {
  startSecond: number;
  endSecond: number;
}

export class ProtoOAIntervalUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAIntervalUtils._readField,
      {
        startSecond: 0,
        endSecond: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAInterval, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 3) obj.startSecond = pbf.readVarint();
    if (tag === 4) obj.endSecond = pbf.readVarint();
  }

  static write(obj: ProtoOAInterval, pbf: PBF = new PBF()) {
    if (obj.startSecond !== undefined && obj.startSecond !== null)
      pbf.writeVarintField(3, obj.startSecond);
    if (obj.endSecond !== undefined && obj.endSecond !== null)
      pbf.writeVarintField(4, obj.endSecond);
  }
}

// ProtoOATrader ===============================================

export interface ProtoOATrader {
  ctidTraderAccountId: number;
  balance: number;
  balanceVersion?: number;
  managerBonus?: number;
  ibBonus?: number;
  nonWithdrawableBonus?: number;
  accessRights?: ProtoOAAccessRights;
  depositAssetId: number;
  swapFree?: boolean;
  leverageInCents?: number;
  totalMarginCalculationType?: ProtoOATotalMarginCalculationType;
  maxLeverage?: number;
  frenchRisk?: boolean;
  traderLogin?: number;
  accountType?: ProtoOAAccountType;
  brokerName?: string;
  registrationTimestamp?: number;
  isLimitedRisk?: boolean;
  limitedRiskMarginCalculationStrategy?: ProtoOALimitedRiskMarginCalculationStrategy;
  moneyDigits?: number;
}

export class ProtoOATraderUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATraderUtils._readField,
      {
        ctidTraderAccountId: 0,
        balance: 0,
        depositAssetId: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOATrader, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 2) obj.balance = pbf.readVarint64();
    if (tag === 3) obj.balanceVersion = pbf.readVarint64();
    if (tag === 4) obj.managerBonus = pbf.readVarint64();
    if (tag === 5) obj.ibBonus = pbf.readVarint64();
    if (tag === 6) obj.nonWithdrawableBonus = pbf.readVarint64();
    if (tag === 7) obj.accessRights = pbf.readVarint();
    if (tag === 8) obj.depositAssetId = pbf.readVarint64();
    if (tag === 9) obj.swapFree = pbf.readBoolean();
    if (tag === 10) obj.leverageInCents = pbf.readVarint();
    if (tag === 11) obj.totalMarginCalculationType = pbf.readVarint();
    if (tag === 12) obj.maxLeverage = pbf.readVarint();
    if (tag === 13) obj.frenchRisk = pbf.readBoolean();
    if (tag === 14) obj.traderLogin = pbf.readVarint64();
    if (tag === 15) obj.accountType = pbf.readVarint();
    if (tag === 16) obj.brokerName = pbf.readString();
    if (tag === 17) obj.registrationTimestamp = pbf.readVarint64();
    if (tag === 18) obj.isLimitedRisk = pbf.readBoolean();
    if (tag === 19) obj.limitedRiskMarginCalculationStrategy = pbf.readVarint();
    if (tag === 20) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOATrader, pbf: PBF = new PBF()) {
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(1, obj.ctidTraderAccountId);
    if (obj.balance !== undefined && obj.balance !== null)
      pbf.writeVarintField(2, obj.balance);
    if (obj.balanceVersion !== undefined && obj.balanceVersion !== null)
      pbf.writeVarintField(3, obj.balanceVersion);
    if (obj.managerBonus !== undefined && obj.managerBonus !== null)
      pbf.writeVarintField(4, obj.managerBonus);
    if (obj.ibBonus !== undefined && obj.ibBonus !== null)
      pbf.writeVarintField(5, obj.ibBonus);
    if (
      obj.nonWithdrawableBonus !== undefined &&
      obj.nonWithdrawableBonus !== null
    )
      pbf.writeVarintField(6, obj.nonWithdrawableBonus);
    if (obj.accessRights !== undefined && obj.accessRights !== null)
      pbf.writeVarintField(7, obj.accessRights);
    if (obj.depositAssetId !== undefined && obj.depositAssetId !== null)
      pbf.writeVarintField(8, obj.depositAssetId);
    if (obj.swapFree !== undefined && obj.swapFree !== null)
      pbf.writeBooleanField(9, obj.swapFree);
    if (obj.leverageInCents !== undefined && obj.leverageInCents !== null)
      pbf.writeVarintField(10, obj.leverageInCents);
    if (
      obj.totalMarginCalculationType !== undefined &&
      obj.totalMarginCalculationType !== null
    )
      pbf.writeVarintField(11, obj.totalMarginCalculationType);
    if (obj.maxLeverage !== undefined && obj.maxLeverage !== null)
      pbf.writeVarintField(12, obj.maxLeverage);
    if (obj.frenchRisk !== undefined && obj.frenchRisk !== null)
      pbf.writeBooleanField(13, obj.frenchRisk);
    if (obj.traderLogin !== undefined && obj.traderLogin !== null)
      pbf.writeVarintField(14, obj.traderLogin);
    if (obj.accountType !== undefined && obj.accountType !== null)
      pbf.writeVarintField(15, obj.accountType);
    if (obj.brokerName !== undefined && obj.brokerName !== null)
      pbf.writeStringField(16, obj.brokerName);
    if (
      obj.registrationTimestamp !== undefined &&
      obj.registrationTimestamp !== null
    )
      pbf.writeVarintField(17, obj.registrationTimestamp);
    if (obj.isLimitedRisk !== undefined && obj.isLimitedRisk !== null)
      pbf.writeBooleanField(18, obj.isLimitedRisk);
    if (
      obj.limitedRiskMarginCalculationStrategy !== undefined &&
      obj.limitedRiskMarginCalculationStrategy !== null
    )
      pbf.writeVarintField(19, obj.limitedRiskMarginCalculationStrategy);
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(20, obj.moneyDigits);
  }
}

// ProtoOAPosition =============================================

export interface ProtoOAPosition {
  positionId: number;
  tradeData: ProtoOATradeData;
  positionStatus: ProtoOAPositionStatus;
  swap: number;
  price?: number;
  stopLoss?: number;
  takeProfit?: number;
  utcLastUpdateTimestamp?: number;
  commission?: number;
  marginRate?: number;
  mirroringCommission?: number;
  guaranteedStopLoss?: boolean;
  usedMargin?: number;
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod;
  moneyDigits?: number;
}

export class ProtoOAPositionUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAPositionUtils._readField,
      {
        positionId: 0,
        tradeData: { symbolId: 0, volume: 0, tradeSide: ProtoOATradeSide.BUY },
        positionStatus: ProtoOAPositionStatus.POSITION_STATUS_OPEN,
        swap: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAPosition, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.positionId = pbf.readVarint64();
    if (tag === 2)
      obj.tradeData = ProtoOATradeDataUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
    if (tag === 3) obj.positionStatus = pbf.readVarint();
    if (tag === 4) obj.swap = pbf.readVarint64();
    if (tag === 5) obj.price = pbf.readDouble();
    if (tag === 6) obj.stopLoss = pbf.readDouble();
    if (tag === 7) obj.takeProfit = pbf.readDouble();
    if (tag === 8) obj.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 9) obj.commission = pbf.readVarint64();
    if (tag === 10) obj.marginRate = pbf.readDouble();
    if (tag === 11) obj.mirroringCommission = pbf.readVarint64();
    if (tag === 12) obj.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 13) obj.usedMargin = pbf.readVarint64();
    if (tag === 14) obj.stopLossTriggerMethod = pbf.readVarint();
    if (tag === 15) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOAPosition, pbf: PBF = new PBF()) {
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(1, obj.positionId);
    if (obj.tradeData !== undefined && obj.tradeData !== null)
      pbf.writeMessage(2, ProtoOATradeDataUtils.write, obj.tradeData);
    if (obj.positionStatus !== undefined && obj.positionStatus !== null)
      pbf.writeVarintField(3, obj.positionStatus);
    if (obj.swap !== undefined && obj.swap !== null)
      pbf.writeVarintField(4, obj.swap);
    if (obj.price !== undefined && obj.price !== null)
      pbf.writeDoubleField(5, obj.price);
    if (obj.stopLoss !== undefined && obj.stopLoss !== null)
      pbf.writeDoubleField(6, obj.stopLoss);
    if (obj.takeProfit !== undefined && obj.takeProfit !== null)
      pbf.writeDoubleField(7, obj.takeProfit);
    if (
      obj.utcLastUpdateTimestamp !== undefined &&
      obj.utcLastUpdateTimestamp !== null
    )
      pbf.writeVarintField(8, obj.utcLastUpdateTimestamp);
    if (obj.commission !== undefined && obj.commission !== null)
      pbf.writeVarintField(9, obj.commission);
    if (obj.marginRate !== undefined && obj.marginRate !== null)
      pbf.writeDoubleField(10, obj.marginRate);
    if (
      obj.mirroringCommission !== undefined &&
      obj.mirroringCommission !== null
    )
      pbf.writeVarintField(11, obj.mirroringCommission);
    if (obj.guaranteedStopLoss !== undefined && obj.guaranteedStopLoss !== null)
      pbf.writeBooleanField(12, obj.guaranteedStopLoss);
    if (obj.usedMargin !== undefined && obj.usedMargin !== null)
      pbf.writeVarintField(13, obj.usedMargin);
    if (
      obj.stopLossTriggerMethod !== undefined &&
      obj.stopLossTriggerMethod !== null
    )
      pbf.writeVarintField(14, obj.stopLossTriggerMethod);
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(15, obj.moneyDigits);
  }
}

// ProtoOATradeData ============================================

export interface ProtoOATradeData {
  symbolId: number;
  volume: number;
  tradeSide: ProtoOATradeSide;
  openTimestamp?: number;
  label?: string;
  guaranteedStopLoss?: boolean;
  comment?: string;
}

export class ProtoOATradeDataUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATradeDataUtils._readField,
      {
        symbolId: 0,
        volume: 0,
        tradeSide: ProtoOATradeSide.BUY,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOATradeData, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.symbolId = pbf.readVarint64();
    if (tag === 2) obj.volume = pbf.readVarint64();
    if (tag === 3) obj.tradeSide = pbf.readVarint();
    if (tag === 4) obj.openTimestamp = pbf.readVarint64();
    if (tag === 5) obj.label = pbf.readString();
    if (tag === 6) obj.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 7) obj.comment = pbf.readString();
  }

  static write(obj: ProtoOATradeData, pbf: PBF = new PBF()) {
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(1, obj.symbolId);
    if (obj.volume !== undefined && obj.volume !== null)
      pbf.writeVarintField(2, obj.volume);
    if (obj.tradeSide !== undefined && obj.tradeSide !== null)
      pbf.writeVarintField(3, obj.tradeSide);
    if (obj.openTimestamp !== undefined && obj.openTimestamp !== null)
      pbf.writeVarintField(4, obj.openTimestamp);
    if (obj.label !== undefined && obj.label !== null)
      pbf.writeStringField(5, obj.label);
    if (obj.guaranteedStopLoss !== undefined && obj.guaranteedStopLoss !== null)
      pbf.writeBooleanField(6, obj.guaranteedStopLoss);
    if (obj.comment !== undefined && obj.comment !== null)
      pbf.writeStringField(7, obj.comment);
  }
}

// ProtoOAOrder ================================================

export interface ProtoOAOrder {
  orderId: number;
  tradeData: ProtoOATradeData;
  orderType: ProtoOAOrderType;
  orderStatus: ProtoOAOrderStatus;
  expirationTimestamp?: number;
  executionPrice?: number;
  executedVolume?: number;
  utcLastUpdateTimestamp?: number;
  baseSlippagePrice?: number;
  slippageInPoints?: number;
  closingOrder?: boolean;
  limitPrice?: number;
  stopPrice?: number;
  stopLoss?: number;
  takeProfit?: number;
  clientOrderId?: string;
  timeInForce?: ProtoOATimeInForce;
  positionId?: number;
  relativeStopLoss?: number;
  relativeTakeProfit?: number;
  isStopOut?: boolean;
  trailingStopLoss?: boolean;
  stopTriggerMethod?: ProtoOAOrderTriggerMethod;
}

export class ProtoOAOrderUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAOrderUtils._readField,
      {
        orderId: 0,
        tradeData: { symbolId: 0, volume: 0, tradeSide: ProtoOATradeSide.BUY },
        orderType: ProtoOAOrderType.MARKET,
        orderStatus: ProtoOAOrderStatus.ORDER_STATUS_ACCEPTED,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAOrder, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.orderId = pbf.readVarint64();
    if (tag === 2)
      obj.tradeData = ProtoOATradeDataUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
    if (tag === 3) obj.orderType = pbf.readVarint();
    if (tag === 4) obj.orderStatus = pbf.readVarint();
    if (tag === 6) obj.expirationTimestamp = pbf.readVarint64();
    if (tag === 7) obj.executionPrice = pbf.readDouble();
    if (tag === 8) obj.executedVolume = pbf.readVarint64();
    if (tag === 9) obj.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 10) obj.baseSlippagePrice = pbf.readDouble();
    if (tag === 11) obj.slippageInPoints = pbf.readVarint64();
    if (tag === 12) obj.closingOrder = pbf.readBoolean();
    if (tag === 13) obj.limitPrice = pbf.readDouble();
    if (tag === 14) obj.stopPrice = pbf.readDouble();
    if (tag === 15) obj.stopLoss = pbf.readDouble();
    if (tag === 16) obj.takeProfit = pbf.readDouble();
    if (tag === 17) obj.clientOrderId = pbf.readString();
    if (tag === 18) obj.timeInForce = pbf.readVarint();
    if (tag === 19) obj.positionId = pbf.readVarint64();
    if (tag === 20) obj.relativeStopLoss = pbf.readVarint64();
    if (tag === 21) obj.relativeTakeProfit = pbf.readVarint64();
    if (tag === 22) obj.isStopOut = pbf.readBoolean();
    if (tag === 23) obj.trailingStopLoss = pbf.readBoolean();
    if (tag === 24) obj.stopTriggerMethod = pbf.readVarint();
  }

  static write(obj: ProtoOAOrder, pbf: PBF = new PBF()) {
    if (obj.orderId !== undefined && obj.orderId !== null)
      pbf.writeVarintField(1, obj.orderId);
    if (obj.tradeData !== undefined && obj.tradeData !== null)
      pbf.writeMessage(2, ProtoOATradeDataUtils.write, obj.tradeData);
    if (obj.orderType !== undefined && obj.orderType !== null)
      pbf.writeVarintField(3, obj.orderType);
    if (obj.orderStatus !== undefined && obj.orderStatus !== null)
      pbf.writeVarintField(4, obj.orderStatus);
    if (
      obj.expirationTimestamp !== undefined &&
      obj.expirationTimestamp !== null
    )
      pbf.writeVarintField(6, obj.expirationTimestamp);
    if (obj.executionPrice !== undefined && obj.executionPrice !== null)
      pbf.writeDoubleField(7, obj.executionPrice);
    if (obj.executedVolume !== undefined && obj.executedVolume !== null)
      pbf.writeVarintField(8, obj.executedVolume);
    if (
      obj.utcLastUpdateTimestamp !== undefined &&
      obj.utcLastUpdateTimestamp !== null
    )
      pbf.writeVarintField(9, obj.utcLastUpdateTimestamp);
    if (obj.baseSlippagePrice !== undefined && obj.baseSlippagePrice !== null)
      pbf.writeDoubleField(10, obj.baseSlippagePrice);
    if (obj.slippageInPoints !== undefined && obj.slippageInPoints !== null)
      pbf.writeVarintField(11, obj.slippageInPoints);
    if (obj.closingOrder !== undefined && obj.closingOrder !== null)
      pbf.writeBooleanField(12, obj.closingOrder);
    if (obj.limitPrice !== undefined && obj.limitPrice !== null)
      pbf.writeDoubleField(13, obj.limitPrice);
    if (obj.stopPrice !== undefined && obj.stopPrice !== null)
      pbf.writeDoubleField(14, obj.stopPrice);
    if (obj.stopLoss !== undefined && obj.stopLoss !== null)
      pbf.writeDoubleField(15, obj.stopLoss);
    if (obj.takeProfit !== undefined && obj.takeProfit !== null)
      pbf.writeDoubleField(16, obj.takeProfit);
    if (obj.clientOrderId !== undefined && obj.clientOrderId !== null)
      pbf.writeStringField(17, obj.clientOrderId);
    if (obj.timeInForce !== undefined && obj.timeInForce !== null)
      pbf.writeVarintField(18, obj.timeInForce);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(19, obj.positionId);
    if (obj.relativeStopLoss !== undefined && obj.relativeStopLoss !== null)
      pbf.writeVarintField(20, obj.relativeStopLoss);
    if (obj.relativeTakeProfit !== undefined && obj.relativeTakeProfit !== null)
      pbf.writeVarintField(21, obj.relativeTakeProfit);
    if (obj.isStopOut !== undefined && obj.isStopOut !== null)
      pbf.writeBooleanField(22, obj.isStopOut);
    if (obj.trailingStopLoss !== undefined && obj.trailingStopLoss !== null)
      pbf.writeBooleanField(23, obj.trailingStopLoss);
    if (obj.stopTriggerMethod !== undefined && obj.stopTriggerMethod !== null)
      pbf.writeVarintField(24, obj.stopTriggerMethod);
  }
}

// ProtoOABonusDepositWithdraw =================================

export interface ProtoOABonusDepositWithdraw {
  operationType: ProtoOAChangeBonusType;
  bonusHistoryId: number;
  managerBonus: number;
  managerDelta: number;
  ibBonus: number;
  ibDelta: number;
  changeBonusTimestamp: number;
  externalNote?: string;
  introducingBrokerId?: number;
  moneyDigits?: number;
}

export class ProtoOABonusDepositWithdrawUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOABonusDepositWithdrawUtils._readField,
      {
        operationType: ProtoOAChangeBonusType.BONUS_DEPOSIT,
        bonusHistoryId: 0,
        managerBonus: 0,
        managerDelta: 0,
        ibBonus: 0,
        ibDelta: 0,
        changeBonusTimestamp: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOABonusDepositWithdraw,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.operationType = pbf.readVarint();
    if (tag === 2) obj.bonusHistoryId = pbf.readVarint64();
    if (tag === 3) obj.managerBonus = pbf.readVarint64();
    if (tag === 4) obj.managerDelta = pbf.readVarint64();
    if (tag === 5) obj.ibBonus = pbf.readVarint64();
    if (tag === 6) obj.ibDelta = pbf.readVarint64();
    if (tag === 7) obj.changeBonusTimestamp = pbf.readVarint64();
    if (tag === 8) obj.externalNote = pbf.readString();
    if (tag === 9) obj.introducingBrokerId = pbf.readVarint64();
    if (tag === 10) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOABonusDepositWithdraw, pbf: PBF = new PBF()) {
    if (obj.operationType !== undefined && obj.operationType !== null)
      pbf.writeVarintField(1, obj.operationType);
    if (obj.bonusHistoryId !== undefined && obj.bonusHistoryId !== null)
      pbf.writeVarintField(2, obj.bonusHistoryId);
    if (obj.managerBonus !== undefined && obj.managerBonus !== null)
      pbf.writeVarintField(3, obj.managerBonus);
    if (obj.managerDelta !== undefined && obj.managerDelta !== null)
      pbf.writeVarintField(4, obj.managerDelta);
    if (obj.ibBonus !== undefined && obj.ibBonus !== null)
      pbf.writeVarintField(5, obj.ibBonus);
    if (obj.ibDelta !== undefined && obj.ibDelta !== null)
      pbf.writeVarintField(6, obj.ibDelta);
    if (
      obj.changeBonusTimestamp !== undefined &&
      obj.changeBonusTimestamp !== null
    )
      pbf.writeVarintField(7, obj.changeBonusTimestamp);
    if (obj.externalNote !== undefined && obj.externalNote !== null)
      pbf.writeStringField(8, obj.externalNote);
    if (
      obj.introducingBrokerId !== undefined &&
      obj.introducingBrokerId !== null
    )
      pbf.writeVarintField(9, obj.introducingBrokerId);
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(10, obj.moneyDigits);
  }
}

// ProtoOADepositWithdraw ======================================

export interface ProtoOADepositWithdraw {
  operationType: ProtoOAChangeBalanceType;
  balanceHistoryId: number;
  balance: number;
  delta: number;
  changeBalanceTimestamp: number;
  externalNote?: string;
  balanceVersion?: number;
  equity?: number;
  moneyDigits?: number;
}

export class ProtoOADepositWithdrawUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOADepositWithdrawUtils._readField,
      {
        operationType: ProtoOAChangeBalanceType.BALANCE_DEPOSIT,
        balanceHistoryId: 0,
        balance: 0,
        delta: 0,
        changeBalanceTimestamp: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOADepositWithdraw,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.operationType = pbf.readVarint();
    if (tag === 2) obj.balanceHistoryId = pbf.readVarint64();
    if (tag === 3) obj.balance = pbf.readVarint64();
    if (tag === 4) obj.delta = pbf.readVarint64();
    if (tag === 5) obj.changeBalanceTimestamp = pbf.readVarint64();
    if (tag === 6) obj.externalNote = pbf.readString();
    if (tag === 7) obj.balanceVersion = pbf.readVarint64();
    if (tag === 8) obj.equity = pbf.readVarint64();
    if (tag === 9) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOADepositWithdraw, pbf: PBF = new PBF()) {
    if (obj.operationType !== undefined && obj.operationType !== null)
      pbf.writeVarintField(1, obj.operationType);
    if (obj.balanceHistoryId !== undefined && obj.balanceHistoryId !== null)
      pbf.writeVarintField(2, obj.balanceHistoryId);
    if (obj.balance !== undefined && obj.balance !== null)
      pbf.writeVarintField(3, obj.balance);
    if (obj.delta !== undefined && obj.delta !== null)
      pbf.writeVarintField(4, obj.delta);
    if (
      obj.changeBalanceTimestamp !== undefined &&
      obj.changeBalanceTimestamp !== null
    )
      pbf.writeVarintField(5, obj.changeBalanceTimestamp);
    if (obj.externalNote !== undefined && obj.externalNote !== null)
      pbf.writeStringField(6, obj.externalNote);
    if (obj.balanceVersion !== undefined && obj.balanceVersion !== null)
      pbf.writeVarintField(7, obj.balanceVersion);
    if (obj.equity !== undefined && obj.equity !== null)
      pbf.writeVarintField(8, obj.equity);
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(9, obj.moneyDigits);
  }
}

// ProtoOADeal =================================================

export interface ProtoOADeal {
  dealId: number;
  orderId: number;
  positionId: number;
  volume: number;
  filledVolume: number;
  symbolId: number;
  createTimestamp: number;
  executionTimestamp: number;
  utcLastUpdateTimestamp?: number;
  executionPrice?: number;
  tradeSide: ProtoOATradeSide;
  dealStatus: ProtoOADealStatus;
  marginRate?: number;
  commission?: number;
  baseToUsdConversionRate?: number;
  closePositionDetail?: ProtoOAClosePositionDetail;
  moneyDigits?: number;
}

export class ProtoOADealUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOADealUtils._readField,
      {
        dealId: 0,
        orderId: 0,
        positionId: 0,
        volume: 0,
        filledVolume: 0,
        symbolId: 0,
        createTimestamp: 0,
        executionTimestamp: 0,
        tradeSide: ProtoOATradeSide.BUY,
        dealStatus: ProtoOADealStatus.FILLED,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOADeal, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.dealId = pbf.readVarint64();
    if (tag === 2) obj.orderId = pbf.readVarint64();
    if (tag === 3) obj.positionId = pbf.readVarint64();
    if (tag === 4) obj.volume = pbf.readVarint64();
    if (tag === 5) obj.filledVolume = pbf.readVarint64();
    if (tag === 6) obj.symbolId = pbf.readVarint64();
    if (tag === 7) obj.createTimestamp = pbf.readVarint64();
    if (tag === 8) obj.executionTimestamp = pbf.readVarint64();
    if (tag === 9) obj.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 10) obj.executionPrice = pbf.readDouble();
    if (tag === 11) obj.tradeSide = pbf.readVarint();
    if (tag === 12) obj.dealStatus = pbf.readVarint();
    if (tag === 13) obj.marginRate = pbf.readDouble();
    if (tag === 14) obj.commission = pbf.readVarint64();
    if (tag === 15) obj.baseToUsdConversionRate = pbf.readDouble();
    if (tag === 16)
      obj.closePositionDetail = ProtoOAClosePositionDetailUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos
      );
    if (tag === 17) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOADeal, pbf: PBF = new PBF()) {
    if (obj.dealId !== undefined && obj.dealId !== null)
      pbf.writeVarintField(1, obj.dealId);
    if (obj.orderId !== undefined && obj.orderId !== null)
      pbf.writeVarintField(2, obj.orderId);
    if (obj.positionId !== undefined && obj.positionId !== null)
      pbf.writeVarintField(3, obj.positionId);
    if (obj.volume !== undefined && obj.volume !== null)
      pbf.writeVarintField(4, obj.volume);
    if (obj.filledVolume !== undefined && obj.filledVolume !== null)
      pbf.writeVarintField(5, obj.filledVolume);
    if (obj.symbolId !== undefined && obj.symbolId !== null)
      pbf.writeVarintField(6, obj.symbolId);
    if (obj.createTimestamp !== undefined && obj.createTimestamp !== null)
      pbf.writeVarintField(7, obj.createTimestamp);
    if (obj.executionTimestamp !== undefined && obj.executionTimestamp !== null)
      pbf.writeVarintField(8, obj.executionTimestamp);
    if (
      obj.utcLastUpdateTimestamp !== undefined &&
      obj.utcLastUpdateTimestamp !== null
    )
      pbf.writeVarintField(9, obj.utcLastUpdateTimestamp);
    if (obj.executionPrice !== undefined && obj.executionPrice !== null)
      pbf.writeDoubleField(10, obj.executionPrice);
    if (obj.tradeSide !== undefined && obj.tradeSide !== null)
      pbf.writeVarintField(11, obj.tradeSide);
    if (obj.dealStatus !== undefined && obj.dealStatus !== null)
      pbf.writeVarintField(12, obj.dealStatus);
    if (obj.marginRate !== undefined && obj.marginRate !== null)
      pbf.writeDoubleField(13, obj.marginRate);
    if (obj.commission !== undefined && obj.commission !== null)
      pbf.writeVarintField(14, obj.commission);
    if (
      obj.baseToUsdConversionRate !== undefined &&
      obj.baseToUsdConversionRate !== null
    )
      pbf.writeDoubleField(15, obj.baseToUsdConversionRate);
    if (
      obj.closePositionDetail !== undefined &&
      obj.closePositionDetail !== null
    )
      pbf.writeMessage(
        16,
        ProtoOAClosePositionDetailUtils.write,
        obj.closePositionDetail
      );
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(17, obj.moneyDigits);
  }
}

// ProtoOAClosePositionDetail ==================================

export interface ProtoOAClosePositionDetail {
  entryPrice: number;
  grossProfit: number;
  swap: number;
  commission: number;
  balance: number;
  quoteToDepositConversionRate?: number;
  closedVolume?: number;
  balanceVersion?: number;
  moneyDigits?: number;
}

export class ProtoOAClosePositionDetailUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAClosePositionDetailUtils._readField,
      {
        entryPrice: 0,
        grossProfit: 0,
        swap: 0,
        commission: 0,
        balance: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAClosePositionDetail,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.entryPrice = pbf.readDouble();
    if (tag === 2) obj.grossProfit = pbf.readVarint64();
    if (tag === 3) obj.swap = pbf.readVarint64();
    if (tag === 4) obj.commission = pbf.readVarint64();
    if (tag === 5) obj.balance = pbf.readVarint64();
    if (tag === 6) obj.quoteToDepositConversionRate = pbf.readDouble();
    if (tag === 7) obj.closedVolume = pbf.readVarint64();
    if (tag === 8) obj.balanceVersion = pbf.readVarint64();
    if (tag === 9) obj.moneyDigits = pbf.readVarint();
  }

  static write(obj: ProtoOAClosePositionDetail, pbf: PBF = new PBF()) {
    if (obj.entryPrice !== undefined && obj.entryPrice !== null)
      pbf.writeDoubleField(1, obj.entryPrice);
    if (obj.grossProfit !== undefined && obj.grossProfit !== null)
      pbf.writeVarintField(2, obj.grossProfit);
    if (obj.swap !== undefined && obj.swap !== null)
      pbf.writeVarintField(3, obj.swap);
    if (obj.commission !== undefined && obj.commission !== null)
      pbf.writeVarintField(4, obj.commission);
    if (obj.balance !== undefined && obj.balance !== null)
      pbf.writeVarintField(5, obj.balance);
    if (
      obj.quoteToDepositConversionRate !== undefined &&
      obj.quoteToDepositConversionRate !== null
    )
      pbf.writeDoubleField(6, obj.quoteToDepositConversionRate);
    if (obj.closedVolume !== undefined && obj.closedVolume !== null)
      pbf.writeVarintField(7, obj.closedVolume);
    if (obj.balanceVersion !== undefined && obj.balanceVersion !== null)
      pbf.writeVarintField(8, obj.balanceVersion);
    if (obj.moneyDigits !== undefined && obj.moneyDigits !== null)
      pbf.writeVarintField(9, obj.moneyDigits);
  }
}

// ProtoOATrendbar =============================================

export interface ProtoOATrendbar {
  volume: number;
  period?: ProtoOATrendbarPeriod;
  low?: number;
  deltaOpen?: number;
  deltaClose?: number;
  deltaHigh?: number;
  utcTimestampInMinutes?: number;
}

export class ProtoOATrendbarUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATrendbarUtils._readField,
      {
        volume: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOATrendbar, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 3) obj.volume = pbf.readVarint64();
    if (tag === 4) obj.period = pbf.readVarint();
    if (tag === 5) obj.low = pbf.readVarint64();
    if (tag === 6) obj.deltaOpen = pbf.readVarint64();
    if (tag === 7) obj.deltaClose = pbf.readVarint64();
    if (tag === 8) obj.deltaHigh = pbf.readVarint64();
    if (tag === 9) obj.utcTimestampInMinutes = pbf.readVarint();
  }

  static write(obj: ProtoOATrendbar, pbf: PBF = new PBF()) {
    if (obj.volume !== undefined && obj.volume !== null)
      pbf.writeVarintField(3, obj.volume);
    if (obj.period !== undefined && obj.period !== null)
      pbf.writeVarintField(4, obj.period);
    if (obj.low !== undefined && obj.low !== null)
      pbf.writeVarintField(5, obj.low);
    if (obj.deltaOpen !== undefined && obj.deltaOpen !== null)
      pbf.writeVarintField(6, obj.deltaOpen);
    if (obj.deltaClose !== undefined && obj.deltaClose !== null)
      pbf.writeVarintField(7, obj.deltaClose);
    if (obj.deltaHigh !== undefined && obj.deltaHigh !== null)
      pbf.writeVarintField(8, obj.deltaHigh);
    if (
      obj.utcTimestampInMinutes !== undefined &&
      obj.utcTimestampInMinutes !== null
    )
      pbf.writeVarintField(9, obj.utcTimestampInMinutes);
  }
}

// ProtoOAExpectedMargin =======================================

export interface ProtoOAExpectedMargin {
  volume: number;
  buyMargin: number;
  sellMargin: number;
}

export class ProtoOAExpectedMarginUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAExpectedMarginUtils._readField,
      {
        volume: 0,
        buyMargin: 0,
        sellMargin: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOAExpectedMargin,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.volume = pbf.readVarint64();
    if (tag === 2) obj.buyMargin = pbf.readVarint64();
    if (tag === 3) obj.sellMargin = pbf.readVarint64();
  }

  static write(obj: ProtoOAExpectedMargin, pbf: PBF = new PBF()) {
    if (obj.volume !== undefined && obj.volume !== null)
      pbf.writeVarintField(1, obj.volume);
    if (obj.buyMargin !== undefined && obj.buyMargin !== null)
      pbf.writeVarintField(2, obj.buyMargin);
    if (obj.sellMargin !== undefined && obj.sellMargin !== null)
      pbf.writeVarintField(3, obj.sellMargin);
  }
}

// ProtoOATickData =============================================

export interface ProtoOATickData {
  timestamp: number;
  tick: number;
}

export class ProtoOATickDataUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOATickDataUtils._readField,
      {
        timestamp: 0,
        tick: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOATickData, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.timestamp = pbf.readVarint64();
    if (tag === 2) obj.tick = pbf.readVarint64();
  }

  static write(obj: ProtoOATickData, pbf: PBF = new PBF()) {
    if (obj.timestamp !== undefined && obj.timestamp !== null)
      pbf.writeVarintField(1, obj.timestamp);
    if (obj.tick !== undefined && obj.tick !== null)
      pbf.writeVarintField(2, obj.tick);
  }
}

// ProtoOACtidProfile ==========================================

export interface ProtoOACtidProfile {
  userId: number;
}

export class ProtoOACtidProfileUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOACtidProfileUtils._readField,
      {
        userId: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOACtidProfile, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.userId = pbf.readVarint64();
  }

  static write(obj: ProtoOACtidProfile, pbf: PBF = new PBF()) {
    if (obj.userId !== undefined && obj.userId !== null)
      pbf.writeVarintField(1, obj.userId);
  }
}

// ProtoOACtidTraderAccount ====================================

export interface ProtoOACtidTraderAccount {
  ctidTraderAccountId: number;
  isLive?: boolean;
  traderLogin?: number;
  lastClosingDealTimestamp?: number;
  lastBalanceUpdateTimestamp?: number;
}

export class ProtoOACtidTraderAccountUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOACtidTraderAccountUtils._readField,
      {
        ctidTraderAccountId: 0,
      },
      end
    );
  }

  private static _readField(
    tag: number,
    obj?: ProtoOACtidTraderAccount,
    pbf?: PBF
  ) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 2) obj.isLive = pbf.readBoolean();
    if (tag === 3) obj.traderLogin = pbf.readVarint64();
    if (tag === 4) obj.lastClosingDealTimestamp = pbf.readVarint64();
    if (tag === 5) obj.lastBalanceUpdateTimestamp = pbf.readVarint64();
  }

  static write(obj: ProtoOACtidTraderAccount, pbf: PBF = new PBF()) {
    if (
      obj.ctidTraderAccountId !== undefined &&
      obj.ctidTraderAccountId !== null
    )
      pbf.writeVarintField(1, obj.ctidTraderAccountId);
    if (obj.isLive !== undefined && obj.isLive !== null)
      pbf.writeBooleanField(2, obj.isLive);
    if (obj.traderLogin !== undefined && obj.traderLogin !== null)
      pbf.writeVarintField(3, obj.traderLogin);
    if (
      obj.lastClosingDealTimestamp !== undefined &&
      obj.lastClosingDealTimestamp !== null
    )
      pbf.writeVarintField(4, obj.lastClosingDealTimestamp);
    if (
      obj.lastBalanceUpdateTimestamp !== undefined &&
      obj.lastBalanceUpdateTimestamp !== null
    )
      pbf.writeVarintField(5, obj.lastBalanceUpdateTimestamp);
  }
}

// ProtoOAAssetClass ===========================================

export interface ProtoOAAssetClass {
  id?: number;
  name?: string;
}

export class ProtoOAAssetClassUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(ProtoOAAssetClassUtils._readField, {}, end);
  }

  private static _readField(tag: number, obj?: ProtoOAAssetClass, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.id = pbf.readVarint64();
    if (tag === 2) obj.name = pbf.readString();
  }

  static write(obj: ProtoOAAssetClass, pbf: PBF = new PBF()) {
    if (obj.id !== undefined && obj.id !== null)
      pbf.writeVarintField(1, obj.id);
    if (obj.name !== undefined && obj.name !== null)
      pbf.writeStringField(2, obj.name);
  }
}

// ProtoOADepthQuote ===========================================

export interface ProtoOADepthQuote {
  id: number;
  size: number;
  bid?: number;
  ask?: number;
}

export class ProtoOADepthQuoteUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOADepthQuoteUtils._readField,
      {
        id: 0,
        size: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOADepthQuote, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.id = pbf.readVarint64();
    if (tag === 3) obj.size = pbf.readVarint64();
    if (tag === 4) obj.bid = pbf.readVarint64();
    if (tag === 5) obj.ask = pbf.readVarint64();
  }

  static write(obj: ProtoOADepthQuote, pbf: PBF = new PBF()) {
    if (obj.id !== undefined && obj.id !== null)
      pbf.writeVarintField(1, obj.id);
    if (obj.size !== undefined && obj.size !== null)
      pbf.writeVarintField(3, obj.size);
    if (obj.bid !== undefined && obj.bid !== null)
      pbf.writeVarintField(4, obj.bid);
    if (obj.ask !== undefined && obj.ask !== null)
      pbf.writeVarintField(5, obj.ask);
  }
}

// ProtoOAMarginCall ===========================================

export interface ProtoOAMarginCall {
  marginCallType: ProtoOANotificationType;
  marginLevelThreshold: number;
  utcLastUpdateTimestamp?: number;
}

export class ProtoOAMarginCallUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAMarginCallUtils._readField,
      {
        marginCallType: ProtoOANotificationType.MARGIN_LEVEL_THRESHOLD_1,
        marginLevelThreshold: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAMarginCall, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.marginCallType = pbf.readVarint();
    if (tag === 2) obj.marginLevelThreshold = pbf.readDouble();
    if (tag === 3) obj.utcLastUpdateTimestamp = pbf.readVarint64();
  }

  static write(obj: ProtoOAMarginCall, pbf: PBF = new PBF()) {
    if (obj.marginCallType !== undefined && obj.marginCallType !== null)
      pbf.writeVarintField(1, obj.marginCallType);
    if (
      obj.marginLevelThreshold !== undefined &&
      obj.marginLevelThreshold !== null
    )
      pbf.writeDoubleField(2, obj.marginLevelThreshold);
    if (
      obj.utcLastUpdateTimestamp !== undefined &&
      obj.utcLastUpdateTimestamp !== null
    )
      pbf.writeVarintField(3, obj.utcLastUpdateTimestamp);
  }
}

// ProtoOAHoliday ==============================================

export interface ProtoOAHoliday {
  holidayId: number;
  name: string;
  description?: string;
  scheduleTimeZone: string;
  holidayDate: number;
  isRecurring: boolean;
  startSecond?: number;
  endSecond?: number;
}

export class ProtoOAHolidayUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoOAHolidayUtils._readField,
      {
        holidayId: 0,
        name: "",
        scheduleTimeZone: "",
        holidayDate: 0,
        isRecurring: false,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoOAHoliday, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.holidayId = pbf.readVarint64();
    if (tag === 2) obj.name = pbf.readString();
    if (tag === 3) obj.description = pbf.readString();
    if (tag === 4) obj.scheduleTimeZone = pbf.readString();
    if (tag === 5) obj.holidayDate = pbf.readVarint64();
    if (tag === 6) obj.isRecurring = pbf.readBoolean();
    if (tag === 7) obj.startSecond = pbf.readVarint();
    if (tag === 8) obj.endSecond = pbf.readVarint();
  }

  static write(obj: ProtoOAHoliday, pbf: PBF = new PBF()) {
    if (obj.holidayId !== undefined && obj.holidayId !== null)
      pbf.writeVarintField(1, obj.holidayId);
    if (obj.name !== undefined && obj.name !== null)
      pbf.writeStringField(2, obj.name);
    if (obj.description !== undefined && obj.description !== null)
      pbf.writeStringField(3, obj.description);
    if (obj.scheduleTimeZone !== undefined && obj.scheduleTimeZone !== null)
      pbf.writeStringField(4, obj.scheduleTimeZone);
    if (obj.holidayDate !== undefined && obj.holidayDate !== null)
      pbf.writeVarintField(5, obj.holidayDate);
    if (obj.isRecurring !== undefined && obj.isRecurring !== null)
      pbf.writeBooleanField(6, obj.isRecurring);
    if (obj.startSecond !== undefined && obj.startSecond !== null)
      pbf.writeVarintField(7, obj.startSecond);
    if (obj.endSecond !== undefined && obj.endSecond !== null)
      pbf.writeVarintField(8, obj.endSecond);
  }
}
