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
