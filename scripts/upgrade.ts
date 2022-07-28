import { ethers, upgrades } from "hardhat";


async function main() {
  const Box2 = await ethers.getContractFactory("Box2");
  const box = await upgrades.upgradeProxy('0xd393AF00981034f11231827554F48A21dab9A91F', Box2)
  console.log("Upgraded at:", box.address);
  console.log("Admin:", await upgrades.erc1967.getAdminAddress(box.address));
  console.log("Implementation:", await upgrades.erc1967.getImplementationAddress(box.address));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
