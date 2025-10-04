import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAApplicationAuthRes } from "../interfaces/ProtoOAApplicationAuthRes.js";

export class ProtoOAApplicationAuthResUtils {
  static default(
    partialMessage?: Partial<ProtoOAApplicationAuthRes>,
  ): ProtoOAApplicationAuthRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAApplicationAuthRes {
    return pbf.readFields(
      ProtoOAApplicationAuthResUtils._readField,
      ProtoOAApplicationAuthResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAApplicationAuthRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
  }

  static write(message: ProtoOAApplicationAuthRes, pbf: Pbf): void {
    const { payloadType } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
  }
}
