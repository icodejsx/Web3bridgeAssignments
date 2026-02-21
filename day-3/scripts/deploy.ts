import { ethers } from "hardhat";

async function main(): Promise<void> {
  // Deploy Contract 1
  const Contract1 = await ethers.getContractFactory("ERC20"); // replace with your contract names
  const contract1 = await Contract1.deploy();
  await contract1.waitForDeployment();
  console.log(`Contract1 deployed to: ${await contract1.getAddress()}`);

  // Deploy Contract 2
  const Contract2 = await ethers.getContractFactory("IERC20"); // replace with your contract names
  const contract2 = await Contract2.deploy();
  await contract2.waitForDeployment();
  console.log(`Contract2 deployed to: ${await contract2.getAddress()}`);

  // Deploy Contract 3
  const Contract3 = await ethers.getContractFactory("SaveAsset");
  const contract3 = await Contract3.deploy();
  await contract3.waitForDeployment();
  console.log(`Contract3 deployed to: ${await contract3.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});