var Migrations = artifacts.require("Adoption");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
