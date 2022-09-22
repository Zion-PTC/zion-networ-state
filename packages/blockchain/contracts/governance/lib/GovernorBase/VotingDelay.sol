// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../GovernorBase.sol";

abstract contract VotingDelay is GovernorBase {
    uint256 private _votingDelay;

    function _setVotingDelay(uint256 newVotingDelay) internal virtual {
        emit ZionLib.VotingDelaySet(_votingDelay, newVotingDelay);
        _votingDelay = newVotingDelay;
    }
}
