// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IzGovernorSettings.sol";
import "../PrivatezGovernorSettings.sol";

abstract contract zGovernorSettings is
    IzGovernorSettings,
    PrivatezGovernorSettings
{
    function votingDelay()
        public
        view
        virtual
        override(VotingDelay, zGovernor)
        returns (uint256)
    {
        return _votingDelay();
    }

    function votingPeriod()
        public
        view
        virtual
        override(VotingPeriod, zGovernor)
        returns (uint256)
    {
        return _votingPeriod();
    }

    function proposalThreshold()
        public
        view
        virtual
        override(ProposalThreshold, zGovernor)
        returns (uint256)
    {
        return _proposalThreshold();
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
