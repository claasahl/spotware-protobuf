import Pbf from "pbf";

import { ProtoOAPositionUnrealizedPnLUtils } from "./ProtoOAPositionUnrealizedPnLUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetPositionUnrealizedPnLRes } from "../interfaces/ProtoOAGetPositionUnrealizedPnLRes.js";

export class ProtoOAGetPositionUnrealizedPnLResUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetPositionUnrealizedPnLRes>,
  ): ProtoOAGetPositionUnrealizedPnLRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES,
      ctidTraderAccountId: 0,
      moneyDigits: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetPositionUnrealizedPnLRes {
    return pbf.readFields(
      ProtoOAGetPositionUnrealizedPnLResUtils._readField,
      ProtoOAGetPositionUnrealizedPnLResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetPositionUnrealizedPnLRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.positionUnrealizedPnL = [
        ...(message.positionUnrealizedPnL ?? []),
        ProtoOAPositionUnrealizedPnLUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4) message.moneyDigits = pbf.readVarint();
  }

  static write(message: ProtoOAGetPositionUnrealizedPnLRes, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      positionUnrealizedPnL,
      moneyDigits,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (positionUnrealizedPnL !== undefined && positionUnrealizedPnL !== null)
      positionUnrealizedPnL.forEach((positionUnrealizedPnL) =>
        ProtoOAPositionUnrealizedPnLUtils.write(positionUnrealizedPnL, pbf),
      );
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(4, moneyDigits);
  }
}
