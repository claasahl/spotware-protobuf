import Pbf from "pbf";

import { ProtoOADynamicLeverageTierUtils } from "./ProtoOADynamicLeverageTierUtils.js";
import { ProtoOADynamicLeverage } from "../interfaces/ProtoOADynamicLeverage.js";

export class ProtoOADynamicLeverageUtils {
  static default(
    partialMessage?: Partial<ProtoOADynamicLeverage>,
  ): ProtoOADynamicLeverage {
    return {
      leverageId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADynamicLeverage {
    return pbf.readFields(
      ProtoOADynamicLeverageUtils._readField,
      ProtoOADynamicLeverageUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOADynamicLeverage,
    pbf: Pbf,
  ) {
    if (tag === 1) message.leverageId = pbf.readVarint64();
    if (tag === 2)
      message.tiers = [
        ...(message.tiers ?? []),
        ProtoOADynamicLeverageTierUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOADynamicLeverage, pbf: Pbf): void {
    const { leverageId, tiers } = message;
    if (leverageId !== undefined && leverageId !== null)
      pbf.writeVarintField(1, leverageId);
    if (tiers !== undefined && tiers !== null)
      tiers.forEach((tiers) =>
        ProtoOADynamicLeverageTierUtils.write(tiers, pbf),
      );
  }
}
