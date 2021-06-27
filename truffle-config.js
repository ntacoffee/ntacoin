var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Ganache port
      network_id: "*",       // Any network
    },
    mainnet: {
      provider: new HDWalletProvider(
        process.env.MNEMONIC,
        `wss://mainnet.infura.io/ws/v3/` + process.env.INFURA_KEY
      ),
      gasPrice: 5000000000,
      network_id: "*"
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
