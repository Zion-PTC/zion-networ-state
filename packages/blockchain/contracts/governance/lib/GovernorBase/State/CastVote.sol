// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../IGovernor.sol";
import "../../GovernorBase.sol";
import "../State.sol";
import "./CountVote.sol";

abstract contract CastVote is GovernorBase, State, CountVote {
    using Timers for Timers.BlockNumber;

    function _castVote(
        uint256 proposalId,
        address account,
        uint8 support,
        string memory reason
    ) internal virtual returns (uint256) {
        ZionLib.ProposalCore storage proposal = _proposals[proposalId];
        require(
            state(proposalId) == IGovernor.ProposalState.Active,
            "Governor: vote not currently active"
        );

        uint256 weight = getVotes(account, proposal.voteStart.getDeadline());
        _countVote(proposalId, account, support, weight);

        emit ZionLib.VoteCast(account, proposalId, support, weight, reason);

        return weight;
    }
}
