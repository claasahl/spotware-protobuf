import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAApplicationAuthReq } from "../interfaces/ProtoOAApplicationAuthReq.js";

export class ProtoOAApplicationAuthReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAApplicationAuthReq>,
  ): ProtoOAApplicationAuthReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ,
      clientId: "",
      clientSecret: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAApplicationAuthReq {
    return pbf.readFields(
      ProtoOAApplicationAuthReqUtils._readField,
      ProtoOAApplicationAuthReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAApplicationAuthReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.clientId = pbf.readString();
    if (tag === 3) message.clientSecret = pbf.readString();
  }

  static write(message: ProtoOAApplicationAuthReq, pbf: Pbf): void {
    const { payloadType, clientId, clientSecret } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (clientId !== undefined && clientId !== null)
      pbf.writeStringField(2, clientId);
    if (clientSecret !== undefined && clientSecret !== null)
      pbf.writeStringField(3, clientSecret);
  }
}
