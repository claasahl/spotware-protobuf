import Pbf from "pbf";

import { ProtoOADynamicLeverageTier } from "../interfaces/ProtoOADynamicLeverageTier.js";

export class ProtoOADynamicLeverageTierUtils {
  static default(
    partialMessage?: Partial<ProtoOADynamicLeverageTier>,
  ): ProtoOADynamicLeverageTier {
    return {
      volume: 0,
      leverage: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADynamicLeverageTier {
    return pbf.readFields(
      ProtoOADynamicLeverageTierUtils._readField,
      ProtoOADynamicLeverageTierUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOADynamicLeverageTier,
    pbf: Pbf,
  ) {
    if (tag === 1) message.volume = pbf.readVarint64();
    if (tag === 2) message.leverage = pbf.readVarint();
  }

  static write(message: ProtoOADynamicLeverageTier, pbf: Pbf): void {
    const { volume, leverage } = message;
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(1, volume);
    if (leverage !== undefined && leverage !== null)
      pbf.writeVarintField(2, leverage);
  }
}
