// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../token/ERC1155/extensions/ERC1155Receiver.sol";
import "../token/ERC20/IERC20.sol";
import "../token/ERC1155/IERC1155.sol";
import "../utils/math/SafeMath.sol";
import "../utils/Context.sol";

import "../zion_contracts/Membership.sol";
import "./IERC1155TokenShop.sol";

contract ERC1155TokenShop is IERC1155TokenShop, ERC1155Receiver, Context {
    ////////////////////
    // Constructor datas
    ////////////////////
    using SafeMath for uint256;
    Membership private _membership;
    ERC1155 private _tokenContract;
    IERC20 private _tokenUsedForPayement;
    uint256 private _price;
    ////////////////////
    // Crowdsale Reports
    ////////////////////
    uint256 private _raisedCapital;
    Status private _shopStatus;

    mapping(address => mapping(uint256 => uint256)) public tokensBoughtByBuyer; ///@dev mapping addresses to balances of purchased tokens.

    event ShopCreated(
        address shopAddress,
        address owner,
        Membership membership,
        ERC1155 tokenContract,
        IERC20 tokenUsedForPayement,
        uint256 price
    );
    event Sold(address buyer, uint256 id, uint256 amount);
    event PriceChanged(address submitter, uint256 newPrice);
    event TokenOnSaleWithdrawal(address submitter, uint256 amount);
    event CapitalWithdrawal(address submitter, uint256 amount);

    /// @dev Constructor of the contracts takes in address of the owner, so that deployer can transfer ownership on deploy.
    /// @param owner will have rights over all of the contract functions.
    /// @param membership is the contract address of the membership token.
    /// @param tokenUsedForPayement is the contract address of the token used for payments.
    /// @param tokenContract is the address of the contract for the token which is going to be sold by this shop.
    /// @param price is the price of each unity of tokens.
    constructor(
        address owner,
        Membership membership,
        ERC1155 tokenContract,
        IERC20 tokenUsedForPayement,
        uint256 price
    ) {
        _membership = membership;
        _tokenUsedForPayement = tokenUsedForPayement;
        _tokenContract = tokenContract;
        _price = price;
        emit ShopCreated(
            address(this),
            owner,
            _membership,
            _tokenContract,
            _tokenUsedForPayement,
            _price
        );
    }

    /// @dev modifier which checks if msg sender has a membership token.
    modifier onlyMembers() {
        require(
            _membership.balanceOf(msg.sender, 0) != 0,
            "user is not yet Member of this DAO"
        );
        _;
    }

    /// @dev Function to check the balance of tokens to sell contained in this contract.
    function getContractBalanceOfToken(uint256 id)
        public
        view
        override
        returns (uint256)
    {
        uint256 balance = _tokenContract.balanceOf(address(this), id);
        return balance;
    }

    /// @dev function to get the current price at which the tokens is going to be sold.
    function getPrice() public view override returns (uint256) {
        return _price;
    }

    function getRaisedCapital()
        public
        view
        override
        returns (uint256 raisedCapital)
    {
        return _getRaisedCapital();
    }

    function getShopStatus() public view override returns (Status shopStatus) {
        shopStatus = _shopStatus;
    }

    function withdrawTokensOnSale(
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override returns (bool, uint256) {
        _tokenContract.safeTransferFrom(
            address(this),
            _msgSender(),
            id,
            amount,
            data
        );
        emit TokenOnSaleWithdrawal(msg.sender, amount);
        return (true, amount);
    }

    function withdrawRaisedCapital(uint256 amount)
        public
        override
        returns (bool)
    {
        address claimer = _msgSender();

        _beforeWithdrawRaisedCapital(claimer, amount);

        _tokenUsedForPayement.transfer(claimer, amount);
        emit CapitalWithdrawal(claimer, amount);
        return true;
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function _getRaisedCapital() internal view returns (uint256 raisedCapital) {
        raisedCapital = _raisedCapital;
    }

    function _setPrice(uint256 newPrice) internal returns (bool, uint256) {
        _price = newPrice;
        emit PriceChanged(msg.sender, newPrice);
        return (true, newPrice);
    }

    function _setShopStatus(uint256 status) internal returns (Status) {
        _shopStatus = Status(status);
        return _shopStatus;
    }

    function _buyTokens(
        address buyer,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual returns (uint256) {
        _beforeTokenPurchase(buyer, id, amount, data);

        // (bool executed, Status status) = _setShopStatus(id);

        require(
            getShopStatus() == Status.ACTIVE,
            "Token sale is Currently closed"
        );
        uint256 cost = amount * _price;
        tokensBoughtByBuyer[msg.sender][id] += amount;
        _tokenUsedForPayement.transferFrom(msg.sender, address(this), cost);
        _raisedCapital += cost;
        _tokenContract.safeTransferFrom(
            address(this),
            _msgSender(),
            id,
            amount,
            data
        );
        emit Sold(msg.sender, id, amount);
        return (amount);
    }

    function _beforeTokenPurchase(
        address buyer,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual {}

    function _beforeWithdrawRaisedCapital(address claimer, uint256 amount)
        internal
        virtual
    {}
}
