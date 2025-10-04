import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAExpectedMargin } from "./ProtoOAExpectedMargin.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAExpectedMarginRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES;
  ctidTraderAccountId: number;
  margin?: ReadonlyArray<ProtoOAExpectedMargin>;
  moneyDigits?: number;
}
