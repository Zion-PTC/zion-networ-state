// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../CastVote.sol";
import "../../State.sol";
import "../../../GovernorBase.sol";

abstract contract CastVoteWithReason is GovernorBase, State, CastVote {
    function castVoteWithReason(
        uint256 proposalId,
        uint8 support,
        string calldata reason
    ) public virtual returns (uint256) {
        address voter = _msgSender();
        return _castVote(proposalId, voter, support, reason);
    }
}
