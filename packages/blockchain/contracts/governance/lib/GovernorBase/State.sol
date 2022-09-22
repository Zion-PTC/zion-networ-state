// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../IGovernor.sol";
import "../GovernorBase.sol";

abstract contract State is GovernorBase {
    using Timers for Timers.BlockNumber;

    function state(uint256 proposalId)
        public
        view
        virtual
        returns (IGovernor.ProposalState)
    {
        ZionLib.ProposalCore memory proposal = _proposals[proposalId];

        if (proposal.executed) {
            return IGovernor.ProposalState.Executed;
        } else if (proposal.canceled) {
            return IGovernor.ProposalState.Canceled;
        } else if (proposal.voteStart.getDeadline() >= block.number) {
            return IGovernor.ProposalState.Pending;
        } else if (proposal.voteEnd.getDeadline() >= block.number) {
            return IGovernor.ProposalState.Active;
        } else if (proposal.voteEnd.isExpired()) {
            return
                _quorumReached(proposalId) && _voteSucceeded(proposalId)
                    ? IGovernor.ProposalState.Succeeded
                    : IGovernor.ProposalState.Defeated;
        } else {
            revert("Governor: unknown proposal id");
        }
    }

    function _quorumReached(uint256 proposalId)
        internal
        view
        virtual
        returns (bool);

    function _voteSucceeded(uint256 proposalId)
        internal
        view
        virtual
        returns (bool);
}
