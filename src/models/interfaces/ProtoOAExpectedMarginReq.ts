import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAExpectedMarginReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ;
  ctidTraderAccountId: number;
  symbolId: number;
  volume?: ReadonlyArray<number>;
}
