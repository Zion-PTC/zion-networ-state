// SPDX-License-Identifier: MIT
// Tweaked version to be compatible with ERC1155Snapshot
// OpenZeppelin Contracts v4.3.2 (token/ERC1155/ERC1155.sol)

pragma solidity ^0.8.0;

interface IERC721Receiver {
  function onERC721Received (
    address operator,
    address from,
    uint256 tokenId,
    bytes calldata data
  ) external returns(bytes4);
}