require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  networks: {
    // ganache: {
    //   url: "HTTP://127.0.0.1:7545",
    //   accounts: {
    //     mnemonic:
    //       "tag palace accident hidden delay escape involve fetch mushroom corn settle doctor",
    //     path: "m/44'/60'/0'/0",
    //     initialIndex: 0,
    //     count: 10,
    //   },


module.exports = {
  networks: {
    // ethereum: {
    //   url: "https://rpc.flashbots.net",
    //   accounts: {
    //     mnemonic:
    //       "tag palace accident hidden delay escape involve fetch mushroom corn settle doctor",
    //     path: "m/44'/60'/0'/0",
    //     initialIndex: 0,
    //     count: 10,
    //   },
    networks: {
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: {
    //     mnemonic:
    //       "tag palace accident hidden delay escape involve fetch mushroom corn settle doctor",
    //     path: "m/44'/60'/0'/0",
    //     initialIndex: 0,
    //     count: 10,
    //   },

     //   chainId: 1337,
    // },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      gasPrice: 36000000000,
      accounts: [`0x${process.env.POLYGON_PRIVATE_KEY}`],
    },
    harmonytest: {
      url: `https://api.s0.b.hmny.io`,
      gas: 56000000000,
      accounts: [`0x${process.env.HARMONY_PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.4",
};

export {};
    
    //   chainId: 137,
    // },
    mainnet: {
      url: `https://polygon-rpc.com`,
      gasPrice: 36000000000,
      accounts: [`0x${process.env.POLYGON_PRIVATE_KEY}`],
    },
    harmonymainnet: {
      url: 'https://api.harmony.one',
      gas: 56000000000,
      accounts: [`0x${process.env.HARMONY_PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.4",
};

export {};
