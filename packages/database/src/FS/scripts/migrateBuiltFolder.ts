#!/usr/bin/env node
import fs from "fs";
import { jsconfigJSON, tsconfigJSON } from "../lib/types/index.js";
import { join } from "path";
import { js, node } from "@zionstate/utils";
import { deleteFolder } from "../lib/deleteFolder.js";
import { writeFile } from "../lib/writeFile.js";
import { getKnownData } from "../lib/getKnownData.js";
import { changePackJson, changeTsConfig } from "../lib/edit.js";

const runProcess = node.process.runProcess;

const { ZionRegExp } = js;
// TODO da cancellare ZionRegExp
ZionRegExp;

const sourceRepo: string =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_node/crypto";
const targetName: string = "built";
const newFolderName: string = "build/index.js";
const folderToExclude = "./build/**/*";
const packJson: string = "package.json";
const tsConfig: string = "tsconfig.json";
const packJsonPath: string = join(sourceRepo, packJson);
const tsConfigPath: string = join(sourceRepo, tsConfig);

const getPackJson = getKnownData<jsconfigJSON.DataType>;
const getTsConfig = getKnownData<tsconfigJSON.DataType>;

async function main() {
  const dirent: string[] = fs.readdirSync(sourceRepo);
  const hasBuilt = dirent.some((entity) => entity === targetName);
  hasBuilt ? await deleteFolder(join(sourceRepo, targetName)) : {};
  const packJson = await getPackJson(packJsonPath);
  const updatedJson = await changePackJson(packJson, newFolderName);
  const tsConfigJson = await getTsConfig(tsConfigPath);
  const updatedTs = await changeTsConfig(
    tsConfigJson,
    newFolderName,
    folderToExclude
  );
  [
    [updatedJson, packJsonPath],
    [updatedTs, tsConfigPath],
  ].forEach(
    async (tuple) =>
      await writeFile(tuple[1] as string, JSON.stringify(tuple[0]))
  );
}

runProcess(main, { successMess: "Build system enabled" });
