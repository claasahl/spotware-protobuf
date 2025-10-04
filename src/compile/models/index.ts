import { mkdir, writeFile } from "fs/promises";
import { Schema } from "protocol-buffers-schema/types";

import { generateEnum } from "./generateEnum";
import { generateInterface } from "./generateInterface";

export async function generateModels(schema: Schema) {
  // generate enums
  await mkdir("./src/models/enums", { recursive: true });
  for (const enumeration of schema.enums) {
    const content = generateEnum(enumeration);
    await writeFile(`./src/models/enums/${enumeration.name}.ts`, content);
  }

  // generate interfaces
  await mkdir("./src/models/interfaces", { recursive: true });
  for (const message of schema.messages) {
    const content = generateInterface(message, schema);
    await writeFile(`./src/models/interfaces/${message.name}.ts`, content);
  }
}
