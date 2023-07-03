require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/c06b3254dd3e4142854565e8efdd3c13",
      accounts: [
        "622e4223eae1e262a351af208ae143ea7ed43a530f20e4a181e10f9029fa91e7",
      ],
    },
  },
};
