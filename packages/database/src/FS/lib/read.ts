import { readdirSync } from "fs";
import { aggiungiPath } from "../../RAM/DataStructures/Array/lib/aggiungi.js";
import { ZionPath } from "../classes/Path.js";
import { system } from "../System.js";

export function read(folder: string): string[] {
  const workingDir = process.cwd();
  const dataFolder = "data";
  const folderName = folder;
  const libpath = [workingDir, dataFolder, folderName];
  let path = new ZionPath(libpath).path;

  return (() => {
    const filesInFolder = system.arrayOfNamesOfFilesInFolder(path);
    let paths: string[] = [];
    filesInFolder.forEach(aggiungiPath, paths);
    return paths;
  })();
}

export function read2(
  folder: string,
  filetypes: boolean = false
): string[] | undefined {
  {
    let options = undefined;
    if (filetypes) options = { withFileTypes: filetypes };
    if (!options)
      return readdirSync(folder)
        .filter((ent) => ent[0] !== ".")
        .filter((ent) => ent !== "giacomo");
  }
}
