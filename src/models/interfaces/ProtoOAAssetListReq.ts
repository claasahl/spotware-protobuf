import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAssetListReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ;
  ctidTraderAccountId: number;
}
