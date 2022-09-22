import { testEnvironment } from "@zionstate/test";
import { FS } from "@zionstate/database";
const { system } = FS;
import { testRepo } from "@zionstate/git";

const { expect, log } = testEnvironment();
const processFolder = process.cwd();
const { createNestedDir, deleteRecursiveDir, joinPaths } = system;

const basePath = "/Users/WAW/Documents/Projects";
const noGit = "noGit";
const path = joinPaths([basePath, noGit]);
const processPath =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_node/process";
const emitter =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_node/emitter";
const zionUtil =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_node/zion-util";
const crypto =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_node/crypto";
const node_fetch =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_node/node-fetch";
const error = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_js/error";
const regexp =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_js/regexp";
const url = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_js/url";
const audius = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/audius";
const auth = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/auth";
const base = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/base";
const cat = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/catering";
const gen = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/generator";
const git = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/git";
const label = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/label";
const learn = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/learn";
const minter = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/minter";
const mixins = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/mixins";
const systemPath =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/system";
const terminal =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/terminal";
const test_suite =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/test-suite-1";
const web3 = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/web3";

const condition =
  system
    .arrayOfFoldersInDirectory(basePath)
    .filter((dirent) => dirent.name === noGit).length !== 0;

describe(`Method testRepo()`, () => {
  it(`should retrun true as the folder in which the command is run it's a git repo`, async () => {
    const res = await testRepo(processFolder);
    expect(res).to.be.true;
  });
  it("should return false as the newly created folder is not a git repo.", async () => {
    if (condition) deleteRecursiveDir(path);
    createNestedDir(path);
    const res = await testRepo(path);
    // log(res);
    expect(res).to.be.false;
    deleteRecursiveDir(path);
  });
  it(`should return false cause the folder is not the root of a Repo.`, async () => {
    const fail = () => "⛔️";
    const win = () => "✅";
    const todo = () => "🚧";
    const node = "@zionstate_node";
    const js = "@zionstate_js";
    const zion = "@zionstate";
    const SYSTEM = "system";
    const UTIL = "util";
    const NODEFE = "@types/node-fetch";
    const UUIDT = "@types/uuid";
    const INQUIT = "@types/inquirer";
    const CHAIT = "@types/chai-as-promised";
    const DOTENV = "dotenv";
    const AUDSDK = "@audius/sdk";
    const WEB3 = "web3";
    const UUID = '"uuid"';
    const OCTO = "@octokit/rest";
    const SIMPLE = "simple-git";
    const CHO = "chokidar";
    const CHALK = "chalk-pipe";
    const CMDFY = "cmdify";
    const INQUI = "inquirer";
    const TERLI = "terminal-link";
    const CHAI = "chai";
    const CHAIP = "chai-as-promised";
    const MOCHA = "mocha";
    const SIN = "sinon";
    const ETH = "ethers";
    const ZKSYNC = "zkSync";

    const TERMINALARRAY = [CHALK, CMDFY, INQUI, TERLI, INQUIT];
    const TEST = [CHAI, CHAIT, CHAIP, MOCHA, SIN];

    const array = [
      ["crypto", crypto, true, fail(), win(), [SYSTEM], node],
      ["emitter", emitter, true, win(), todo(), [SYSTEM], node],
      ["node-fetch", node_fetch, true, fail(), todo(), [NODEFE, SYSTEM], node],
      ["process", processPath, true, fail(), undefined, [SYSTEM], node],
      ["zionUtil", zionUtil, true, fail(), todo(), [UTIL, SYSTEM], node],
      ["error", error, true, fail(), todo(), [SYSTEM, DOTENV], js],
      ["regexp", regexp, true, win(), win(), [SYSTEM], js],
      ["url", url, true, fail(), todo(), [SYSTEM], js],
      ["audius", audius, true, fail(), todo(), [AUDSDK, WEB3], zion],
      ["auth", auth, true, win(), todo(), ["too long"], zion],
      ["base", base, true, win(), todo(), [UUID, UUIDT], zion],
      ["catering", cat, true, win(), todo(), [], zion],
      ["generator", gen, true, fail(), todo(), [], zion],
      ["git", git, true, fail(), todo(), [OCTO, DOTENV, SIMPLE], zion],
      ["label", label, true, fail(), undefined, [], zion],
      ["learn", learn, true, fail(), todo(), [], zion],
      ["minter", minter, true, win(), todo(), [], zion],
      ["mixins", mixins, fail(), fail(), fail(), fail(), fail()],
      ["system", systemPath, true, fail(), todo(), [CHO], zion],
      ["terminal", terminal, true, win(), todo(), TERMINALARRAY, zion],
      ["test-suite-1", test_suite, true, fail(), todo(), TEST, zion],
      ["web3", web3, true, win(), todo(), [ETH, ZKSYNC, WEB3], zion],
    ];
    const mapped = array.map(async (pacchetto) => {
      const isRoot = await testRepo(pacchetto[1]);
      const hasTypesInConfig = pacchetto[2];
      const isWorking = pacchetto[3];
      const isCommitted = pacchetto[4];
      const dependencies = pacchetto[5];
      const packageName = pacchetto[6];
      return {
        name: pacchetto[0],
        packageName,
        isRoot: isRoot ? true : fail(),
        hasTypesInConfig,
        isWorking,
        isCommitted,
        dependencies: dependencies.length,
      };
    });
    const res = await Promise.all(mapped);
    const fails = res.filter((r) => r.isWorking === fail()).length - 1;
    const wins = res.filter((r) => r.isWorking === win()).length;
    res.push({ isWorking: { wins, fails } });
    console.table(res);
  });
});
