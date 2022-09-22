// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../CastVote.sol";

abstract contract CastVoteSimple is CastVote {
    function castVote(uint256 proposalId, uint8 support)
        public
        virtual
        returns (uint256)
    {
        address voter = _msgSender();
        return _castVote(proposalId, voter, support, "");
    }
}
