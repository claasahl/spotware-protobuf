import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAExpectedMarginReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ;
  ctidTraderAccountId: number;
  symbolId: number;
  volume?: ReadonlyArray<number>;
}
