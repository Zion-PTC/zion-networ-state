// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../GovernorBase.sol";

abstract contract VotingPeriod is GovernorBase {
    uint256 private _votingPeriod;

    function votingPeriod() public view virtual override returns (uint256) {
        return _votingPeriod;
    }

    function _setVotingPeriod(uint256 newVotingPeriod) internal virtual {
        // voting period must be at least one block long
        require(newVotingPeriod > 0, "GovernorSettings: voting period too low");
        emit ZionLib.VotingPeriodSet(_votingPeriod, newVotingPeriod);
        _votingPeriod = newVotingPeriod;
    }
}
