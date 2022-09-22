// SPDX-License-Identifier: MIT
// Tweaked version to avoid storage conflict
// OpenZeppelin Contracts v4.3.2 (token/ERC721/IERC721.sol)

pragma solidity ^0.8.0;

import "../../oz/utils/introspection/IERC165.sol";

interface IERC721 is IERC165 {

    struct TokenTransfer {
        address operator;
        address from;
        address to;
        uint256 tokenId;
        bytes data;
    }

  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
  event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
  event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

  function balanceOf(address owner) external view returns(uint256 balance);
  function ownerOf(uint256 tokenId) external view returns(address owner);
  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId
  ) external;
  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) external;
  function approve(address to, uint256 tokenId) external;
  function getApproved(uint256 tokenId) external view returns(address operator);
  function setApprovalForAll(address operator, bool _approved) external;
  function isApprovedForAll(address owner, address operator) external returns(bool);
  function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
}