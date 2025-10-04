import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASubscribeSpotsReq } from "../interfaces/ProtoOASubscribeSpotsReq.js";

export class ProtoOASubscribeSpotsReqUtils {
  static default(
    partialMessage?: Partial<ProtoOASubscribeSpotsReq>,
  ): ProtoOASubscribeSpotsReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASubscribeSpotsReq {
    return pbf.readFields(
      ProtoOASubscribeSpotsReqUtils._readField,
      ProtoOASubscribeSpotsReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASubscribeSpotsReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbolId = [...(message.symbolId ?? []), pbf.readVarint64()];
    if (tag === 4) message.subscribeToSpotTimestamp = pbf.readBoolean();
  }

  static write(message: ProtoOASubscribeSpotsReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      symbolId,
      subscribeToSpotTimestamp,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
    if (
      subscribeToSpotTimestamp !== undefined &&
      subscribeToSpotTimestamp !== null
    )
      pbf.writeBooleanField(4, subscribeToSpotTimestamp);
  }
}
