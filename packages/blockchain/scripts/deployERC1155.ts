import { ethers } from "hardhat";
import { calculateTxCost } from "../src/lib/calculateTxCost";
import { printDeployLog } from "../src/lib/printDeployLog";
import { retrieveTxDatas } from "../src/lib/retrieveTxDatas";

const CONTRACTNAME = "ERC1155IndividualURI";
const FILEPATH = "./contract-deployment-ERC1155IndividualURI.json";

const DEPLOYMESS = "Deploying contracts with the account:";
const BALANCEMESS = "Account balance:";
const ADDMESS = "Token address: ";
const SUCCESSMESS = "Contract deployed succesfully. Log reported in file: ";

async function main() {
  const [deployer] = await ethers.getSigners();
  const balanceInEth = await deployer.getBalance();
  const balance = ethers.utils.formatEther(balanceInEth).toString();
  console.log(DEPLOYMESS + deployer.address);
  console.log(BALANCEMESS + balance);
  const Contract = await ethers.getContractFactory(CONTRACTNAME);
  const instance = await Contract.deploy("");
  console.log(instance);
  const data = retrieveTxDatas(instance.deployTransaction);
  const { chainId, gasPrice, blockHash, blockNumber, from, hash, gasLimit } =
    data;
  const txCost = calculateTxCost(gasLimit, gasPrice);
  const log = printDeployLog(
    FILEPATH,
    instance.address,
    chainId,
    gasPrice,
    blockHash,
    blockNumber,
    from,
    hash,
    gasLimit,
    txCost
  );
  console.log(ADDMESS + instance.address);
  console.log(SUCCESSMESS + FILEPATH);
  console.log(log);
  return log;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
