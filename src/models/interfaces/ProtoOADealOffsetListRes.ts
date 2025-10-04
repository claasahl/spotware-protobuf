import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADealOffset } from "./ProtoOADealOffset.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADealOffsetListRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_OFFSET_LIST_RES;
  ctidTraderAccountId: number;
  offsetBy?: ReadonlyArray<ProtoOADealOffset>;
  offsetting?: ReadonlyArray<ProtoOADealOffset>;
}
