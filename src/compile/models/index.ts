import { mkdir, writeFile } from "fs/promises";
import { Schema } from "protocol-buffers-schema/types";

import { generateEnum } from "./generateEnum";
import { generateInterface } from "./generateInterface";
import { generateUtilityClass } from "./generateUtilityClass";
import { generateEnumsIndex } from "./generateEnumsIndex";
import { generateInterfacesIndex } from "./generateInterfacesIndex";
import { generateUtilityClassesIndex } from "./generateUtilityClassesIndex";

export async function generateModels(schema: Schema) {
  // generate enums
  await mkdir("./src/models/enums", { recursive: true });
  for (const enumeration of schema.enums) {
    const content = generateEnum(enumeration);
    await writeFile(`./src/models/enums/${enumeration.name}.ts`, content);
  }
  await writeFile("./src/models/enums/index.ts", generateEnumsIndex(schema));

  // generate interfaces
  await mkdir("./src/models/interfaces", { recursive: true });
  for (const message of schema.messages) {
    const content = generateInterface(message, schema);
    await writeFile(`./src/models/interfaces/${message.name}.ts`, content);
  }
  await writeFile(
    "./src/models/interfaces/index.ts",
    generateInterfacesIndex(schema),
  );

  // generate utility classes
  await mkdir("./src/models/utils", { recursive: true });
  for (const message of schema.messages) {
    const content = generateUtilityClass(message, schema);
    await writeFile(`./src/models/utils/${message.name}Utils.ts`, content);
  }
  await writeFile(
    "./src/models/utils/index.ts",
    generateUtilityClassesIndex(schema),
  );
}
