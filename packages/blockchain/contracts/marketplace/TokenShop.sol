// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;
import "../access/Ownable.sol";
import "../token/ERC20/IERC20.sol";
import "../utils/math/SafeMath.sol";

import "../zion_contracts/Membership.sol";

/**
 * @title TokenShop Contract v 0.0.1, proto version of a marketplace smart contract of the ZION® protocol.
 * this version will be mainly used to perform a pre-seed sale of the ZION token.
 *
 * @dev This token shop works based on a membership NFT access.
 * It will be de-activated once it will be update to a better integrated version.
 */

contract TokenShop is Ownable {
    ////////////////////
    // Constructor datas
    ////////////////////
    using SafeMath for uint256;
    Membership public membership;
    IERC20 public tokenContract;
    IERC20 public tokenUsedForPayement;
    uint256 public price;
    ////////////////////
    // Crowdsale Reports
    ////////////////////
    uint256 public raisedCapital;
    bool public crowdSaleOpen;

    mapping(address => uint256) public tokensBoughtByBuyer; ///@dev mapping addresses to balances of purchased tokens.

    enum CrowdSaleState {
        OPEN,
        CLOSED
    }

    event ShopCreated(
        address shopAddress,
        address owner,
        Membership membership,
        IERC20 tokenUsedForPayement,
        IERC20 tokenContract,
        uint256 price
    );
    event Sold(address buyer, uint256 amount);
    event PriceChanged(address submitter, uint256 newPrice);
    event TokenOnSaleWithdrawal(address submitter, uint256 amount);
    event CapitalWithdrawal(address submitter, uint256 amount);

    /// @dev Constructor of the contracts takes in address of the owner, so that deployer can transfer ownership on deploy.
    /// @param owner will have rights over all of the contract functions.
    /// @param membership_ is the contract address of the membership token.
    /// @param tokenUsedForPayement_ is the contract address of the token used for payments.
    /// @param tokenContract_ is the address of the contract for the token which is going to be sold by this shop.
    /// @param price_ is the price of each unity of tokens.
    constructor(
        address owner,
        Membership membership_,
        IERC20 tokenUsedForPayement_,
        IERC20 tokenContract_,
        uint256 price_
    ) {
        membership = membership_;
        tokenUsedForPayement = tokenUsedForPayement_;
        tokenContract = tokenContract_;
        price = price_;
        transferOwnership(owner);
        emit ShopCreated(
            address(this),
            owner,
            membership,
            tokenUsedForPayement,
            tokenContract,
            price
        );
    }

    /// @dev modifier which checks if msg sender has a membership token.
    modifier onlyMembers() {
        require(
            membership.balanceOf(msg.sender, 0) != 0,
            "user is not yet Member of this DAO"
        );
        _;
    }

    /// @dev Function to check the balance of tokens to sell contained in this contract.
    function getContractBalanceOfToken() public view returns (uint256) {
        uint256 balance = tokenContract.balanceOf(address(this));
        return balance;
    }

    /// @dev function to get the current price at which the tokens is going to be sold.
    function getPrice() public view returns (uint256) {
        return price;
    }

    /// @dev function which sets the state of the crowd sale, it is called .
    function setCrowdSaleState() public onlyOwner returns (bool, bool) {
        uint256 balance = getContractBalanceOfToken();
        if (balance == 0) {
            crowdSaleOpen = false;
        } else {
            crowdSaleOpen = true;
        }
        return (true, crowdSaleOpen);
    }

    function setPrice(uint256 newPrice)
        public
        onlyOwner
        returns (bool, uint256)
    {
        price = newPrice;
        emit PriceChanged(msg.sender, newPrice);
        return (true, newPrice);
    }

    function buyTokens(uint256 amount)
        public
        onlyMembers
        returns (bool, uint256)
    {
        require(crowdSaleOpen, "Token sale is Currently closed");
        uint256 cost = amount * price;
        tokensBoughtByBuyer[msg.sender] += amount;
        raisedCapital += cost;
        tokenUsedForPayement.transferFrom(msg.sender, address(this), cost);
        tokenContract.transfer(msg.sender, amount);
        emit Sold(msg.sender, amount);
        return (true, amount);
    }

    function withdrawTokensOnSale(uint256 amount)
        external
        onlyOwner
        returns (bool, uint256)
    {
        tokenContract.transfer(msg.sender, amount);
        emit TokenOnSaleWithdrawal(msg.sender, amount);
        return (true, amount);
    }

    function withdrawRaisedCapital() public onlyOwner returns (bool) {
        _beforeWithdrawRaisedCapital();

        tokenUsedForPayement.transfer(msg.sender, raisedCapital);
        emit CapitalWithdrawal(msg.sender, raisedCapital);
        return true;
    }

    function _beforeWithdrawRaisedCapital() internal virtual {}

    /// CONTRACT TERMINATION BY RENOUNCE OWNERSHIP
    function renounceOwnership() public override onlyOwner {
        renounceOwnership();
    }
}
