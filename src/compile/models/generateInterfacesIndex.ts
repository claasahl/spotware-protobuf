import type { Enum, Schema } from "protocol-buffers-schema/types";

export function generateInterfacesIndex(schema: Schema): string {
  const exports = schema.messages.map((message) => {
    return `export * from "./${message.name}.js";`;
  });
  return `export * from "./BaseMessage.js";
  ${exports.join("\n")}`;
}
