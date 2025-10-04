import Pbf from "pbf";

import { ProtoOANotificationType } from "../enums/ProtoOANotificationType.js";
import { ProtoOAMarginCall } from "../interfaces/ProtoOAMarginCall.js";

export class ProtoOAMarginCallUtils {
  static default(
    partialMessage?: Partial<ProtoOAMarginCall>,
  ): ProtoOAMarginCall {
    return {
      marginCallType: Object.values(
        ProtoOANotificationType,
      )[0] as ProtoOANotificationType,
      marginLevelThreshold: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAMarginCall {
    return pbf.readFields(
      ProtoOAMarginCallUtils._readField,
      ProtoOAMarginCallUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAMarginCall, pbf: Pbf) {
    if (tag === 1) message.marginCallType = pbf.readVarint();
    if (tag === 2) message.marginLevelThreshold = pbf.readDouble();
    if (tag === 3) message.utcLastUpdateTimestamp = pbf.readVarint64();
  }

  static write(message: ProtoOAMarginCall, pbf: Pbf): void {
    const { marginCallType, marginLevelThreshold, utcLastUpdateTimestamp } =
      message;
    if (marginCallType !== undefined && marginCallType !== null)
      pbf.writeVarintField(1, marginCallType);
    if (marginLevelThreshold !== undefined && marginLevelThreshold !== null)
      pbf.writeDoubleField(2, marginLevelThreshold);
    if (utcLastUpdateTimestamp !== undefined && utcLastUpdateTimestamp !== null)
      pbf.writeVarintField(3, utcLastUpdateTimestamp);
  }
}
