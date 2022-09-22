// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../ERC1155/zERC1155/zERC1155.sol";
import "../ERC1155/extensions/IERC1155Receiver.sol";

// Product
abstract contract C is zERC1155 {

}

// SubProduct
abstract contract Z is zERC1155, IERC1155Receiver {
    // type tuple is [address,uint256]
    C[] public baseContracts;
    mapping(C => uint256[]) baseContractsIds;
}

interface IGovernance {}

// Creator
abstract contract P is zERC1155, IGovernance, IERC1155Receiver {
    C[] public baseContracts;
    mapping(C => uint256[]) baseContractsIds;
    Z[] public baseZContracts;
    mapping(Z => uint256[]) baseZContractsIds;
    IGovernance governance;

    function addBaseContract() public virtual;
}

abstract contract PPro is zERC1155, IGovernance, IERC1155Receiver {
    mapping(C => uint256[]) baseContractsIds;
    mapping(Z => uint256[]) baseZContractsIds;
    IGovernance governance;

    function create() public virtual;
}

contract ZNFT {}
