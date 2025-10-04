import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrendbar } from "./ProtoOATrendbar.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASpotEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SPOT_EVENT;
  ctidTraderAccountId: number;
  symbolId: number;
  bid?: number;
  ask?: number;
  trendbar?: ReadonlyArray<ProtoOATrendbar>;
  sessionClose?: number;
  timestamp?: number;
}
