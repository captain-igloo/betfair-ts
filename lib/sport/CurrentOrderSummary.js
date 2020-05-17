"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderStatus_1 = require("../sport/enum/OrderStatus");
const OrderType_1 = require("../sport/enum/OrderType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const Side_1 = require("../sport/enum/Side");
const PriceSize_1 = require("../sport/PriceSize");
class CurrentOrderSummary extends JsonMember_1.default {
    constructor(options) {
        super();
        this.betId = options.betId;
        this.marketId = options.marketId;
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.priceSize = this.fromJson(options.priceSize, PriceSize_1.default);
        this.bspLiability = options.bspLiability;
        this.side = this.fromJson(options.side, Side_1.default);
        this.status = this.fromJson(options.status, OrderStatus_1.default);
        this.persistenceType = this.fromJson(options.persistenceType, PersistenceType_1.default);
        this.orderType = this.fromJson(options.orderType, OrderType_1.default);
        this.placedDate = this.fromJson(options.placedDate, Date);
        this.matchedDate = this.fromJson(options.matchedDate, Date);
        this.averagePriceMatched = options.averagePriceMatched;
        this.sizeMatched = options.sizeMatched;
        this.sizeRemaining = options.sizeRemaining;
        this.sizeLapsed = options.sizeLapsed;
        this.sizeCancelled = options.sizeCancelled;
        this.sizeVoided = options.sizeVoided;
        this.regulatorAuthCode = options.regulatorAuthCode;
        this.regulatorCode = options.regulatorCode;
        this.customerOrderRef = options.customerOrderRef;
        this.customerStrategyRef = options.customerStrategyRef;
    }
    toJson() {
        const json = {
            betId: this.betId,
            marketId: this.marketId,
            selectionId: this.selectionId,
            handicap: this.handicap,
            priceSize: this.priceSize.toJson(),
            bspLiability: this.bspLiability,
            side: this.side.getValue(),
            status: this.status.getValue(),
            persistenceType: this.persistenceType.getValue(),
            orderType: this.orderType.getValue(),
            placedDate: this.placedDate.toISOString(),
            matchedDate: this.matchedDate.toISOString(),
        };
        if (typeof this.averagePriceMatched !== 'undefined') {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (typeof this.sizeMatched !== 'undefined') {
            json.sizeMatched = this.sizeMatched;
        }
        if (typeof this.sizeRemaining !== 'undefined') {
            json.sizeRemaining = this.sizeRemaining;
        }
        if (typeof this.sizeLapsed !== 'undefined') {
            json.sizeLapsed = this.sizeLapsed;
        }
        if (typeof this.sizeCancelled !== 'undefined') {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (typeof this.sizeVoided !== 'undefined') {
            json.sizeVoided = this.sizeVoided;
        }
        if (typeof this.regulatorAuthCode !== 'undefined') {
            json.regulatorAuthCode = this.regulatorAuthCode;
        }
        if (typeof this.regulatorCode !== 'undefined') {
            json.regulatorCode = this.regulatorCode;
        }
        if (typeof this.customerOrderRef !== 'undefined') {
            json.customerOrderRef = this.customerOrderRef;
        }
        if (typeof this.customerStrategyRef !== 'undefined') {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        return json;
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