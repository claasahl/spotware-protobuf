import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAOrder } from "./ProtoOAOrder.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAOrderListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_LIST_RES;
  ctidTraderAccountId: number;
  order?: ReadonlyArray<ProtoOAOrder>;
  hasMore: boolean;
}
