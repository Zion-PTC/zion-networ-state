export type Organization = {
  name: string;
  github: GitHub;
};
export type GitHub = {
  url: string;
};
export {};
export interface IMonorepo {
  id: string;
  name: string;
  path: string;
  organization: Organization;
  appFolder: string;
  packagesFolder: string;
}
