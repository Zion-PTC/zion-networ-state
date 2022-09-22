import git from "@zionstate/git";
import { testEnvironment } from "@zionstate/test";
import { FS } from "@zionstate/database";
const { system } = FS;

const { expect, log } = testEnvironment();
const { createNestedDirm, deleteRecursiveDir } = system;
const hasRemote = git.repoHasRemote;

const gitPackageFolder = process.cwd();

const zionFolderPath = "/Users/WAW/Documents/Projects/ZION";
const kubForderInZion = "/Users/WAW/Documents/Projects/ZION/kubernetes";
const gitPackZionPath =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/git";
const basePackZionPath =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/base";

describe(`Method repoHasRemote()`, () => {
  it(`lancia un errore quando si testa una cartella in packages che non ha un remote`, async () => {
    await expect(hasRemote(gitPackZionPath)).to.be.rejected;
  });
  it(`ritorna true quando si testa una cartella contenuta in un Repo che ha un remote`, async () => {
    let res = await hasRemote(kubForderInZion);
    expect(res).to.be.true;
  }).timeout(2000);
  it(`ritorna true quando si testa una cartella in packages che ha un remote`, async () => {
    let res = await hasRemote(basePackZionPath);
    expect(res).to.be.true;
  }).timeout(2000);
});
