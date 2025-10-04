import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrader } from "./ProtoOATrader.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOATraderUpdatedEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT;
  ctidTraderAccountId: number;
  trader: ProtoOATrader;
}
