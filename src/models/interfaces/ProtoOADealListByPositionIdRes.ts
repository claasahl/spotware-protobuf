import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADeal } from "./ProtoOADeal.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADealListByPositionIdRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_RES;
  ctidTraderAccountId: number;
  deal?: ReadonlyArray<ProtoOADeal>;
  hasMore: boolean;
}
