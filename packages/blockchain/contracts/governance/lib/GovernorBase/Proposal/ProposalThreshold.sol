// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../Propose.sol";

abstract contract ProposalThreshold is Propose {
    uint256 private _proposalThreshold;

    function proposalThreshold()
        public
        view
        virtual
        override
        returns (uint256)
    {
        return _proposalThreshold;
    }

    function _setProposalThreshold(uint256 newProposalThreshold)
        internal
        virtual
    {
        emit ZionLib.ProposalThresholdSet(
            _proposalThreshold,
            newProposalThreshold
        );
        _proposalThreshold = newProposalThreshold;
    }
}
