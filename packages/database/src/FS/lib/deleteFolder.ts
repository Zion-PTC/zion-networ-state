import fs from "fs";

export async function deleteFolder(path: string) {
  fs.rmSync(path, { recursive: true, force: true });
  console.log("Folder deleted at this path: " + path);
}
