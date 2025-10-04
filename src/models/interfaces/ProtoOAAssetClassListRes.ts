import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAAssetClass } from "./ProtoOAAssetClass.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAssetClassListRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES;
  ctidTraderAccountId: number;
  assetClass?: ReadonlyArray<ProtoOAAssetClass>;
}
