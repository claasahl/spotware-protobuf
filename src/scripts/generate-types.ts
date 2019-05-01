import { types, IEnum, IType } from "..";

function generateComment(comment?: string | null) {
  if (comment) {
    const lines = comment
      .replace("**", "")
      .replace("*/", "")
      .split("\n")
      .join("\n * ");
    process.stdout.write(`/**\n * ${lines}\n */\n`);
  }
}

function generateEnum(enumData: IEnum, enumName: string) {
  generateComment(enumData.comment);
  process.stdout.write(`enum ${enumName} {\n`);
  for (const name in enumData.values) {
    const value = enumData.values[name];
    const comment = enumData.comments ? enumData.comments[name] : undefined;

    generateComment(comment);
    process.stdout.write(`${name} = ${value},\n`);
  }
  process.stdout.write(`}\n\n`);
}

function generateInterface(typeData: IType, typeName: string) {
  generateComment(typeData.comment);
  process.stdout.write(`interface I${typeName} {\n`);
  for (const name in typeData.fields) {
    const field = typeData.fields[name];

    generateComment(field.comment);
    const isArray = field.rule === "repeated";
    const isOptional = field.rule === "" || field.rule === undefined;
    process.stdout.write(
      `${name}${isOptional ? "?" : ""}: ${field.type}${
        isOptional ? " | null" : ""
      }${isArray ? "[]" : ""},\n`
    );
  }
  process.stdout.write(`}\n\n`);
}

function generateClass(typeData: IType, typeName: string) {
  generateComment(typeData.comment);
  process.stdout.write(`class ${typeName} {\n`);
  process.stdout.write(
    `public static fromBuffer(buffer: Buffer): I${typeName} {}\n`
  );
  process.stdout.write(
    `public static toBuffer(message: I${typeName}): Buffer {}\n`
  );
  process.stdout.write(`}\n\n`);
}

function generateTypes(data: {
  enums: Map<string, IEnum>;
  types: Map<string, IType>;
}) {
  data.enums.forEach(generateEnum);
  data.types.forEach(generateInterface);
  data.types.forEach(generateClass);
}

process.stdout.write(`type bytes = Buffer;\n`);
process.stdout.write(`type double = number;\n`);
process.stdout.write(`type uint32 = number;\n`);
process.stdout.write(`type int32 = number;\n`);
process.stdout.write(`type uint64 = Long;\n`);
process.stdout.write(`type int64 = Long;\n`);
process.stdout.write(`type bool = boolean;\n`);
generateTypes(types.commonMessages);
generateTypes(types.commonModelMessages);
generateTypes(types.messages);
generateTypes(types.modelMessages);
