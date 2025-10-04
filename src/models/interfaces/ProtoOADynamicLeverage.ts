import type { ProtoOADynamicLeverageTier } from "./ProtoOADynamicLeverageTier.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADynamicLeverage extends BaseMessage {
  leverageId: number;
  tiers?: ReadonlyArray<ProtoOADynamicLeverageTier>;
}
