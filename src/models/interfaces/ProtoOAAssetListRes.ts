import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAAsset } from "./ProtoOAAsset.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAssetListRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES;
  ctidTraderAccountId: number;
  asset?: ReadonlyArray<ProtoOAAsset>;
}
