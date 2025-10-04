import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAv1PnLChangeEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_EVENT;
  ctidTraderAccountId: number;
  grossUnrealizedPnL: number;
  netUnrealizedPnL: number;
  moneyDigits: number;
}
