import Pbf from "pbf";

import { ProtoOATickDataUtils } from "./ProtoOATickDataUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetTickDataRes } from "../interfaces/ProtoOAGetTickDataRes.js";

export class ProtoOAGetTickDataResUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetTickDataRes>,
  ): ProtoOAGetTickDataRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES,
      ctidTraderAccountId: 0,
      hasMore: false,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetTickDataRes {
    return pbf.readFields(
      ProtoOAGetTickDataResUtils._readField,
      ProtoOAGetTickDataResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetTickDataRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.tickData = [
        ...(message.tickData ?? []),
        ProtoOATickDataUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4) message.hasMore = pbf.readBoolean();
  }

  static write(message: ProtoOAGetTickDataRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, tickData, hasMore } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (tickData !== undefined && tickData !== null)
      tickData.forEach((tickData) => ProtoOATickDataUtils.write(tickData, pbf));
    if (hasMore !== undefined && hasMore !== null)
      pbf.writeBooleanField(4, hasMore);
  }
}
