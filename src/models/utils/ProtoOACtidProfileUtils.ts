import Pbf from "pbf";

import { ProtoOACtidProfile } from "../interfaces/ProtoOACtidProfile.js";

export class ProtoOACtidProfileUtils {
  static default(
    partialMessage?: Partial<ProtoOACtidProfile>,
  ): ProtoOACtidProfile {
    return {
      userId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOACtidProfile {
    return pbf.readFields(
      ProtoOACtidProfileUtils._readField,
      ProtoOACtidProfileUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOACtidProfile,
    pbf: Pbf,
  ) {
    if (tag === 1) message.userId = pbf.readVarint64();
  }

  static write(message: ProtoOACtidProfile, pbf: Pbf): void {
    const { userId } = message;
    if (userId !== undefined && userId !== null)
      pbf.writeVarintField(1, userId);
  }
}
