import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAUnsubscribeSpotsReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
