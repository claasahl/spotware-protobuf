import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAExpectedMargin } from "./ProtoOAExpectedMargin.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAExpectedMarginRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES;
  ctidTraderAccountId: number;
  margin?: ReadonlyArray<ProtoOAExpectedMargin>;
  moneyDigits?: number;
}
