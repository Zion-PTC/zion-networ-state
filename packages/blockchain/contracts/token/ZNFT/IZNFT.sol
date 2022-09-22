// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../oz/access/Ownable.sol";

interface IZNFT  {

    enum TokenTypes {
        MEMBERSHIP,
        SHARES,
        CREATORS,
        TEAM,
        DAO
    }

    enum Types {
        PROFILE,
        PRODUCT
    }

    enum Profile {
        USER,
        CREATOR,
        PROJECT
    }

    enum Promotion {
        INVITATION,
        SHAREVOUCER
    }

    struct zNFT {
        address owner;
        Types znftType;
    }

    function mintMembership(address recipient) external;

}
