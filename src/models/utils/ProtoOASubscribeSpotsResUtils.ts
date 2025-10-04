import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASubscribeSpotsRes } from "../interfaces/ProtoOASubscribeSpotsRes.js";

export class ProtoOASubscribeSpotsResUtils {
  static default(
    partialMessage?: Partial<ProtoOASubscribeSpotsRes>,
  ): ProtoOASubscribeSpotsRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASubscribeSpotsRes {
    return pbf.readFields(
      ProtoOASubscribeSpotsResUtils._readField,
      ProtoOASubscribeSpotsResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASubscribeSpotsRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOASubscribeSpotsRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
