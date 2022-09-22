import { testEnvironment } from "@zionstate/test";
import { ZionGit } from "@zionstate/git";

const { expect, log } = testEnvironment();

const path = process.cwd();

describe(`Git Class`, async () => {
  let git = new ZionGit(path);
  let res = await git.git.status();
  log(res);
  // describe(`CONSTRUCTOR`, () => {
  //   it(`task description`, () => {});
  // });
  // describe(`STATIC PROPERTIES`, () => {
  //   describe(`Property property name`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
  // describe(`STATIC METHODS}`, () => {
  //   describe(`Method methodName`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
  // describe(`INSTANCE PROPERTIES`, () => {
  //   describe(`Property property name`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
  // describe(`INSTANCE METHODS}`, () => {
  //   describe(`Method methodName`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
});
