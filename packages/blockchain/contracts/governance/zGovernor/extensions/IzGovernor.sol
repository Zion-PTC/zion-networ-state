// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../IPrivatezGovernor.sol";
import "../../../zion/interfaces/Methods.sol";

interface State {
    function state(uint256 proposalId)
        external
        view
        returns (Governor.ProposalState);
}

interface IzGovernorPartial is
    IPrivatezGovernor,
    Name,
    Version,
    HashProposal,
    ProposalSnapshot,
    ProposalDeadline
{}

interface IzGovernorModulesDependents is
    State,
    Propose,
    Execute,
    CastVote,
    CastVoteWithReason,
    CastVoteBySig
{}

interface IzGovernorModules is
    CountingMode,
    Quorum,
    HasVoted,
    GetVotes,
    VotingDelay,
    VotingPeriod
{}

interface IzGovernor is
    IPrivatezGovernor,
    IzGovernorPartial,
    IzGovernorModulesDependents,
    IzGovernorModules
{}