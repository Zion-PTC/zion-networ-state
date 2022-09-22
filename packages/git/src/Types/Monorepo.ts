import { GetAuthenticatedUser } from "./Oktokit/users";

export type Organization = {
  name: string;
  github: GitHubUserBasic;
};

export type GitHubUserBasic = Pick<
  GetAuthenticatedUser["data"],
  | "id"
  | "name"
  | "login"
  | "avatar_url"
  | "url"
  | "html_url"
  | "organizations_url"
  | "type"
>;

export type Repo = {
  path: string;
  list: string[];
};

export interface IMonorepo {
  id: string;
  name: string;
  path: string;
  appFolder?: string;
  packagesFolder?: string;
  organization?: Organization;
  apps?: Repo;
  packages?: Repo;
}

export type MonorepoType = new (
  id: string,
  name: string,
  path: string,
  organization: Organization,
  appFolder: string,
  packagesFolder: string
) => IMonorepo;
