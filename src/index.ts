import jsonCommonMessages from "./OpenApiCommonMessages.json";
import jsonCommonModelMessages from "./OpenApiCommonModelMessages.json";
import jsonMessages from "./OpenApiMessages.json";
import jsonModelMessages from "./OpenApiModelMessages.json";

/** Message type descriptor. */
export interface IType {
  /** Oneof descriptors */
  oneofs?: { [k: string]: IOneOf };

  /** Field descriptors */
  fields: { [k: string]: IField };

  /** Extension ranges */
  extensions?: number[][];

  /** Reserved ranges */
  reserved?: number[][];

  /** Whether a legacy group or not */
  group?: boolean;
}

/** Oneof descriptor. */
export interface IOneOf {
  /** Oneof field names */
  oneof: string[];

  /** Oneof options */
  options?: { [k: string]: any };
}

/** Field descriptor. */
export interface IField {
  /** Field rule */
  rule?: string;

  /** Field type */
  type: string;

  /** Field id */
  id: number;

  /** Field options */
  options?: { [k: string]: any };
}

/** Enum descriptor. */
export interface IEnum {
  /** Enum values */
  values: { [k: string]: number };

  /** Enum options */
  options?: { [k: string]: any };
}

interface MessageType {
  [k: string]: IEnum | IType;
}

function isEnum(data: IEnum | IType): data is IEnum {
  return data.hasOwnProperty("value");
}

function isType(data: IEnum | IType): data is IType {
  return data.hasOwnProperty("fields");
}

function a(messages: MessageType) {
  const enums: IEnum[] = [];
  const types: IType[] = [];
  for (const key in messages) {
    const value = messages[key];
    if (isEnum(value)) {
      enums.push(value);
    } else if (isType(value)) {
      types.push(value);
    } else {
      console.error("unexpected key/value pair", key, value);
    }
  }
  return { enums, types };
}

export const rawTypes = {
  commonMessages: jsonCommonMessages.nested,
  commonModelMessages: jsonCommonModelMessages.nested,
  messages: jsonMessages.nested,
  modelMessages: jsonModelMessages.nested
};
export const types = {
  commonMessages: a(jsonCommonMessages.nested),
  commonModelMessages: a(jsonCommonModelMessages.nested),
  messages: a(jsonMessages.nested),
  modelMessages: a(jsonModelMessages.nested)
};
export default { rawTypes, types };
