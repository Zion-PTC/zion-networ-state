// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IzGovernorVotes.sol";
import "../PrivatezGovernorVotes.sol";

abstract contract zGovernorVotes is IzGovernorVotes, PrivatezGovernorVotes {
    function getVotes(address account, uint256 blockNumber)
        public
        view
        virtual
        override(IzGovernorVotes, zGovernor)
        returns (uint256)
    {
        return token.getPastVotes(account, blockNumber);
    }
}
