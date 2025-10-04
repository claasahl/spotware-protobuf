import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADeal } from "./ProtoOADeal.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADealListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_RES;
  ctidTraderAccountId: number;
  deal?: ReadonlyArray<ProtoOADeal>;
  hasMore: boolean;
}
