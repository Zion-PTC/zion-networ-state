// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../IGovernor.sol";
import "../../GovernorBase.sol";
import "../Executor.sol";

abstract contract Receive is GovernorBase, Executor {
    receive() external payable virtual {
        require(_executor() == address(this));
    }
}
