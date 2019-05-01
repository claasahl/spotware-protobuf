import { types, IEnum } from "..";

function generateComment(comment?: string | null) {
  if (comment) {
    const lines = comment.split("\n").join("\n * ");
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

function generateEnums(enums: Map<string, IEnum>) {
  enums.forEach(generateEnum);
}

generateEnums(types.commonMessages.enums);
generateEnums(types.commonModelMessages.enums);
generateEnums(types.messages.enums);
generateEnums(types.modelMessages.enums);
