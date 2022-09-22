import yaml from "yaml";
import { Dirent, system } from "../System.js";

export class ZionYaml<T> {
  string: string;
  parsed: T;
  constructor(path: string) {
    this.string = system.stringifyFile(path);
    this.parsed = yaml.parse(this.string);
  }
}

export class ZionYamlToFile {
  static getDirent = system.getDirent;
  static joinPaths = system.joinPaths;
  result: Dirent[];
  configYaml: [];
  tree;
  constructor(path: string, configYaml: string) {
    this.result = system.getDirent(path);
    this.configYaml = yaml.parse(system.stringifyFile(configYaml));
    this.tree = system.buildTree(path);
  }
}
