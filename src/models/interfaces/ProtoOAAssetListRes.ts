import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAAsset } from "./ProtoOAAsset.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAssetListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES;
  ctidTraderAccountId: number;
  asset?: ReadonlyArray<ProtoOAAsset>;
}
