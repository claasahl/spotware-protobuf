import PBF from "pbf";

export enum ProtoPayloadType {
  PROTO_MESSAGE = 5,
  ERROR_RES = 50,
  HEARTBEAT_EVENT = 51,
}

export enum ProtoErrorCode {
  UNKNOWN_ERROR = 1,
  UNSUPPORTED_MESSAGE = 2,
  INVALID_REQUEST = 3,
  TIMEOUT_ERROR = 5,
  ENTITY_NOT_FOUND = 6,
  CANT_ROUTE_REQUEST = 7,
  FRAME_TOO_LONG = 8,
  MARKET_CLOSED = 9,
  CONCURRENT_MODIFICATION = 10,
  BLOCKED_PAYLOAD_TYPE = 11,
}

// ProtoMessage ================================================

export interface ProtoMessage {
  payloadType: number;
  payload?: Uint8Array;
  clientMsgId?: string;
}

export class ProtoMessageUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ProtoMessageUtils._readField,
      {
        payloadType: 0,
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ProtoMessage, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.payload = pbf.readBytes();
    if (tag === 3) obj.clientMsgId = pbf.readString();
  }

  static write(obj: ProtoMessage, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.payload !== undefined && obj.payload !== null)
      pbf.writeBytesField(2, obj.payload);
    if (obj.clientMsgId !== undefined && obj.clientMsgId !== null)
      pbf.writeStringField(3, obj.clientMsgId);
  }
}

// ErrorRes ====================================================

export interface ErrorRes {
  payloadType?: ProtoPayloadType;
  errorCode: string;
  description?: string;
  maintenanceEndTimestamp?: number;
}

export class ErrorResUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(
      ErrorResUtils._readField,
      {
        errorCode: "",
      },
      end
    );
  }

  private static _readField(tag: number, obj?: ErrorRes, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
    if (tag === 2) obj.errorCode = pbf.readString();
    if (tag === 3) obj.description = pbf.readString();
    if (tag === 4) obj.maintenanceEndTimestamp = pbf.readVarint64();
  }

  static write(obj: ErrorRes, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
    if (obj.errorCode !== undefined && obj.errorCode !== null)
      pbf.writeStringField(2, obj.errorCode);
    if (obj.description !== undefined && obj.description !== null)
      pbf.writeStringField(3, obj.description);
    if (
      obj.maintenanceEndTimestamp !== undefined &&
      obj.maintenanceEndTimestamp !== null
    )
      pbf.writeVarintField(4, obj.maintenanceEndTimestamp);
  }
}

// HeartbeatEvent ==============================================

export interface HeartbeatEvent {
  payloadType?: ProtoPayloadType;
}

export class HeartbeatEventUtils {
  static read(pbf: PBF, end?: number) {
    return pbf.readFields(HeartbeatEventUtils._readField, {}, end);
  }

  private static _readField(tag: number, obj?: HeartbeatEvent, pbf?: PBF) {
    if (!obj || !pbf) {
      return;
    }
    if (tag === 1) obj.payloadType = pbf.readVarint();
  }

  static write(obj: HeartbeatEvent, pbf: PBF = new PBF()) {
    if (obj.payloadType !== undefined && obj.payloadType !== null)
      pbf.writeVarintField(1, obj.payloadType);
  }
}
