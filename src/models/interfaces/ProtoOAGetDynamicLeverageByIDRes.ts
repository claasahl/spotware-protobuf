import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADynamicLeverage } from "./ProtoOADynamicLeverage.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetDynamicLeverageByIDRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_RES;
  ctidTraderAccountId: number;
  leverage: ProtoOADynamicLeverage;
}
