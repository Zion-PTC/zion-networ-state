import { testEnvironment } from "@zionstate/test";
import { simpleGit } from "simple-git";
import { initRepo } from "@zionstate/git";
import { FS } from "@zionstate/database";
const { system } = FS;

const { expect, log } = testEnvironment();
const { deleteRecursiveDir, createNestedDir, joinPaths } = system;

const basePath = "/Users/WAW/Documents/Projects";
const noGit = "noGit";
const path = joinPaths([basePath, noGit]);

const condition =
  system
    .arrayOfFoldersInDirectory(basePath)
    .filter((dirent) => dirent.name === noGit).length !== 0;

describe("initRepo() function.", () => {
  it("should create a folder and initialize a repo in it.", async () => {
    if (condition) deleteRecursiveDir(path);
    createNestedDir(path);
    const res = await initRepo(path);
    // ts funziona!
    expect(res.bare).to.be.false;
    // we use simplegit package to ensure the proper
    // functioning of the method.
    const res1 = await simpleGit(path).checkIsRepo();
    expect(res1).to.be.true;
    deleteRecursiveDir(path);
  });
});
