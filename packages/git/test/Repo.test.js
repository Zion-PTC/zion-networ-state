import { testEnvironment } from "@zionstate/test";
import { Repo } from "@zionstate/git";

const { expect, log } = testEnvironment();

const path = process.cwd();

describe(`Repo Class`, async () => {
  let repo = new Repo(
    "git",
    "@zionstate/git",
    "/Users/WAW/Documents/Projects/ZION",
    process.env.TOKEN
  );
  log(await repo.status());
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
