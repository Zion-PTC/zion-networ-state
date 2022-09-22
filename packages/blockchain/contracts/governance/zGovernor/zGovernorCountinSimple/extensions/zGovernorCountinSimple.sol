// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IzGovernorCountinSimple.sol";
import "../PrivatezGovernorCountinSimple.sol";

abstract contract zGovernorCountinSimple is
    IzGovernorCountinSimple,
    PrivatezGovernorCountinSimple
{
    function COUNTING_MODE()
        public
        pure
        virtual
        override(zGovernor)
        returns (string memory)
    {
        return "support=bravo&quorum=for,abstain";
    }

    function hasVoted(uint256 proposalId, address account)
        public
        view
        virtual
        override(zGovernor)
        returns (bool)
    {
        return _proposalVotes(proposalId).hasVoted[account];
    }

    function proposalVotes(uint256 proposalId)
        public
        view
        virtual
        returns (
            uint256 againstVotes,
            uint256 forVotes,
            uint256 abstainVotes
        )
    {
        ProposalVote storage proposalvote = _proposalVotes(proposalId);
        return (
            proposalvote.againstVotes,
            proposalvote.forVotes,
            proposalvote.abstainVotes
        );
    }
}
