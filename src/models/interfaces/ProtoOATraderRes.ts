import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrader } from "./ProtoOATrader.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOATraderRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_RES;
  ctidTraderAccountId: number;
  trader: ProtoOATrader;
}
