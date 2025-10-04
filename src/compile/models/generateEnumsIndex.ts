import type { Schema } from "protocol-buffers-schema/types";

export function generateEnumsIndex(schema: Schema): string {
  const exports = schema.enums.map((enumeration) => {
    return `export * from "./${enumeration.name}.js";`;
  });
  return exports.join("\n");
}
