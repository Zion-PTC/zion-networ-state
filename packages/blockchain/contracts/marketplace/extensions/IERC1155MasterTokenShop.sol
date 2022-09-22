// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../IERC1155TokenShop.sol";

interface IERC1155MasterTokenShop is IERC1155TokenShop {


    function getCurrentDividendId() external view returns(uint256);

    function setShopStatus(uint256 id)
        external;

    function buyTokens(bytes memory data) external;

    function capitalOfAt(address account, uint256 dividendId)
        external
        view
        returns (uint256);

    function dividend() external;

    function totalCapital() external view returns (uint256 capital);

    function totalCapitalAt(uint256 dividendId)
        external
        view
        returns (uint256);
    

}
