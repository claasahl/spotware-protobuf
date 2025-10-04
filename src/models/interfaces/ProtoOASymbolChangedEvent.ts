import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolChangedEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
