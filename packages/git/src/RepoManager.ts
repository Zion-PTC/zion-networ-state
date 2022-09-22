import { Repo } from "./Repo";

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
