import type { ProtoOADynamicLeverageTier } from "./ProtoOADynamicLeverageTier.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADynamicLeverage extends ProtoMessage {
  leverageId: number;
  tiers?: ReadonlyArray<ProtoOADynamicLeverageTier>;
}
