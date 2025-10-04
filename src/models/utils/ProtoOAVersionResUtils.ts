import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAVersionRes } from "../interfaces/ProtoOAVersionRes.js";

export class ProtoOAVersionResUtils {
  static default(
    partialMessage?: Partial<ProtoOAVersionRes>,
  ): ProtoOAVersionRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_RES,
      version: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAVersionRes {
    return pbf.readFields(
      ProtoOAVersionResUtils._readField,
      ProtoOAVersionResUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAVersionRes, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.version = pbf.readString();
  }

  static write(message: ProtoOAVersionRes, pbf: Pbf): void {
    const { payloadType, version } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (version !== undefined && version !== null)
      pbf.writeStringField(2, version);
  }
}
