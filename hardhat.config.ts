import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: "0.8.13",
  networks: {
    development: {
      url: 'HTTP://127.0.0.1:8545'
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts: ['<PRIVATE KEY>']
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/fe319c3266b34bfcb1e0a5f4dd003abf',
      accounts: ['<PRIVATE KEY>']
    }
  },
  etherscan: {
    apiKey: '<YOUR ETHERSCAN API KEY>'
  }
};

export default config;
