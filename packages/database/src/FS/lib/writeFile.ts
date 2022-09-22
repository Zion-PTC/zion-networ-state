import fs from "fs";

// TODO add a generic
export const writeFile = async function (
  path: string,
  data: string,
  extension?: string
) {
  fs.writeFileSync(path, data);
  console.log("Written file: " + path);
  extension;
};
