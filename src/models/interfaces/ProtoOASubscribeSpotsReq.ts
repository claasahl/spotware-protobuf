import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASubscribeSpotsReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
  subscribeToSpotTimestamp?: boolean;
}
