import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAssetClassListReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ;
  ctidTraderAccountId: number;
}
