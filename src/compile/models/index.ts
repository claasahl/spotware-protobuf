import { mkdir, writeFile } from "fs/promises";
import { Schema } from "protocol-buffers-schema/types";

import { generateEnum } from "./generateEnum";

export async function generateModels(schema: Schema) {
  // generate enums
  await mkdir("./src/models/enums", { recursive: true });
  for (const enumeration of schema.enums) {
    const content = generateEnum(enumeration);
    await writeFile(`./src/models/enums/${enumeration.name}.ts`, content);
  }
}
