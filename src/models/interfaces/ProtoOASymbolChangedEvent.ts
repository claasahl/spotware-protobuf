import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolChangedEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
