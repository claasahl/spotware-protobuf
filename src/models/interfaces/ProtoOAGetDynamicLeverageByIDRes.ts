import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADynamicLeverage } from "./ProtoOADynamicLeverage.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetDynamicLeverageByIDRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_RES;
  ctidTraderAccountId: number;
  leverage: ProtoOADynamicLeverage;
}
