import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAssetListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_LIST_REQ;
  ctidTraderAccountId: number;
}
