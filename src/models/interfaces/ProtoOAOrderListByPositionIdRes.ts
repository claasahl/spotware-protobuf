import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAOrder } from "./ProtoOAOrder.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAOrderListByPositionIdRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES;
  ctidTraderAccountId: number;
  order?: ReadonlyArray<ProtoOAOrder>;
  hasMore: boolean;
}
