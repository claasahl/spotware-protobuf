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
  if (isEnum(field.type, schema)) {
    return field.options.default !== undefined
      ? `${field.type}.${field.options.default}`
      : `Object.values(${field.type})[0] as ${field.type}`;
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
        return `${prefix}.readPackedVarint([...message.${field.name} ?? []])`;
      }
      return `${prefix}.readVarint64()`;
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
    return `${prefix}.writeVarintField(${field.tag}, ${field.name})`;
  }
  switch (field.type) {
    case "bytes":
      return `${prefix}.writeBytesField(${field.tag}, ${field.name})`;
    case "fixed32":
      return `${prefix}.writeFixed32Field(${field.tag}, ${field.name})`;
    case "sfixed32":
      return `${prefix}.writeSFixed32Field(${field.tag}, ${field.name})`;
    case "fixed64":
      return `${prefix}.writeFixed64Field(${field.tag}, ${field.name})`;
    case "sfixed64":
      return `${prefix}.writeSFixed64Field(${field.tag}, ${field.name})`;
    case "uint32":
    case "uint64":
    case "int32":
    case "int64":
      if (field.options.packed) {
        // FIXME
        return `${prefix}.writePackedVarint(${field.tag}, [...${field.name}])`;
      }
      return `${prefix}.writeVarintField(${field.tag}, ${field.name})`;
    case "sint32":
    case "sint64":
      return `${prefix}.writeSVarintField(${field.tag}, ${field.name})`;
    case "string":
      return `${prefix}.writeStringField(${field.tag}, ${field.name})`;
    case "float":
      return `${prefix}.writeFloatField(${field.tag}, ${field.name})`;
    case "double":
      return `${prefix}.writeDoubleField(${field.tag}, ${field.name})`;
    case "bool":
      return `${prefix}.writeBooleanField(${field.tag}, ${field.name})`;
  }
}
