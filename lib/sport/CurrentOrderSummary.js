"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderStatus_1 = require("../sport/enum/OrderStatus");
const OrderType_1 = require("../sport/enum/OrderType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const Side_1 = require("../sport/enum/Side");
const PriceSize_1 = require("../sport/PriceSize");
class CurrentOrderSummary extends JsonMember_1.default {
    constructor(betId = '', marketId = '', selectionId = null, handicap = null, priceSize = new PriceSize_1.default(), bspLiability = null, side = new Side_1.default(), status = new OrderStatus_1.default(), persistenceType = new PersistenceType_1.default(), orderType = new OrderType_1.default(), placedDate = null, matchedDate = null, averagePriceMatched = null, sizeMatched = null, sizeRemaining = null, sizeLapsed = null, sizeCancelled = null, sizeVoided = null, regulatorAuthCode = '', regulatorCode = '', customerOrderRef = '', customerStrategyRef = '') {
        super();
        this.betId = betId;
        this.marketId = marketId;
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.priceSize = priceSize;
        this.bspLiability = bspLiability;
        this.side = side;
        this.status = status;
        this.persistenceType = persistenceType;
        this.orderType = orderType;
        this.placedDate = placedDate;
        this.matchedDate = matchedDate;
        this.averagePriceMatched = averagePriceMatched;
        this.sizeMatched = sizeMatched;
        this.sizeRemaining = sizeRemaining;
        this.sizeLapsed = sizeLapsed;
        this.sizeCancelled = sizeCancelled;
        this.sizeVoided = sizeVoided;
        this.regulatorAuthCode = regulatorAuthCode;
        this.regulatorCode = regulatorCode;
        this.customerOrderRef = customerOrderRef;
        this.customerStrategyRef = customerStrategyRef;
    }
    fromJson(json) {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('priceSize' in json) {
            this.priceSize.fromJson(json.priceSize);
        }
        if ('bspLiability' in json) {
            this.bspLiability = json.bspLiability;
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('persistenceType' in json) {
            this.persistenceType.setValue(json.persistenceType);
        }
        if ('orderType' in json) {
            this.orderType.setValue(json.orderType);
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('matchedDate' in json) {
            this.matchedDate = new Date(json.matchedDate);
        }
        if ('averagePriceMatched' in json) {
            this.averagePriceMatched = json.averagePriceMatched;
        }
        if ('sizeMatched' in json) {
            this.sizeMatched = json.sizeMatched;
        }
        if ('sizeRemaining' in json) {
            this.sizeRemaining = json.sizeRemaining;
        }
        if ('sizeLapsed' in json) {
            this.sizeLapsed = json.sizeLapsed;
        }
        if ('sizeCancelled' in json) {
            this.sizeCancelled = json.sizeCancelled;
        }
        if ('sizeVoided' in json) {
            this.sizeVoided = json.sizeVoided;
        }
        if ('regulatorAuthCode' in json) {
            this.regulatorAuthCode = json.regulatorAuthCode;
        }
        if ('regulatorCode' in json) {
            this.regulatorCode = json.regulatorCode;
        }
        if ('customerOrderRef' in json) {
            this.customerOrderRef = json.customerOrderRef;
        }
        if ('customerStrategyRef' in json) {
            this.customerStrategyRef = json.customerStrategyRef;
        }
    }
    toJson() {
        const json = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.priceSize.isValid()) {
            json.priceSize = this.priceSize.toJson();
        }
        if (this.bspLiability !== null) {
            json.bspLiability = this.bspLiability;
        }
        if (this.side.isValid()) {
            json.side = this.side;
        }
        if (this.status.isValid()) {
            json.status = this.status;
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType;
        }
        if (this.orderType.isValid()) {
            json.orderType = this.orderType;
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.matchedDate !== null) {
            json.matchedDate = this.matchedDate.toISOString();
        }
        if (this.averagePriceMatched !== null) {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (this.sizeMatched !== null) {
            json.sizeMatched = this.sizeMatched;
        }
        if (this.sizeRemaining !== null) {
            json.sizeRemaining = this.sizeRemaining;
        }
        if (this.sizeLapsed !== null) {
            json.sizeLapsed = this.sizeLapsed;
        }
        if (this.sizeCancelled !== null) {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (this.sizeVoided !== null) {
            json.sizeVoided = this.sizeVoided;
        }
        if (this.regulatorAuthCode !== null) {
            json.regulatorAuthCode = this.regulatorAuthCode;
        }
        if (this.regulatorCode !== null) {
            json.regulatorCode = this.regulatorCode;
        }
        if (this.customerOrderRef !== null) {
            json.customerOrderRef = this.customerOrderRef;
        }
        if (this.customerStrategyRef !== null) {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        return json;
    }
    isValid() {
        return this.betId !== null &&
            this.marketId !== null &&
            this.selectionId !== null &&
            this.handicap !== null &&
            this.priceSize.isValid() &&
            this.bspLiability !== null &&
            this.side.isValid() &&
            this.status.isValid() &&
            this.persistenceType.isValid() &&
            this.orderType.isValid() &&
            this.placedDate !== null &&
            this.matchedDate !== null;
    }
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getSelectionId() {
        return this.selectionId;
    }
    setSelectionId(selectionId) {
        this.selectionId = selectionId;
    }
    getHandicap() {
        return this.handicap;
    }
    setHandicap(handicap) {
        this.handicap = handicap;
    }
    getPriceSize() {
        return this.priceSize;
    }
    setPriceSize(priceSize) {
        this.priceSize = priceSize;
    }
    getBspLiability() {
        return this.bspLiability;
    }
    setBspLiability(bspLiability) {
        this.bspLiability = bspLiability;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getPersistenceType() {
        return this.persistenceType;
    }
    setPersistenceType(persistenceType) {
        this.persistenceType = persistenceType;
    }
    getOrderType() {
        return this.orderType;
    }
    setOrderType(orderType) {
        this.orderType = orderType;
    }
    getPlacedDate() {
        return this.placedDate;
    }
    setPlacedDate(placedDate) {
        this.placedDate = placedDate;
    }
    getMatchedDate() {
        return this.matchedDate;
    }
    setMatchedDate(matchedDate) {
        this.matchedDate = matchedDate;
    }
    getAveragePriceMatched() {
        return this.averagePriceMatched;
    }
    setAveragePriceMatched(averagePriceMatched) {
        this.averagePriceMatched = averagePriceMatched;
    }
    getSizeMatched() {
        return this.sizeMatched;
    }
    setSizeMatched(sizeMatched) {
        this.sizeMatched = sizeMatched;
    }
    getSizeRemaining() {
        return this.sizeRemaining;
    }
    setSizeRemaining(sizeRemaining) {
        this.sizeRemaining = sizeRemaining;
    }
    getSizeLapsed() {
        return this.sizeLapsed;
    }
    setSizeLapsed(sizeLapsed) {
        this.sizeLapsed = sizeLapsed;
    }
    getSizeCancelled() {
        return this.sizeCancelled;
    }
    setSizeCancelled(sizeCancelled) {
        this.sizeCancelled = sizeCancelled;
    }
    getSizeVoided() {
        return this.sizeVoided;
    }
    setSizeVoided(sizeVoided) {
        this.sizeVoided = sizeVoided;
    }
    getRegulatorAuthCode() {
        return this.regulatorAuthCode;
    }
    setRegulatorAuthCode(regulatorAuthCode) {
        this.regulatorAuthCode = regulatorAuthCode;
    }
    getRegulatorCode() {
        return this.regulatorCode;
    }
    setRegulatorCode(regulatorCode) {
        this.regulatorCode = regulatorCode;
    }
    getCustomerOrderRef() {
        return this.customerOrderRef;
    }
    setCustomerOrderRef(customerOrderRef) {
        this.customerOrderRef = customerOrderRef;
    }
    getCustomerStrategyRef() {
        return this.customerStrategyRef;
    }
    setCustomerStrategyRef(customerStrategyRef) {
        this.customerStrategyRef = customerStrategyRef;
    }
}
exports.default = CurrentOrderSummary;
//# sourceMappingURL=CurrentOrderSummary.js.map