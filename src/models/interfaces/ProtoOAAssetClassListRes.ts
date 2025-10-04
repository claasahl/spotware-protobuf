import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAAssetClass } from "./ProtoOAAssetClass.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAssetClassListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES;
  ctidTraderAccountId: number;
  assetClass?: ReadonlyArray<ProtoOAAssetClass>;
}
