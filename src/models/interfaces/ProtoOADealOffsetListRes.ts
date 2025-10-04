import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADealOffset } from "./ProtoOADealOffset.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADealOffsetListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_OFFSET_LIST_RES;
  ctidTraderAccountId: number;
  offsetBy?: ReadonlyArray<ProtoOADealOffset>;
  offsetting?: ReadonlyArray<ProtoOADealOffset>;
}
