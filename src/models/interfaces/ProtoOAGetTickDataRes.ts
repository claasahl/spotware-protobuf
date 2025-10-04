import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATickData } from "./ProtoOATickData.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetTickDataRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES;
  ctidTraderAccountId: number;
  tickData?: ReadonlyArray<ProtoOATickData>;
  hasMore: boolean;
}
