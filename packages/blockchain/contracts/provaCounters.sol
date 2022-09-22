// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./oz/utils/Counters.sol";

contract provaCounters {
  using Counters for Counters.Counter;

  Counters.Counter public supply ;

  function increment() public {
    supply.increment();
  }

}