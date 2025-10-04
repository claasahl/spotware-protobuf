import { Field, Schema } from "protocol-buffers-schema/types";

export function toTypeScriptType(type: string): string | undefined {
  switch (type) {
    case "string":
      return "string";
    case "bool":
      return "boolean";
    case "float":
    case "double":
    case "enum":
    case "uint32":
    case "uint64":
    case "int32":
    case "int64":
    case "sint32":
    case "sint64":
    case "fixed32":
    case "fixed64":
    case "sfixed32":
    case "sfixed64":
      return "number";
    case "bytes":
      return "Uint8Array";
  }
}

function isEnum(type: string, schema: Schema): boolean {
  return !!schema.enums.find((e) => e.name === type);
}

export function defaultValue(field: Field, schema: Schema): string | undefined {
  if (isEnum(field.type, schema) && field.options.default !== undefined) {
    return `${field.type}.${field.options.default}`;
  }
  if (field.options.default !== undefined) {
    return field.options.default;
  }
  if (field.repeated) {
    return "[]";
  }
  switch (field.type) {
    case "bytes":
      return "Buffer.alloc(0)";
    case "fixed32":
    case "sfixed32":
    case "fixed64":
    case "sfixed64":
    case "int32":
    case "int64":
    case "uint32":
    case "uint64":
    case "sint32":
    case "sint64":
    case "float":
    case "double":
      return "0";
    case "string":
      return '""';
    case "bool":
      return "false";
    // case "ProtoOAOrderType":
    //   return "ProtoOAOrderType.MARKET";
    // case "ProtoOATradeSide":
    //   return "ProtoOATradeSide.BUY";
    // case "ProtoOAExecutionType":
    //   return "ProtoOAExecutionType.ORDER_ACCEPTED";
    // case "ProtoOATrader":
    //   return "{balance: 0, ctidTraderAccountId: 0, depositAssetId: 0}";
    // case "ProtoOATrendbarPeriod":
    //   return "ProtoOATrendbarPeriod.M1";
    // case "ProtoOAQuoteType":
    //   return "ProtoOAQuoteType.BID";
    // case "ProtoOACtidProfile":
    //   return "{userId: 0}";
    // case "ProtoOATradeData":
    //   return "{symbolId: 0, volume: 0, tradeSide: ProtoOATradeSide.BUY}";
    // case "ProtoOAPositionStatus":
    //   return "ProtoOAPositionStatus.POSITION_STATUS_OPEN";
    // case "ProtoOAOrderStatus":
    //   return "ProtoOAOrderStatus.ORDER_STATUS_ACCEPTED";
    // case "ProtoOAChangeBonusType":
    //   return "ProtoOAChangeBonusType.BONUS_DEPOSIT";
    // case "ProtoOAChangeBalanceType":
    //   return "ProtoOAChangeBalanceType.BALANCE_DEPOSIT";
    // case "ProtoOADealStatus":
    //   return "ProtoOADealStatus.FILLED";
    // case "ProtoOANotificationType":
    //   return "ProtoOANotificationType.MARGIN_LEVEL_THRESHOLD_1";
    // case "ProtoOAMarginCall":
    //   return "{marginCallType: ProtoOANotificationType.MARGIN_LEVEL_THRESHOLD_1, marginLevelThreshold: 0}";
    // case "ProtoOADynamicLeverage":
    //   return "{leverageId: 0, tiers: []}";
    // case "ProtoOAOrder":
    //   return `{
    //     orderId: 0,
    //     tradeData: {symbolId: 0, volume: 0, tradeSide: ProtoOATradeSide.BUY},
    //     orderType: ProtoOAOrderType.MARKET,
    //     orderStatus: ProtoOAOrderStatus.ORDER_STATUS_ACCEPTED,
    //   }`;
    // default:
    //   return `no default value for '${field.type}'`;
  }
}

export function toPbfReadMethod(
  field: Field,
  schema: Schema,
  prefix: string,
): string | undefined {
  if (isEnum(field.type, schema)) {
    return `${prefix}.readVarint()`;
  }
  switch (field.type) {
    case "bytes":
      return `${prefix}.readBytes()`;
    case "fixed32":
      return `${prefix}.readFixed32()`;
    case "sfixed32":
      return `${prefix}.readSFixed32()`;
    case "fixed64":
      return `${prefix}.readFixed64()`;
    case "sfixed64":
      return `${prefix}.readSFixed64()`;
    case "uint32":
    case "int32":
      return `${prefix}.readVarint()`;
    case "uint64":
    case "int64":
      if (field.options.packed) {
        // FIXME
        return `${prefix}.readPackedVarint([...message.${field.name}])`;
      }
      return field.repeated // FIXME
        ? `[...message.${field.name}, ${prefix}.readVarint64()]`
        : `${prefix}.readVarint64()`;
    case "sint32":
    case "sint64":
      return `${prefix}.readSVarint()`;
    case "string":
      return `${prefix}.readString()`;
    case "float":
      return `${prefix}.readFloat()`;
    case "double":
      return `${prefix}.readDouble()`;
    case "bool":
      return `${prefix}.readBoolean()`;
  }
}

export function toPbfWriteMethod(
  field: Field,
  schema: Schema,
  prefix: string,
): string | undefined {
  if (isEnum(field.type, schema)) {
    return `${prefix}.writeVarintField(${field.tag}, message.${field.name})`;
  }
  switch (field.type) {
    case "bytes":
      return `${prefix}.writeBytesField(${field.tag}, message.${field.name})`;
    case "fixed32":
      return `${prefix}.writeFixed32Field(${field.tag}, message.${field.name})`;
    case "sfixed32":
      return `${prefix}.writeSFixed32Field(${field.tag}, message.${field.name})`;
    case "fixed64":
      return `${prefix}.writeFixed64Field(${field.tag}, message.${field.name})`;
    case "sfixed64":
      return `${prefix}.writeSFixed64Field(${field.tag}, message.${field.name})`;
    case "uint32":
    case "uint64":
    case "int32":
    case "int64":
      if (field.options.packed) {
        // FIXME
        return `${prefix}.writePackedVarint(${field.tag}, [...message.${field.name}])`;
      }
      return field.repeated // FIXME
        ? `message.${field.name}.forEach(${field.name} => ${prefix}.writeVarintField(${field.tag}, ${field.name}))`
        : `${prefix}.writeVarintField(${field.tag}, message.${field.name})`;
    case "sint32":
    case "sint64":
      return `${prefix}.writeSVarintField(${field.tag}, message.${field.name})`;
    case "string":
      return `${prefix}.writeStringField(${field.tag}, message.${field.name})`;
    case "float":
      return `${prefix}.writeFloatField(${field.tag}, message.${field.name})`;
    case "double":
      return `${prefix}.writeDoubleField(${field.tag}, message.${field.name})`;
    case "bool":
      return `${prefix}.writeBooleanField(${field.tag}, message.${field.name})`;
  }
}
