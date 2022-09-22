import { testEnvironment } from "@zionstate/test";

const { expect, log } = testEnvironment();

describe(`Method getFunctionArgs()`, () => {
  it(`it should return the 2 arguments of the function in which it is called`, () => {
    function doo(arg1, arg2) {
      console.log(arguments);
    }
    log(doo(1, 2));
  });
});
