// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../IGovernor.sol";
import "../GovernorBase.sol";

abstract contract Propose is GovernorBase {
    using Timers for Timers.BlockNumber;
    using SafeCast for uint256;

    function proposalThreshold() public view virtual returns (uint256) {
        return 0;
    }

    function propose(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    ) public virtual returns (uint256) {
        require(
            getVotes(msg.sender, block.number - 1) >= proposalThreshold(),
            "GovernorCompatibilityBravo: proposer votes below proposal threshold"
        );

        uint256 proposalId = hashProposal(
            targets,
            values,
            calldatas,
            keccak256(bytes(description))
        );

        require(
            targets.length == values.length,
            "Governor: invalid proposal length"
        );
        require(
            targets.length == calldatas.length,
            "Governor: invalid proposal length"
        );
        require(targets.length > 0, "Governor: empty proposal");

        ZionLib.ProposalCore storage proposal = _proposals[proposalId];
        require(
            proposal.voteStart.isUnset(),
            "Governor: proposal already exists"
        );

        uint64 snapshot = block.number.toUint64() + votingDelay().toUint64();
        uint64 deadline = snapshot + votingPeriod().toUint64();

        proposal.voteStart.setDeadline(snapshot);
        proposal.voteEnd.setDeadline(deadline);

        emit ZionLib.ProposalCreated(
            proposalId,
            _msgSender(),
            targets,
            values,
            new string[](targets.length),
            calldatas,
            snapshot,
            deadline,
            description
        );

        return proposalId;
    }
}
