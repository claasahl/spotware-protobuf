import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAUnsubscribeSpotsRes } from "../interfaces/ProtoOAUnsubscribeSpotsRes.js";

export class ProtoOAUnsubscribeSpotsResUtils {
  static default(
    partialMessage?: Partial<ProtoOAUnsubscribeSpotsRes>,
  ): ProtoOAUnsubscribeSpotsRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAUnsubscribeSpotsRes {
    return pbf.readFields(
      ProtoOAUnsubscribeSpotsResUtils._readField,
      ProtoOAUnsubscribeSpotsResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAUnsubscribeSpotsRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAUnsubscribeSpotsRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
