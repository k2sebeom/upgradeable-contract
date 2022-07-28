import { ethers, upgrades } from "hardhat";


async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [21], { initializer: 'initialize' });
  await box.deployed();

  console.log("Deployed to:", box.address);
  console.log("Admin:", await upgrades.erc1967.getAdminAddress(box.address));
  console.log("Implementation:", await upgrades.erc1967.getImplementationAddress(box.address));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
