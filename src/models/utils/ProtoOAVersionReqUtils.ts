import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAVersionReq } from "../interfaces/ProtoOAVersionReq.js";

export class ProtoOAVersionReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAVersionReq>,
  ): ProtoOAVersionReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_REQ,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAVersionReq {
    return pbf.readFields(
      ProtoOAVersionReqUtils._readField,
      ProtoOAVersionReqUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAVersionReq, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
  }

  static write(message: ProtoOAVersionReq, pbf: Pbf): void {
    const { payloadType } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
  }
}
