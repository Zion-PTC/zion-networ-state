// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../GovernorBase.sol";

abstract contract Deadline is GovernorBase {
    using Timers for Timers.BlockNumber;

    function proposalDeadline(uint256 proposalId)
        public
        view
        virtual
        returns (uint256)
    {
        return _proposals[proposalId].voteEnd.getDeadline();
    }
}
