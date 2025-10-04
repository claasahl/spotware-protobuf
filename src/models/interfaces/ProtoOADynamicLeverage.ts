import type { ProtoOADynamicLeverageTier } from "./ProtoOADynamicLeverageTier.ts";

export interface ProtoOADynamicLeverage {
  leverageId: number;
  tiers?: ReadonlyArray<ProtoOADynamicLeverageTier>;
}
