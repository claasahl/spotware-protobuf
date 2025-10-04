import type { Field, Message, Schema } from "protocol-buffers-schema/types";
import { toTypeScriptType } from "./utils";

function generateUniqueImports(
  message: Message,
  schema: Schema,
): ReadonlyArray<string> {
  const typesRequiringImport = message.fields
    // only consider types that are not basic types
    .map(({ type }) => (toTypeScriptType(type) ? undefined : type))
    .filter((type): type is string => !!type)
    .map((type) => {
      if (schema.enums.find((e) => e.name === type)) {
        return `import type {${type}} from "../enums/${type}.ts";`;
      }
      if (schema.messages.find((m) => m.name === type)) {
        return `import type {${type}} from "./${type}.ts";`;
      }
      throw new Error(`Type ${type} not found in schema`);
    });
  return Array.from(new Set(typesRequiringImport));
}

function generateTypeScriptType(field: Field): string {
  const type = toTypeScriptType(field.type) || field.type;
  return field.repeated ? `ReadonlyArray<${type}>` : type;
}

function generateTypeScriptField(field: Field): string {
  if (field.name === "payloadType" && field.options.default) {
    return `${field.name}: ${field.type}.${field.options.default};`;
  }
  const type = generateTypeScriptType(field);
  return `${field.name}${field.required ? "" : "?"}: ${type};`;
}

export function generateInterface(message: Message, schema: Schema): string {
  const fields = message.fields.map(generateTypeScriptField);
  return `${generateUniqueImports(message, schema).join("\n")}
  import type { BaseMessage } from "./BaseProtoPayloadType.ts";

  export interface ${message.name} extends BaseMessage {
    ${fields.join("\n")}
  }`;
}
