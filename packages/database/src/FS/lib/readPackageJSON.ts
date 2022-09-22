import { readJSON } from "./readJSON.js";
import { packageJSON } from "./types/index.js";

type DataType = packageJSON.DataType2;

export function readPackageJSON(path: string): DataType | string {
  let res = readJSON<DataType>(path);
  return res;
}
