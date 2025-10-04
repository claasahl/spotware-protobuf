import type { ProtoOANotificationType } from "../enums/ProtoOANotificationType.ts";

export interface ProtoOAMarginCall {
  marginCallType: ProtoOANotificationType;
  marginLevelThreshold: number;
  utcLastUpdateTimestamp?: number;
}
