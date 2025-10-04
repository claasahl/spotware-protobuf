import type { ProtoOANotificationType } from "../enums/ProtoOANotificationType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAMarginCall extends BaseMessage {
  marginCallType: ProtoOANotificationType;
  marginLevelThreshold: number;
  utcLastUpdateTimestamp?: number;
}
