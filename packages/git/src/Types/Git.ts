import {
  CheckRepoActions,
  GitError,
  InitResult,
  Options,
  SimpleGit,
  SimpleGitOptions,
  SimpleGitTaskCallback,
  StatusResult,
  TaskOptions,
} from "simple-git";

export type isRepo = (
  action?: CheckRepoActions,
  callback?: SimpleGitTaskCallback<boolean, GitError>
) => Promise<boolean>;

export type initRepo = (
  bare: boolean,
  options?: TaskOptions<Options>
) => SimpleGit & Promise<InitResult>;

export type repoStatus = (
  options?: TaskOptions<Options>,
  callback?: SimpleGitTaskCallback<StatusResult, GitError>
) => Promise<StatusResult>;

export interface IZionGit {
  options: Partial<SimpleGitOptions>;
  isRepo: isRepo;
  init: initRepo;
  status: repoStatus;
  hasRemote(): any;
  // TODO add lastupdate
  // latestUpdate(): Promise<Date | undefined>;
}
