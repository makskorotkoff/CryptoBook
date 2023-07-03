const hre = require("hardhat");

async function main() {
  const contactFactory = await hre.ethers.deployContract(
    "ContactFactory",
    [],
    {}
  );

  await contactFactory.waitForDeployment();

  console.log(`ContactFactory deployed to ${contactFactory.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/// address 0xB092f3c6ECaa3b974A482e9d1f9211C0Ddae468D
