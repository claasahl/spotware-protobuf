import { sync as resolveProtoSchemaSync } from "resolve-protobuf-schema";
import { join } from "path";

import { generateModels } from "./models";

const protoDir = "./protobuf";

async function generate(protoFile: string) {
  const schema = resolveProtoSchemaSync(join(protoDir, protoFile));
  await generateModels(schema);
}

generate("OpenApiCommonMessages.proto").catch((err) => console.error(err));
generate("OpenApiMessages.proto").catch((err) => console.error(err));
