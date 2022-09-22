// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../IGovernor.sol";
import "../../GovernorBase.sol";
import "../State.sol";

abstract contract Cancel is GovernorBase, State {
    function _cancel(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal virtual returns (uint256) {
        uint256 proposalId = hashProposal(
            targets,
            values,
            calldatas,
            descriptionHash
        );
        IGovernor.ProposalState status = state(proposalId);

        require(
            status != IGovernor.ProposalState.Canceled &&
                status != IGovernor.ProposalState.Expired &&
                status != IGovernor.ProposalState.Executed,
            "Governor: proposal not active"
        );
        _proposals[proposalId].canceled = true;

        emit ZionLib.ProposalCanceled(proposalId);

        return proposalId;
    }
}
