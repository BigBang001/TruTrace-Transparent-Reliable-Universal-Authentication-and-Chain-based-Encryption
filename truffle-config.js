const path = require("path");

module.exports = {
  // Specify the network configuration
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Match any network id (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider("your-mnemonic-here", `https://ropsten.infura.io/v3/your-infura-id`),
      network_id: 3,        // Ropsten's network id
      gas: 5500000,         // Gas limit
      confirmations: 2,     // Number of confirmations to wait between deployments
      timeoutBlocks: 200,   // Number of blocks before a deployment times out
      skipDryRun: true,     // Skip dry run before migrations
    },
    mainnet: {
      provider: () => new HDWalletProvider("your-mnemonic-here", `https://mainnet.infura.io/v3/your-infura-id`),
      network_id: 1,        // Mainnet's network id
      gasPrice: 20000000000, // Gas price in gwei
    },
  },

  // Configure compilers (solidity version)
  compilers: {
    solc: {
      version: "0.8.0",     // Specify the version of Solidity to use
      settings: {
        optimizer: {
          enabled: true,    // Enable the optimizer
          runs: 200,        // Number of times to optimize (default: 200)
        },
      },
    },
  },

  // Set the build directory
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  // Configure paths for artifacts and migrations
  migrations_directory: path.join(__dirname, "migrations"),

  // Enable the debugger (optional)
  debug: true,
};
