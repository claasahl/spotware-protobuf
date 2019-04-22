import commandLineArgs from "command-line-args";
import { parse, Root } from "protobufjs";
import globby from "globby";
import fs from "fs";
import path from "path";

const optionDefinitions = [
  {
    name: "inputDir",
    alias: "i",
    type: String
  },
  {
    name: "outputDir",
    alias: "o",
    type: String
  },
  {
    name: "pattern",
    alias: "p",
    type: String,
    defaultValue: "*.proto"
  }
];
const options = commandLineArgs(optionDefinitions);
const inputDir: string = options.inputDir;
const outputDir: string = options.outputDir;
const pattern: string = options.pattern;
(async (input: string, output: string, pattern: string): Promise<void> => {
  const inputPattern = path.join(input, pattern);
  const files = await globby(inputPattern);
  for (const file of files) {
    const root = parseProtoFile(file);
    const jsonFile = toJsonFilename(output, file);
    writeJsonFile(jsonFile, root);
  }
})(inputDir, outputDir, pattern);

function parseProtoFile(file: string): Root {
  const data = fs.readFileSync(file);
  const root = new Root();
  parse(data.toString(), root, { alternateCommentMode: true });
  return root;
}

function toJsonFilename(parent: string, file: string): string {
  const basename = path.basename(file);
  const extname = path.extname(file);
  const jsonFile = basename.replace(extname, ".json");
  return path.join(parent, jsonFile);
}

function writeJsonFile(file: string, root: Root) {
  const data = root.toJSON({ keepComments: true });
  const jsonData = JSON.stringify(data, stripNullComments);
  fs.writeFileSync(file, jsonData);
}

function stripNullComments(key: string, value: any): any {
  if (key === "comment" && !!!value) {
    return undefined;
  }
  return value;
}
