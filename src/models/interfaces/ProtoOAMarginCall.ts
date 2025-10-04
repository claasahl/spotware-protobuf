import type { ProtoOANotificationType } from "../enums/ProtoOANotificationType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAMarginCall extends ProtoMessage {
  marginCallType: ProtoOANotificationType;
  marginLevelThreshold: number;
  utcLastUpdateTimestamp?: number;
}
