const hre = require("hardhat");
async function main() {
  const accounts = await ethers.getSigners();
  [user, add1, add2, add3, add4, _] = accounts;
  //Deployed MiniLoan
  const MiniLoan = await hre.ethers.deployContract("MiniLoan", [
    process.env.DEPLOYER_ADDRESS,
  ]);
  await MiniLoan.waitForDeployment();
  console.log("MiniLoan", MiniLoan.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
