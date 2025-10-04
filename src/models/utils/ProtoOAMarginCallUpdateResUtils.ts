import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAMarginCallUpdateRes } from "../interfaces/ProtoOAMarginCallUpdateRes.js";

export class ProtoOAMarginCallUpdateResUtils {
  static default(
    partialMessage?: Partial<ProtoOAMarginCallUpdateRes>,
  ): ProtoOAMarginCallUpdateRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAMarginCallUpdateRes {
    return pbf.readFields(
      ProtoOAMarginCallUpdateResUtils._readField,
      ProtoOAMarginCallUpdateResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAMarginCallUpdateRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
  }

  static write(message: ProtoOAMarginCallUpdateRes, pbf: Pbf): void {
    const { payloadType } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
  }
}
