import Pbf from "pbf";

import { ProtoOAMarginCallUtils } from "./ProtoOAMarginCallUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAMarginCallListRes } from "../interfaces/ProtoOAMarginCallListRes.js";

export class ProtoOAMarginCallListResUtils {
  static default(
    partialMessage?: Partial<ProtoOAMarginCallListRes>,
  ): ProtoOAMarginCallListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAMarginCallListRes {
    return pbf.readFields(
      ProtoOAMarginCallListResUtils._readField,
      ProtoOAMarginCallListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAMarginCallListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2)
      message.marginCall = [
        ...(message.marginCall ?? []),
        ProtoOAMarginCallUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOAMarginCallListRes, pbf: Pbf): void {
    const { payloadType, marginCall } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (marginCall !== undefined && marginCall !== null)
      marginCall.forEach((marginCall) =>
        ProtoOAMarginCallUtils.write(marginCall, pbf),
      );
  }
}
