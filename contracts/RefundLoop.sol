pragma solidity >=0.4.18;


contract Test {
  mapping (address => uint) balances;
  mapping (uint => address) contributorsList;
  event Refunded (address, uint, string);

  function () payable external {}

  function insertContribs(uint userCount) public {
    for (uint256 i = 0; i < userCount; i++) {
      address user = address(100000 + i);
      contributorsList[i] = user;
      balances[user] = i + 1;
    }
  }

  function refundLoop(uint userCount) public {
    uint256 amount;
    address payable user;

    for (uint256 i = 0; i < userCount; i++) {
      user = address(uint160(contributorsList[i]));  // +200
      amount = balances[user];                       // +200

      // Every loop sends eth
      require(amount != 0);
      require(user.send(amount));                    // +22000

      // Clear balance
      emit Refunded(user, amount, "User refunded");  // +1500
      delete balances[user];                         // -10000
    }
  }
}
