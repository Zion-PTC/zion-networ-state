import { Octokit } from "@octokit/rest";
import { OctokitOptions } from "./Types/index.js";

enum Owners {
  giacomogagliano = "giacomogagliano",
  zionPTC = "Zion-PTC",
}
type OwnersType = keyof typeof Owners;

export interface IZionGitHub {
  getRepos(): Promise<(string | undefined)[][]>;
  createRepoForAuthUser(name: string): Promise<void>;
  createRepoForOrg(org: OwnersType, name: string): Promise<void>;
  deleteRepo(owner: OwnersType, repo: string): Promise<void>;
}

export class ZionGitHub implements OctokitOptions, IZionGitHub {
  zionOctoKit: Octokit;
  options: OctokitOptions;
  /**
   *
   * @param auth Personal Authorization Token from GitHub.
   * @param userAgent `optional`
   * @param timeZone `optional`
   * @param log `optional`
   * @param request `optional`
   */
  constructor(
    auth: string,
    userAgent = "Zion v0.0.1",
    timeZone = "Europe/Rome",
    log = {
      debug: () => console.log(),
      info: () => {},
      warn: console.warn,
      error: console.error,
    },
    request = {
      agent: undefined,
      fetch: undefined,
      timeout: 0,
    }
  ) {
    this.options = {
      auth,
      userAgent,
      timeZone,
      log,
      request,
    };
    this.zionOctoKit = new Octokit(this.options);
  }
  async getRepos() {
    let res = await this.zionOctoKit.paginate(
      this.zionOctoKit.repos.listForAuthenticatedUser
    );
    const regexp = /.*(?=\/)/g;
    return res.map((repo) => [
      repo.full_name.match(regexp)?.filter((res) => res !== "")[0],
      repo.name,
    ]);
  }
  async createRepoForAuthUser(name: string) {
    await this.zionOctoKit.repos.createForAuthenticatedUser({
      name,
    });
  }
  async createRepoForOrg(org: OwnersType, name: string) {
    await this.zionOctoKit.repos.createInOrg({
      org: Owners[org],
      name,
    });
  }
  async deleteRepo(owner: OwnersType, repo: string) {
    await this.zionOctoKit.repos.delete({
      owner: Owners[owner],
      repo,
    });
  }
  async editRepo(owner: OwnersType, repo: string, name: string) {
    await this.zionOctoKit.repos.update({ owner: Owners[owner], repo, name });
  }
}
