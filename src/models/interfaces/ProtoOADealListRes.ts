import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADeal } from "./ProtoOADeal.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADealListRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES;
  ctidTraderAccountId: number;
  deal?: ReadonlyArray<ProtoOADeal>;
  hasMore: boolean;
}
