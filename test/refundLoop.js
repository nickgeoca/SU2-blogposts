const RefundLoop = artifacts.require("RefundLoop");

contract("RefundLoop", accounts => {
  const userCount = 120;

  it("gas usage for loop", async () => {
    const instance = await RefundLoop.deployed();
    instance.sendTransaction({from:accounts[0],value:1000000000})

    await instance.insertContribs(userCount);
    const tx = await instance.refundLoop(userCount);

    console.log('')
    console.log('Arkadia Refund Loop Report:')
    console.log('https://su2.io/blog/2018/3/27/arkadia-security-audit')
    console.log('Number of users:')
    console.log('---->', userCount);
    console.log('Gas used per user:')
    console.log('---->', tx.receipt.gasUsed / userCount);
    console.log('Number of users before out of gas (8M gas cap):');
    console.log('---->', 8000000 / (tx.receipt.gasUsed / userCount));
    console.log('')
  });
});
