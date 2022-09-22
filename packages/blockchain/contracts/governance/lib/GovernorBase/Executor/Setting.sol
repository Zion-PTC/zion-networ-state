// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../VotingDelay.sol";
import "../VotingPeriod.sol";
import "../Proposal/ProposalThreshold.sol";
import "../Executor.sol";

abstract contract newSettings is
    VotingDelay,
    VotingPeriod,
    ProposalThreshold,
    Executor
{
    constructor(
        uint256 initialVotingDelay,
        uint256 initialVotingPeriod,
        uint256 initialProposalThreshold
    ) {
        _setVotingDelay(initialVotingDelay);
        _setVotingPeriod(initialVotingPeriod);
        _setProposalThreshold(initialProposalThreshold);
    }

    function setVotingDelay(uint256 newVotingDelay) public onlyGovernance {
        _setVotingDelay(newVotingDelay);
    }

    function setVotingPeriod(uint256 newVotingPeriod) public onlyGovernance {
        _setVotingPeriod(newVotingPeriod);
    }

    function setProposalThreshold(uint256 newProposalThreshold)
        public
        onlyGovernance
    {
        _setProposalThreshold(newProposalThreshold);
    }
}
