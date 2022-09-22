// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../IGovernor.sol";
import "../../zion/lib/ZionLib.sol";

abstract contract IGovernorBase {
    function name() public view virtual returns (string memory);

    function version() public view virtual returns (string memory);

    // solhint-disable-next-line func-name-mixedcase
    function COUNTING_MODE() public pure virtual returns (string memory);

    function getVotes(address account, uint256 blockNumber)
        public
        view
        virtual
        returns (uint256);

    function votingDelay() public view virtual returns (uint256);

    function votingPeriod() public view virtual returns (uint256);

    function quorum(uint256 blockNumber) public view virtual returns (uint256);
}

abstract contract GovernorBase is Context, IGovernorBase, EIP712 {
    using SafeCast for uint256;
    using Timers for Timers.BlockNumber;

    string internal _name;
    mapping(uint256 => ZionLib.ProposalCore) internal _proposals;

    bytes32 public constant BALLOT_TYPEHASH =
        keccak256("Ballot(uint256 proposalId,uint8 support)");

    function hashProposal(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) public pure virtual returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encode(targets, values, calldatas, descriptionHash)
                )
            );
    }

    function name() public view virtual override returns (string memory) {
        return _name;
    }

    function version() public view virtual override returns (string memory) {
        return "1";
    }
}
