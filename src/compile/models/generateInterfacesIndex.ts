import type { Enum, Schema } from "protocol-buffers-schema/types";

export function generateInterfacesIndex(schema: Schema): string {
  const exports = schema.messages.map((message) => {
    return `export * from "./${message.name}.js";`;
  });
  const imports = schema.messages.map((message) => {
    return `import { ${message.name}} from "./${message.name}.js";`;
  });
  const messages = schema.messages.map((m) => m.name);
  return `export * from "./BaseMessage.js";
  ${exports.join("\n")}
  
  ${imports.join("\n")}

  export type Messages = ${messages.join(" | ")};
  `;
}
