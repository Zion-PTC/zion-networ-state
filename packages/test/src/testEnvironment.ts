import chai, { expect } from "chai";
import promise from "chai-as-promised";
import Mocha from "mocha";
import { debuglog, DebugLogger } from "util";

chai.use(promise);

export type testEnvironmentReturn = {
  expect: Chai.ExpectStatic;
  log: DebugLogger;
};

/**
 *
 * @returns
 */
export const testEnvironment = (
  amount: number = 1000
): testEnvironmentReturn => {
  const testRunner = new Mocha({ slow: amount });
  testRunner.suite.emit("pre-require", global, "nofile", testRunner);
  var suiteRun = testRunner.run();
  process.on("exit", code => {
    // FIX not sure of this one
    process.exit(suiteRun.stats ? (suiteRun.stats.failures > 0 ? 1 : 0) : code);
  });
  let log = debuglog("log");
  return {
    expect,
    log,
  };
};
