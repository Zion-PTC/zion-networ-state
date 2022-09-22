// export { readJSON } from "@zionstate/system/src/lib/readJSON.js";
// export { readPackageJSON } from "@zionstate/system/src/lib/readPackageJSON.js";
// export { readTSconfigJSON } from "@zionstate/system/src/lib/readTSconfigJSON.js";
import { ZionCsv } from "./ZionCsv.js";
import { ZionYaml, ZionYamlToFile } from "./ZionYaml.js";
import { system } from "../System.js";
import { readPackageJSON } from "../lib/readPackageJSON.js";
import { readJSON } from "../lib/readJSON.js";
import { readTSconfigJSON } from "../lib/readTSconfigJSON.js";
// import {
//   jsconfigJSON,
//   packageJSON,
//   prettierrcJSON,
//   tsconfigJSON,
// } from "@zionstate/system/src/lib/types/index.js";

export enum SupportedFileExtensions {
  json = ".json",
  csv = ".csv",
  yaml = ".yaml",
  yml = ".yml",
  md = ".md",
  mdx = "mdx",
}

export class Reader {
  ZionYaml = ZionYaml;
  ZionYamlToFile = ZionYamlToFile;
  ZionCsv = ZionCsv;
  stringifyFile = system.stringifyFile;
  readFoldersInDir = system.arrayOfFoldersInDirectory;
  readFilesInFolder = system.arrayOfNamesOfFilesInFolder;
  joinPaths = system.joinPaths;
  readJSON = readJSON;
  readPackageJSON = readPackageJSON;
  readTSconfigJSON = readTSconfigJSON;
}

export let reader = new Reader();
