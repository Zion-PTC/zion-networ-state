// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../token/ERC20/ERC20.sol";
import "../../utils/Arrays.sol";
import "../../utils/Counters.sol";
import "../../utils/math/SafeMath.sol";

import "../../token/ERC1155/extensions/IERC1155Snapshot.sol";
import "../../token/ERC1155/extensions/IERC1155Master.sol";
import "./IERC1155MasterTokenShop.sol";
import "../ERC1155TokenShop.sol";

import "hardhat/console.sol";

contract ERC1155MasterTokenShop is IERC1155MasterTokenShop, ERC1155TokenShop {
    IERC1155Master public ierc1155master;
    uint256 private idUsedAsShares;

    using SafeMath for uint256;
    using Arrays for uint256[];
    using Counters for Counters.Counter;

    struct Snapshots {
        uint256[] ids;
        uint256[] values;
    }

    struct Dividends {
        uint256[] ids;
        uint256[] values;
    }

    mapping(address => Dividends) private _accountDividends;
    mapping(address => uint256) private _accountClaimedAmounts;
    Dividends private _totalCapitalDividends;
    uint256 private _totalCapital = getRaisedCapital();

    uint256 private _currentDividendId;

    event Dividend(uint256 id);
    event SnapshotTokenSet(
        IERC1155Master ierc1155master,
        uint256 idUsedAsShares
    );

    constructor(
        address ierc1155master_,
        uint256 idUsedAsShare_,
        address owner_,
        address membership_,
        address tokenContract_,
        address tokenUsedForPayment_,
        uint256 price_
    )
        ERC1155TokenShop(
            owner_,
            Membership(membership_),
            ERC1155(tokenContract_),
            ERC20(tokenUsedForPayment_),
            price_
        )
    {
        ierc1155master = IERC1155Master(ierc1155master_);
        idUsedAsShares = idUsedAsShare_;
        emit SnapshotTokenSet(ierc1155master, idUsedAsShares);
    }

    modifier OnlyShareholders() {
        address operator = _msgSender();
        uint256 shareBalanceOfOperator = ierc1155master.balanceOf(operator, 1);
        require(
            shareBalanceOfOperator >= 0,
            "ZION.ERC1155MasterTokenShop:: User is not allowed to call this function"
        );
        _;
    }

    modifier OnlyMasterToken() {
        address operator = _msgSender();
        require(
            operator == address(ierc1155master),
            "Zion.ERC1155MasterTokenShop:: Only ERC1155Master can call this function"
        );
        _;
    }

    function getCurrentDividendId()
        public
        view
        override
        OnlyShareholders
        returns (uint256)
    {
        return _getCurrentDividendId();
    }

    /// @dev function which sets the state of the crowd sale, it is called .
    function setShopStatus(uint256 status) public override OnlyShareholders {
        _setShopStatus(status);
    }

    function buyTokens(bytes memory data) public override onlyMembers {
        address buyer = _msgSender();
        _buyTokens(buyer, 2, 1, data);
    }

    /**
     * @param account è l'account oggetto della query.
     * @param dividendId è l'id del dividendo oggetto della query.
     * @notice viene richiesto il balance di un account ad un determinato
     * Id.
     * <<<Se il dividendo non è ancora stato creato, la funzione <_valueAt>
     * ritorna false, quindi si deve calcolare la percentuale di share dell'account
     * in base a quanti token esso detiene al momento della richiesta.
     * <<<Nel caso in cui <_valueAt> ritornasse true, vuole dire che il dividendo
     * dell'account è stato creato per l'ID richiesto, il che significa che
     * l'account ha trasferito degli share da unaltro account, quindi il record
     * dividendo è stato creato.
     */
    function capitalOfAt(address account, uint256 dividendId)
        public
        view
        override
        returns (uint256)
    {
        (bool divided, uint256 value) = _valueAt(
            dividendId,
            _accountDividends[account]
        );

        uint256 accountCapitalShare = _calculateCapitalShare(account);
        return divided ? value : accountCapitalShare;
    }

    function dividend() public override OnlyShareholders {
        _dividend();
        uint256 currentDividendId = _getCurrentDividendId();
        uint256 totalCapitaAtId = totalCapitalAt(currentDividendId);
        _updateTotalCapitalDividend(totalCapitaAtId);
    }

    function dividendOnSharesTransfer() public OnlyMasterToken {
        _dividend();
        uint256 currentDividendId = _getCurrentDividendId();
        uint256 totalCapitaAtId = totalCapitalAt(currentDividendId);
        _updateTotalCapitalDividend(totalCapitaAtId);
    }

    function totalCapital() public view override returns (uint256 capital) {
        capital = _totalCapital;
    }

    /**
     * @param dividendId è l'id del dividendo oggetto della query.
     * @return se il dividendo è stato "diviso" <_valueAt> ritorna true
     * in  * quel case il valore ritorno da <totalCapitlAt> sarà
     * uguale al valore di ritorno da <_valueAt>, il quale è il valore
     * registrato nel dividendo.
     * In caso contrario è uguale alla somma di capitale raccolto
     * nel contratto.
     * return divided ? value : getRaisedCapital();
     */
    function totalCapitalAt(uint256 dividendId)
        public
        view
        override
        returns (uint256)
    {
        (bool divided, uint256 value) = _valueAt(
            dividendId,
            _totalCapitalDividends
        );

        return divided ? value : getRaisedCapital();
    }

    function _dividend() internal virtual returns (uint256 currentId) {
        ierc1155master.snapshot();
        _currentDividendId = ierc1155master.getCurrentSnapshotId();
        currentId = _getCurrentDividendId();
        emit Dividend(currentId);
    }

    function _getCurrentDividendId() internal view virtual returns (uint256) {
        return _currentDividendId;
    }

    function _beforeTokenPurchase(
        address buyer,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual override {
        super._beforeTokenPurchase(buyer, id, amount, data);
        ierc1155master.mintCopy(address(this));
        emit Sold(buyer, 2, 1);
    }

    function _beforeWithdrawRaisedCapital(
        address claimer,
        uint256 claimedAmount
    ) internal virtual override {
        /// di cosa avrei bisogno
        super._beforeWithdrawRaisedCapital(claimer, claimedAmount);
        uint256 accountCapitalShare = _calculateCapitalShare(claimer);
        uint256 claimableAmount = accountCapitalShare -
            _accountClaimedAmounts[claimer];
        _accountClaimedAmounts[claimer] += claimedAmount;
        // console.log(
        //     "MSTRTKNSHOP:: _beforeWithdrawRaisedCapital():: accountCapitalShare:"
        //     ,accountCapitalShare
        // );
        // console.log(
        //     "MSTRTKNSHOP:: _beforeWithdrawRaisedCapital():: _accountClaimedAmounts[claimer]:"
        //     ,_accountClaimedAmounts[claimer]
        // );
        // console.log(
        //     "MSTRTKNSHOP:: _beforeWithdrawRaisedCapital():: claimableAmount:"
        //     ,claimableAmount
        // );

        require(
            claimedAmount <= claimableAmount,
            "ERC1155MasterTokenShop:: amount exceeds balance of account"
        );
    }

    function _valueAt(uint256 dividendId, Dividends storage dividends)
        private
        view
        returns (bool, uint256)
    {
        require(dividendId > 0, "ERC1155MasterTokenShop:: id is 0");
        require(
            dividendId <= _getCurrentDividendId(),
            "ERC1155MasterTokenShop:: nonexistent id"
        );

        /// qui si analizza l'array id per trovare il valore più grande o
        /// uguale a <dividendId>, il valore di <index> è quindi uguale
        /// al valore dell'indice dell'array che contiene il numero uguale
        /// o il piuù grande di <dividendId>, in questo modo recuperiamo
        /// l'index corretto dell'array, al quale sono registrati i valori
        /// del dividendo richiesto.
        uint256 index = dividends.ids.findUpperBound(dividendId);

        /// se il valore dell'indice è uguale alla lunghezza dell'array
        /// si ritora <divided = false> in quanto il dividendo
        if (index == dividends.ids.length) {
            return (false, 0);
        } else {
            return (true, dividends.values[index]);
        }
    }

    function _updateAccountDividend(address account, uint256 claimableAmount)
        private
    {
        _updateDividend(_accountDividends[account], claimableAmount);
    }

    function _updateTotalCapitalDividend(uint256 totalCapitalAtId) private {
        _updateDividend(_totalCapitalDividends, totalCapitalAtId);
    }

    function _updateDividend(Dividends storage dividends, uint256 currentValue)
        private
    {
        uint256 currentId = _getCurrentDividendId();
        if (_lastDividendId(dividends.ids) < currentId) {
            dividends.ids.push(currentId);
            dividends.values.push(currentValue);
        }
    }

    function _lastDividendId(uint256[] storage ids)
        private
        view
        returns (uint256)
    {
        if (ids.length == 0) {
            return 0;
        } else {
            return ids[ids.length - 1];
        }
    }

    function _calculateCapitalShare(address account)
        internal
        view
        returns (uint256 capitalShare)
    {
        uint256 capitalShare_;

        for (uint256 id = 1; id <= (_getCurrentDividendId()); id++) {
            uint256 accountShareBalanceX100 = ierc1155master.balanceOfAt(
                account,
                1,
                id
            ) * 100;
            uint256 totalShareSupplyAtId = ierc1155master.totalSupplyAt(1, id);
            (
                bool successAccountShareBalance,
                uint256 _accountShareBalance
            ) = accountShareBalanceX100.tryDiv(totalShareSupplyAtId);
            uint256 accountShareAtId = successAccountShareBalance
                ? _accountShareBalance
                : 0;
            uint256 totalCapitaAtId = totalCapitalAt(id);
            uint256 accountCapitalShareAtIdX100;
            uint256 accountCapitalShareAtId;
            if (totalCapitaAtId == 0) {} else {
                accountCapitalShareAtIdX100 =
                    totalCapitaAtId *
                    accountShareAtId;
                (bool success, uint256 value) = accountCapitalShareAtIdX100
                    .tryDiv(100);
                if (success) {
                    accountCapitalShareAtId = value;
                }
            }
            capitalShare_ = accountCapitalShareAtId;
        }
        capitalShare = capitalShare_;
    }

    function _asArraySingleton(uint256[] memory array)
        internal
        pure
        virtual
        returns (uint256)
    {
        uint256 element;
        element = array[0];
        return element;
    }
}
