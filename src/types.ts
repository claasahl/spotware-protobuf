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
