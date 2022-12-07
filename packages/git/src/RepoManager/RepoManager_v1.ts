import { Repo } from "../Repo";

export interface IRepoManager_v1 {}

export interface RepoManager_v1 {
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
  addFolder(type: "commit" | "not-commit"): this;
  // npm
  checkDeps(npmpkg: string): string[];
}

export class RepoManager_v1 implements IRepoManager_v1 {}

export type RepoManager_v1Ctor = {
  new (name: string): RepoManager_v1;
};

export const RepoManager_v1Ctor: RepoManager_v1Ctor = RepoManager_v1;
