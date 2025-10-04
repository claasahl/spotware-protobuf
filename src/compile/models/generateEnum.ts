import type { Enum } from "protocol-buffers-schema/types";

export function generateEnum(enumeration: Enum): string {
  const values = Object.entries(enumeration.values).map(
    ([key, val]) => `  ${key} = ${val.value},`,
  );
  return `export enum ${enumeration.name} {
    ${values.join("\n")}
  }`;
}
