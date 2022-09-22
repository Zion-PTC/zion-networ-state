// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../oz/access/Ownable.sol";
import "../../oz/utils/Context.sol";
import "../../oz/governance/Governor.sol";
import "../ERC1155/extensions/ERC1155Votes.sol";
import "./IZNFT.sol";

abstract contract ZNFT is IZNFT, Governor, Ownable {

    address private _ERC20TotalSupplyLock;
    address private _ERC1155ShareSupplyLock;

    address private _znftGovernor;
    address private _creatorsGovernor;
    address private _teamGovernor;
    address private _daoGovernor;

    address private _shareStake;
    address private _creatorsStake;
    address private _teamStake;
    address private _daoStake;

    address private _ERC20TokenShop;
    address private _ERC1155ShareTokenShop;

}
