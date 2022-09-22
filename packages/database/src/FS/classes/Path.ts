import path from "path";

export abstract class Path {
  // tipo1 - /path/to/some/where
  // tipo2 - path/to/some/where
  // tipo3 - [path,to,some,where]
  // tipo4 - ./path/to/some/where
}

export class ZionPath {
  #path: string = "no path given";
  get path() {
    return this.#path;
  }
  constructor(paths?: string[]) {
    if (paths) this.#path = path.join(...paths);
  }
  directory() {
    return path.basename(path.dirname(this.#path));
  }
  baseName() {
    return path.basename(this.#path);
  }
}
