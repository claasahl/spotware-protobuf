import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATickData } from "./ProtoOATickData.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetTickDataRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES;
  ctidTraderAccountId: number;
  tickData?: ReadonlyArray<ProtoOATickData>;
  hasMore: boolean;
}
