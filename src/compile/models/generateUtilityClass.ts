import type { Field, Message, Schema } from "protocol-buffers-schema/types";

import { defaultValue, toPbfReadMethod, toPbfWriteMethod } from "./utils";

function generateUniqueImports(
  message: Message,
  schema: Schema,
): ReadonlyArray<string> {
  const typesRequiringImport = message.fields
    // only consider types that are not basic types
    .filter((field) => !toPbfReadMethod(field, schema, ""))
    .map(({ type }) => `import {${type}Utils} from "./${type}Utils.js";`);
  const enumsRequiringImport = message.fields
    .filter(({ type }) => schema.enums.find((e) => e.name === type))
    .map(({ type }) => `import {${type}} from "../enums/${type}.js";`);
  return Array.from(new Set(typesRequiringImport.concat(enumsRequiringImport)));
}

function generateDefaultValue(field: Field, schema: Schema): string {
  const customDefault = `${field.type}Utils.default()`;
  return `${field.name}: ${defaultValue(field, schema) || customDefault}`;
}

function generateReadFieldLine(
  field: Field,
  schema: Schema,
  prefix: string,
): string {
  const customReadMethod = `${field.type}Utils.read(${prefix}, ${prefix}.readVarint() + ${prefix}.pos)`;
  const readMethod = toPbfReadMethod(field, schema, prefix) || customReadMethod;
  if (field.repeated && !field.options.packed)
    return `if (tag === ${field.tag}) message.${field.name} = [...(message.${field.name} ?? []), ${readMethod}];`;
  return `if (tag === ${field.tag}) message.${field.name} = ${readMethod};`;
}

function generateWriteFieldLine(
  field: Field,
  schema: Schema,
  prefix: string,
): string {
  const customWriteMethod = `${field.type}Utils.write(${field.name}, ${prefix})`;
  const writeMethod =
    toPbfWriteMethod(field, schema, prefix) || customWriteMethod;
  if (field.repeated && !field.options.packed)
    return `if (${field.name} !== undefined && ${field.name} !== null) ${field.name}.forEach(${field.name} => ${writeMethod});`;
  return `if (${field.name} !== undefined && ${field.name} !== null) ${writeMethod};`;
}

export function generateUtilityClass(message: Message, schema: Schema): string {
  const baseName = message.name;
  const defaultValues = message.fields
    .filter((field) => field.required || field.name === "payloadType")
    .map((field) => generateDefaultValue(field, schema));
  return `import Pbf from "pbf";

  ${generateUniqueImports(message, schema).join("\n")}
  import { ${baseName} } from "../interfaces/${baseName}.js";
  
  export class ${baseName}Utils {
    static default(partialMessage?: Partial<${baseName}>): ${baseName} {
      return {
        ${defaultValues.join(",\n")}
        ${defaultValues.length > 0 ? "," : ""}
        ...partialMessage,
      };
    }

    static read(pbf: Pbf, end?: number): ${baseName} {
      return pbf.readFields(${baseName}Utils._readField, ${baseName}Utils.default(), end);
    }

    private static _readField(
      tag: number,
      message: ${baseName},
      pbf: Pbf,
    ) {
      ${message.fields.map((field) => generateReadFieldLine(field, schema, "pbf")).join("\n")}
    }
      
    static write(message: ${baseName}, pbf: Pbf): void {
      const {${message.fields.map((field) => field.name).join(", ")}} = message;
      ${message.fields.map((field) => generateWriteFieldLine(field, schema, "pbf")).join("\n")}
    }
  }`;
}
