import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrader } from "./ProtoOATrader.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOATraderUpdatedEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT;
  ctidTraderAccountId: number;
  trader: ProtoOATrader;
}
