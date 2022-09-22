// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IPrivatezGovernorSettings {
    event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay);

    event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod);

    event ProposalThresholdSet(
        uint256 oldProposalThreshold,
        uint256 newProposalThreshold
    );
}
