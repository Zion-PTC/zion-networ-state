import { testEnvironment } from "@zionstate/test";
import { simpleGit } from "simple-git";
import { repoStatus, testRepo } from "@zionstate/git";
import { FS } from "@zionstate/database";
const { system } = FS;

const { expect, log } = testEnvironment();
const { deleteRecursiveDir, createNestedDir, joinPaths } = system;

const basePath = "/Users/WAW/Documents/Projects";
const noGit = "noGit2";
const path = joinPaths([basePath, noGit]);
const processPath = process.cwd();

const condition =
  system
    .arrayOfFoldersInDirectory(basePath)
    .filter((dirent) => dirent.name === noGit).length !== 0;

describe(`Method repoStatus()`, () => {
  it(`dovrebbe ritornare un oggetto contente le informazioni sul repo corrente`, async () => {
    const isRepo = await simpleGit(processPath).checkIsRepo();
    expect(isRepo).to.be.true;
    const res = await repoStatus(processPath);
    const test1 = Object.keys(res).includes("files");
    const test2 = Object.keys(res).includes("detached");
    expect(test1).to.be.true;
    expect(test2).to.be.true;
  });
  it("should throw an error cause folder is not a git repo", async () => {
    if (condition) deleteRecursiveDir(path);
    createNestedDir(path);
    console.log(testRepo(path));
    await expect(repoStatus(path)).to.be.rejectedWith("Path is not a repo");
    deleteRecursiveDir(path);
  });
});

async function pause(sec) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), sec * 1000);
  });
}
