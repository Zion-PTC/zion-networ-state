// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../GovernorBase.sol";

abstract contract Executor is GovernorBase {
    modifier onlyGovernance() {
        require(_msgSender() == _executor(), "Governor: onlyGovernance");
        _;
    }

    function _executor() internal view virtual returns (address) {
        return address(this);
    }
}
