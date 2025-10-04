import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAOrder } from "./ProtoOAOrder.ts";
import type { ProtoOADeal } from "./ProtoOADeal.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAOrderDetailsRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_DETAILS_RES;
  ctidTraderAccountId: number;
  order: ProtoOAOrder;
  deal?: ReadonlyArray<ProtoOADeal>;
}
