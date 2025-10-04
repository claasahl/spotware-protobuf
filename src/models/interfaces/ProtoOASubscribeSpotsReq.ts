import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASubscribeSpotsReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
  subscribeToSpotTimestamp?: boolean;
}
