import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAssetClassListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ;
  ctidTraderAccountId: number;
}
