import { FS } from "@zionstate/database";
import { ZionGit } from "./Git";
import { ZionGitHub } from "./GitHub";
import { Repo } from "./Repo";

export type RepoTypes = "app" | "package";

export enum TypeFolders {
  app = "apps",
  package = "packages",
}

export enum PackagesSubFolders {
  "@zionstate" = "@zionstate",
  "@zionrepack" = "@zionrepack",
  "@zionstate_js" = "@zionstate_js",
  "@zionstate_node" = "@zionstate_node",
}
export enum AppPackPrefix {
  zionapps = "@zionapps",
}
export type PackagesSubFoldersTypes = keyof typeof PackagesSubFolders;
export type CreateRepoOptions = {
  name?: string;
  subFolder?: PackagesSubFolders | TypeFolders;
  type?: RepoTypes;
};
export type Directories = {
  packagesDir?: string;
  appDir?: string;
  packages?: { [k: string]: string };
  apps?: { [k: string]: string };
};

export interface RepoManager {
  createPackage(): void;
  deletePackage(): void;
  createApp(): void;
  deleteApp(): void;
  aggiungiTestARepo(name: string, repo: Repo): void;
  stageChanges(): void;
  commitRepo(id: string): void;
  commitMonorepo(): void;
  movePackage(): void;
  commit(): void;
  createDockerFile(): void;
  createImage(): void;
  setTestResult(test: string, result: boolean): void;
  // repo mgmt
  addFolder(type: "commit" | "not-commit"): RepoManager;
  // npm
  checkDeps(npmpkg: string): string[];
}

export type REPO = {
  name: string | boolean | string[];
  packageName: string | boolean | string[];
  isRoot: string | boolean;
  hasTypesInConfig: string | boolean | string[];
  isWorking: string | boolean | string[];
  isCommitted: string | boolean | string[];
  dependencies(): dependency;
};

type package_json = FS.lib.types.packageJSON.DataType2;
type tsconfig_json = FS.lib.types.tsconfigJSON.DataType;
type jsconfig_json = FS.lib.types.jsconfigJSON.DataType;
type prettierrc_json = FS.lib.types.prettierrcJSON.DataType;
type dependency = FS.lib.types.packageJSON.Dependency;

export interface IRepo {
  git: ZionGit;
  github: ZionGitHub;
  packageJSON?: package_json | string;
  tsconfigJSON?: tsconfig_json | string;
  prettierrcJSON?: prettierrc_json;
  jsconfigJSON?: jsconfig_json;
  isRoot(): Promise<boolean>;
  hasRemote(): Promise<boolean>;
  isCommitted(): Promise<boolean>;
  dependencies(): dependency | string;
  // latestUpdate(): Promise<Date | undefined>;
  version(): string | undefined;
  /////
  hasTypesInConfigTS(): boolean | null;
  // packageJSON(): Promise<object>;
}
