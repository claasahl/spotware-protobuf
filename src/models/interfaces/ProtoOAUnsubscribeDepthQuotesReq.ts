import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAUnsubscribeDepthQuotesReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
