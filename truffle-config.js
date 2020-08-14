const result = require("dotenv").config()
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = process.env.PASS;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, process.env.ROPSTEN_URL)
      },
      network_id: 3
    }
  }
};
