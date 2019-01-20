Run `truffle test` to get data

## Arkadia Refund Loop Bug
* [Blog Post](https://su2.io/blog/2018/3/27/arkadia-security-audit)
* [Solidity](./contracts/RefundLoop.sol)
* [Data calculation](./test/refundLoop.js)
* Results: Greater than ~310 refunders will exceed gas limit, locking up the refund function.