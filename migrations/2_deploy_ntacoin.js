const ntacoin = artifacts.require("NtacoTokenERC20");

module.exports = function (deployer) {
  const initSupply = 1000000;

  deployer.deploy(ntacoin, initSupply);
};
