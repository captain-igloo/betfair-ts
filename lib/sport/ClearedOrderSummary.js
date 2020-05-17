"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderType_1 = require("../sport/enum/OrderType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const Side_1 = require("../sport/enum/Side");
const ItemDescription_1 = require("../sport/ItemDescription");
class ClearedOrderSummary extends JsonMember_1.default {
    constructor(options) {
        super();
        this.eventTypeId = options.eventTypeId;
        this.eventId = options.eventId;
        this.marketId = options.marketId;
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.betId = options.betId;
        if (options.placedDate) {
            this.placedDate = this.fromJson(options.placedDate, Date);
        }
        if (options.persistenceType) {
            this.persistenceType = this.fromJson(options.persistenceType, PersistenceType_1.default);
        }
        if (options.orderType) {
            this.orderType = this.fromJson(options.orderType, OrderType_1.default);
        }
        if (options.side) {
            this.side = this.fromJson(options.side, Side_1.default);
        }
        this.itemDescription = options.itemDescription && this.fromJson(options.itemDescription, ItemDescription_1.default);
        this.betOutcome = options.betOutcome;
        this.priceRequested = options.priceRequested;
        if (options.settledDate) {
            this.settledDate = this.fromJson(options.settledDate, Date);
        }
        if (options.lastMatchedDate) {
            this.lastMatchedDate = this.fromJson(options.lastMatchedDate, Date);
        }
        this.betCount = options.betCount;
        this.commission = options.commission;
        this.priceMatched = options.priceMatched;
        this.priceReduced = options.priceReduced;
        this.sizeSettled = options.sizeSettled;
        this.profit = options.profit;
        this.sizeCancelled = options.sizeCancelled;
        this.customerOrderRef = options.customerOrderRef;
        this.customerStrategyRef = options.customerStrategyRef;
    }
    toJson() {
        const json = {};
        if (typeof this.eventTypeId !== 'undefined') {
            json.eventTypeId = this.eventTypeId;
        }
        if (typeof this.eventId !== 'undefined') {
            json.eventId = this.eventId;
        }
        if (typeof this.marketId !== 'undefined') {
            json.marketId = this.marketId;
        }
        if (typeof this.selectionId !== 'undefined') {
            json.selectionId = this.selectionId;
        }
        if (typeof this.handicap !== 'undefined') {
            json.handicap = this.handicap;
        }
        if (typeof this.betId !== 'undefined') {
            json.betId = this.betId;
        }
        if (typeof this.placedDate !== 'undefined') {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.persistenceType) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.orderType) {
            json.orderType = this.orderType.getValue();
        }
        if (this.side) {
            json.side = this.side.getValue();
        }
        if (this.itemDescription) {
            json.itemDescription = this.itemDescription.toJson();
        }
        if (typeof this.betOutcome !== 'undefined') {
            json.betOutcome = this.betOutcome;
        }
        if (typeof this.priceRequested !== 'undefined') {
            json.priceRequested = this.priceRequested;
        }
        if (typeof this.settledDate !== 'undefined') {
            json.settledDate = this.settledDate.toISOString();
        }
        if (typeof this.lastMatchedDate !== 'undefined') {
            json.lastMatchedDate = this.lastMatchedDate.toISOString();
        }
        if (typeof this.betCount !== 'undefined') {
            json.betCount = this.betCount;
        }
        if (typeof this.commission !== 'undefined') {
            json.commission = this.commission;
        }
        if (typeof this.priceMatched !== 'undefined') {
            json.priceMatched = this.priceMatched;
        }
        if (typeof this.priceReduced !== 'undefined') {
            json.priceReduced = this.priceReduced;
        }
        if (typeof this.sizeSettled !== 'undefined') {
            json.sizeSettled = this.sizeSettled;
        }
        if (typeof this.profit !== 'undefined') {
            json.profit = this.profit;
        }
        if (typeof this.sizeCancelled !== 'undefined') {
            json.sizeCancelled = this.sizeCancelled;
        }
        if (typeof this.customerOrderRef !== 'undefined') {
            json.customerOrderRef = this.customerOrderRef;
        }
        if (typeof this.customerStrategyRef !== 'undefined') {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        return json;
    }
    getEventTypeId() {
        return this.eventTypeId;
    }
    setEventTypeId(eventTypeId) {
        this.eventTypeId = eventTypeId;
    }
    getEventId() {
        return this.eventId;
    }
    setEventId(eventId) {
        this.eventId = eventId;
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
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getPlacedDate() {
        return this.placedDate;
    }
    setPlacedDate(placedDate) {
        this.placedDate = placedDate;
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
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    getItemDescription() {
        return this.itemDescription;
    }
    setItemDescription(itemDescription) {
        this.itemDescription = itemDescription;
    }
    getBetOutcome() {
        return this.betOutcome;
    }
    setBetOutcome(betOutcome) {
        this.betOutcome = betOutcome;
    }
    getPriceRequested() {
        return this.priceRequested;
    }
    setPriceRequested(priceRequested) {
        this.priceRequested = priceRequested;
    }
    getSettledDate() {
        return this.settledDate;
    }
    setSettledDate(settledDate) {
        this.settledDate = settledDate;
    }
    getLastMatchedDate() {
        return this.lastMatchedDate;
    }
    setLastMatchedDate(lastMatchedDate) {
        this.lastMatchedDate = lastMatchedDate;
    }
    getBetCount() {
        return this.betCount;
    }
    setBetCount(betCount) {
        this.betCount = betCount;
    }
    getCommission() {
        return this.commission;
    }
    setCommission(commission) {
        this.commission = commission;
    }
    getPriceMatched() {
        return this.priceMatched;
    }
    setPriceMatched(priceMatched) {
        this.priceMatched = priceMatched;
    }
    getPriceReduced() {
        return this.priceReduced;
    }
    setPriceReduced(priceReduced) {
        this.priceReduced = priceReduced;
    }
    getSizeSettled() {
        return this.sizeSettled;
    }
    setSizeSettled(sizeSettled) {
        this.sizeSettled = sizeSettled;
    }
    getProfit() {
        return this.profit;
    }
    setProfit(profit) {
        this.profit = profit;
    }
    getSizeCancelled() {
        return this.sizeCancelled;
    }
    setSizeCancelled(sizeCancelled) {
        this.sizeCancelled = sizeCancelled;
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
exports.default = ClearedOrderSummary;
//# sourceMappingURL=ClearedOrderSummary.js.map