import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAErrorRes } from "../interfaces/ProtoOAErrorRes.js";

export class ProtoOAErrorResUtils {
  static default(partialMessage?: Partial<ProtoOAErrorRes>): ProtoOAErrorRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ERROR_RES,
      errorCode: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAErrorRes {
    return pbf.readFields(
      ProtoOAErrorResUtils._readField,
      ProtoOAErrorResUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAErrorRes, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.errorCode = pbf.readString();
    if (tag === 4) message.description = pbf.readString();
    if (tag === 5) message.maintenanceEndTimestamp = pbf.readVarint64();
    if (tag === 6) message.retryAfter = pbf.readVarint64();
  }

  static write(message: ProtoOAErrorRes, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      errorCode,
      description,
      maintenanceEndTimestamp,
      retryAfter,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (errorCode !== undefined && errorCode !== null)
      pbf.writeStringField(3, errorCode);
    if (description !== undefined && description !== null)
      pbf.writeStringField(4, description);
    if (
      maintenanceEndTimestamp !== undefined &&
      maintenanceEndTimestamp !== null
    )
      pbf.writeVarintField(5, maintenanceEndTimestamp);
    if (retryAfter !== undefined && retryAfter !== null)
      pbf.writeVarintField(6, retryAfter);
  }
}
