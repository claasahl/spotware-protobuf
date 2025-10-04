import type { Schema } from "protocol-buffers-schema/types";

export function generateUtilityClassesIndex(schema: Schema): string {
  const exports = schema.messages.map((message) => {
    return `export * from "./${message.name}Utils.js";`;
  });
  return exports.join("\n");
}
