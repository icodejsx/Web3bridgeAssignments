import { ethers } from "hardhat";

async function main(): Promise<void> {
  const MyContract = await ethers.getContractFactory("SaveEther");
  const contract = await MyContract.deploy();

  await contract.waitForDeployment();

  console.log(`Contract deployed to: ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});