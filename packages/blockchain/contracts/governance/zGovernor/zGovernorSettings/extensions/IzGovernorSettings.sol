// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../../zion/interfaces/Methods.sol";
import "../IPrivatezGovernorSettings.sol";

interface IzGovernorSettings is
    IPrivatezGovernorSettings,
    VotingDelay,
    VotingPeriod,
    ProposalThreshold,
    SetVotingDelay,
    SetVotingPeriod,
    SetPropostalThreshold
{}
