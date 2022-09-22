import { testEnvironment } from "@zionstate/test";
import { Octokit } from "@octokit/rest";
import { ZionGitHub } from "@zionstate/git";
import { config } from "dotenv";
import {} from "mocha";
config();

const { expect, log, slow } = testEnvironment();
const github = new ZionGitHub(process.env.TOKEN);
const gitubFromOctoKit = new Octokit({ auth: process.env.TOKEN });
const testRepoName = "_test_repo_node";
const myAccount = "giacomogagliano";
const userOrg = "Zion-PTC";

describe(`GitHub Class`, () => {
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
  describe(`INSTANCE METHODS}`, () => {
    describe(`Method getRepos()`, () => {
      it(`it should retrieve the list of Repos of the authenticated account, the result is a tuple [account,repo_name]`, async () => {
        const allRepos = await github.getRepos();
        let accounts = new Set();
        allRepos.forEach((res) => accounts.add(res[0]));
        expect(allRepos.length).to.be.not.equal(0);
      }).timeout(5000);
    });
    describe(`Method createRepoForAuthUser()`, () => {
      it(`it should create a repo with the name '${testRepoName}'`, async () => {
        // recupero la lista dei repo nel mio account
        let res1 = await gitubFromOctoKit.paginate(
          gitubFromOctoKit.repos.listForAuthenticatedUser
        );
        // se il repo esiste lo cancello
        if (res1.map((r) => r.name).includes(testRepoName))
          await gitubFromOctoKit.repos.delete({
            owner: myAccount,
            repo: testRepoName,
          });
        // creo un repo
        await github.createRepoForAuthUser(testRepoName);
        log("Repo was created");
        // richiedo la lista dei repo
        let res2 = await gitubFromOctoKit.paginate(
          gitubFromOctoKit.repos.listForAuthenticatedUser
        );
        // mappo i nomi
        let mapped = res2.map((res) => res.name);
        //
        const includesRepo = mapped.includes(testRepoName);
        expect(includesRepo).to.be.true;
        let options = {};
        options.owner = myAccount;
        options.repo = testRepoName;
        await gitubFromOctoKit.repos.delete(options);
        log("Repo was deleted");
      }).timeout(10000);
    });
    describe(`Method createRepoForOrg()`, () => {
      it(`it should create a repo for one of the orgs of the user`, async () => {
        // richiedo la lista dei repo
        const res = await gitubFromOctoKit.paginate(
          gitubFromOctoKit.repos.listForAuthenticatedUser
        );
        const mapped = res.map((res) => res.name);
        // controllo se include il repo da creare
        const condition = mapped.includes(testRepoName);
        // se esiste lo cancello
        let options = {};
        options.owner = userOrg;
        options.repo = testRepoName;
        if (condition) await gitubFromOctoKit.repos.delete(options);
        // se non esiste lo creo
        let createOptions = {};
        createOptions.org = userOrg;
        createOptions.name = testRepoName;
        await github.createRepoForOrg("zionPTC", testRepoName);
        log("Repo created with success");
        // ricontrollo la lista di repo
        const res2 = await gitubFromOctoKit.paginate(
          gitubFromOctoKit.repos.listForAuthenticatedUser
        );
        const mapped2 = res2.map((res) => res.name);
        const condition2 = mapped2.includes(testRepoName);
        expect(condition2).to.be.true;
        await gitubFromOctoKit.repos.delete(options);
        log("Repo was deleted succesfully");
      }).timeout(10000);
    });
    describe(`Method deleteRepo()`, () => {
      it(`it should delete a repo from the user account`, async () => {
        //
        // richiedo la lista di repo
        const pag = gitubFromOctoKit.paginate;
        const repos = gitubFromOctoKit.repos;
        const deleteIt = repos.delete;
        const list = repos.listForAuthenticatedUser;
        const res1 = await pag(list);
        const map1 = res1.map((res) => res.name);
        const condition1 = map1.includes(testRepoName);
        let deleteOptions = {};
        deleteOptions.owner = myAccount;
        deleteOptions.repo = testRepoName;
        // se il repo esiste lo cancello
        if (condition1) await deleteIt(deleteOptions);
        // creo il repo da far cancellare al nostro metodo
        let createOptions = {};
        createOptions.name = testRepoName;
        await repos.createForAuthenticatedUser(createOptions);
        log("Repo was created with success");
        // richiedo la lista
        let res2 = await pag(list);
        const map2 = res2.map((res) => res.name);
        const condition2 = map2.includes(testRepoName);
        expect(condition2).to.be.true;
        await github.deleteRepo("giacomogagliano", testRepoName);
        log("Repo deleted with success!!!");
        const res3 = await pag(list);
        const map3 = res3.map((res) => res.name);
        const condition3 = map3.includes(testRepoName);
        expect(condition3).to.be.false;
      }).timeout(13000);
    });
  });
});
