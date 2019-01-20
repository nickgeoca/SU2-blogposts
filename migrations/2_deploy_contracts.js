const RefundLoop = artifacts.require("RefundLoop");

module.exports = function(deployer) {
  deployer.deploy(RefundLoop);
};
