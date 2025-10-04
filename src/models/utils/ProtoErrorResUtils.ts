import Pbf from "pbf";

import { ProtoPayloadType } from "../enums/ProtoPayloadType.js";
import { ProtoErrorRes } from "../interfaces/ProtoErrorRes.js";

export class ProtoErrorResUtils {
  static default(partialMessage?: Partial<ProtoErrorRes>): ProtoErrorRes {
    return {
      payloadType: ProtoPayloadType.ERROR_RES,
      errorCode: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoErrorRes {
    return pbf.readFields(
      ProtoErrorResUtils._readField,
      ProtoErrorResUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoErrorRes, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.errorCode = pbf.readString();
    if (tag === 3) message.description = pbf.readString();
    if (tag === 4) message.maintenanceEndTimestamp = pbf.readVarint64();
  }

  static write(message: ProtoErrorRes, pbf: Pbf): void {
    const { payloadType, errorCode, description, maintenanceEndTimestamp } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (errorCode !== undefined && errorCode !== null)
      pbf.writeStringField(2, errorCode);
    if (description !== undefined && description !== null)
      pbf.writeStringField(3, description);
    if (
      maintenanceEndTimestamp !== undefined &&
      maintenanceEndTimestamp !== null
    )
      pbf.writeVarintField(4, maintenanceEndTimestamp);
  }
}
