// SPDX-License-Identifier: MIT
// Tweaked version of
// OpenZeppelin Contracts v4.3.2 (token/ERC20/extensions/ERC20Snapshot.sol)
// adapted for use with ERC1155

pragma solidity ^0.8.0;

import "../ERC1155.sol";
import "../../../oz/utils/Arrays.sol";
import "../../../oz/utils/Counters.sol";
import "hardhat/console.sol";


abstract contract ERC1155Snapshot is ERC1155 {
    // Inspired by Jordi Baylina's MiniMeToken to record historical balances:
    // https://github.com/Giveth/minimd/blob/ea04d950eea153a04c51fa510b068b9dded390cb/contracts/MiniMeToken.sol
    using Counters for Counters.Counter;

    Counters.Counter public counter;
    address public operator_;
    address public from_;
    address public to_;
    uint256[] public ids_;
    uint256[] public amounts_;
    bytes data_;

    function _beforeTokenTransfer(
        TokenTransfer memory newmint
    ) internal virtual override {
        super._beforeTokenTransfer(newmint);
        operator_ = newmint.operator;
        from_ = newmint.from;
        counter.increment();
    }

}
