import { readJSON, readPackageJSON, readTSconfigJSON } from "../../lib";
import { system } from "../../System";
import { NoizCsv } from "../NoizCsv";
import { NoizYaml, NoizYamlToFile } from "../NoizYaml";

export interface IReader_v1 {
  name: string;
}

export interface Reader_v1 {
  name: string;
}
// } from "@zionstate/system/src/lib/types/index.js";

export enum SupportedFileExtensions {
  json = ".json",
  csv = ".csv",
  yaml = ".yaml",
  yml = ".yml",
  md = ".md",
  mdx = "mdx",
}

export class Reader_v1 {
  NoizYaml = NoizYaml;
  NoizYamlToFile = NoizYamlToFile;
  NoizCsv = NoizCsv;
  stringifyFile = system.stringifyFile;
  readFoldersInDir = system.arrayOfFoldersInDirectory;
  readFilesInFolder = system.arrayOfNamesOfFilesInFolder;
  joinPaths = system.joinPaths;
  readJSON = readJSON;
  readPackageJSON = readPackageJSON;
  readTSconfigJSON = readTSconfigJSON;
}

export let reader = new Reader_v1();

export type Reader_v1Ctor = {
  new (name: string): Reader_v1;
};

export const Reader_v1Ctor: Reader_v1Ctor = Reader_v1;
