import { testEnvironment } from "@zionstate/test";
import { ZionGit } from "@zionstate/git";
import { FS } from "@zionstate/database";
const { system } = FS;

const { expect, log } = testEnvironment();
const {
  deleteRecursiveDir,
  createNestedDir,
  joinPaths,
  arrayOfFoldersInDirectory,
} = system;

const zionPath = "/Users/WAW/Documents/Projects/ZION";
const zionGit = new ZionGit(zionPath);

const basePath = "/Users/WAW/Documents/Projects";
const hasRemote = "hasRemote";
const path = joinPaths([basePath, hasRemote]);
const condition =
  arrayOfFoldersInDirectory(basePath).filter((e) => e.name === hasRemote)
    .length !== 0;

describe(`Method hasRemote`, () => {
  it(`should return true cause the Zion repo has a remote git`, async () => {
    let res = await zionGit.hasRemote();
    expect(res).to.be.true;
  });
  it(`should return false cause the newly create folder has no remote`, async () => {
    if (condition) deleteRecursiveDir(path);
    createNestedDir(path);
    const hasRemoteGit = new ZionGit(path);
    await expect(hasRemoteGit.hasRemote()).to.be.rejectedWith(
      "No remote configured to list refs from."
    );
    deleteRecursiveDir(path);
  });
});
