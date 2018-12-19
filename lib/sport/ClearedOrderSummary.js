"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const OrderType_1 = require("../sport/enum/OrderType");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
const Side_1 = require("../sport/enum/Side");
const ItemDescription_1 = require("../sport/ItemDescription");
class ClearedOrderSummary extends JsonMember_1.default {
    constructor(eventTypeId = '', eventId = '', marketId = '', selectionId = null, handicap = null, betId = '', placedDate = null, persistenceType = new PersistenceType_1.default(), orderType = new OrderType_1.default(), side = new Side_1.default(), itemDescription = new ItemDescription_1.default(), betOutcome = '', priceRequested = null, settledDate = null, lastMatchedDate = null, betCount = null, commission = null, priceMatched = null, priceReduced = null, sizeSettled = null, profit = null, sizeCancelled = null, customerOrderRef = '', customerStrategyRef = '') {
        super();
        this.eventTypeId = eventTypeId;
        this.eventId = eventId;
        this.marketId = marketId;
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.betId = betId;
        this.placedDate = placedDate;
        this.persistenceType = persistenceType;
        this.orderType = orderType;
        this.side = side;
        this.itemDescription = itemDescription;
        this.betOutcome = betOutcome;
        this.priceRequested = priceRequested;
        this.settledDate = settledDate;
        this.lastMatchedDate = lastMatchedDate;
        this.betCount = betCount;
        this.commission = commission;
        this.priceMatched = priceMatched;
        this.priceReduced = priceReduced;
        this.sizeSettled = sizeSettled;
        this.profit = profit;
        this.sizeCancelled = sizeCancelled;
        this.customerOrderRef = customerOrderRef;
        this.customerStrategyRef = customerStrategyRef;
    }
    fromJson(json) {
        if ('eventTypeId' in json) {
            this.eventTypeId = json.eventTypeId;
        }
        if ('eventId' in json) {
            this.eventId = json.eventId;
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
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('persistenceType' in json) {
            this.persistenceType.setValue(json.persistenceType);
        }
        if ('orderType' in json) {
            this.orderType.setValue(json.orderType);
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('itemDescription' in json) {
            this.itemDescription.fromJson(json.itemDescription);
        }
        if ('betOutcome' in json) {
            this.betOutcome = json.betOutcome;
        }
        if ('priceRequested' in json) {
            this.priceRequested = json.priceRequested;
        }
        if ('settledDate' in json) {
            this.settledDate = new Date(json.settledDate);
        }
        if ('lastMatchedDate' in json) {
            this.lastMatchedDate = new Date(json.lastMatchedDate);
        }
        if ('betCount' in json) {
            this.betCount = json.betCount;
        }
        if ('commission' in json) {
            this.commission = json.commission;
        }
        if ('priceMatched' in json) {
            this.priceMatched = json.priceMatched;
        }
        if ('priceReduced' in json) {
            this.priceReduced = json.priceReduced;
        }
        if ('sizeSettled' in json) {
            this.sizeSettled = json.sizeSettled;
        }
        if ('profit' in json) {
            this.profit = json.profit;
        }
        if ('sizeCancelled' in json) {
            this.sizeCancelled = json.sizeCancelled;
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
        if (this.eventTypeId !== null) {
            json.eventTypeId = this.eventTypeId;
        }
        if (this.eventId !== null) {
            json.eventId = this.eventId;
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
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType;
        }
        if (this.orderType.isValid()) {
            json.orderType = this.orderType;
        }
        if (this.side.isValid()) {
            json.side = this.side;
        }
        if (this.itemDescription.isValid()) {
            json.itemDescription = this.itemDescription.toJson();
        }
        if (this.betOutcome !== null) {
            json.betOutcome = this.betOutcome;
        }
        if (this.priceRequested !== null) {
            json.priceRequested = this.priceRequested;
        }
        if (this.settledDate !== null) {
            json.settledDate = this.settledDate.toISOString();
        }
        if (this.lastMatchedDate !== null) {
            json.lastMatchedDate = this.lastMatchedDate.toISOString();
        }
        if (this.betCount !== null) {
            json.betCount = this.betCount;
        }
        if (this.commission !== null) {
            json.commission = this.commission;
        }
        if (this.priceMatched !== null) {
            json.priceMatched = this.priceMatched;
        }
        if (this.priceReduced !== null) {
            json.priceReduced = this.priceReduced;
        }
        if (this.sizeSettled !== null) {
            json.sizeSettled = this.sizeSettled;
        }
        if (this.profit !== null) {
            json.profit = this.profit;
        }
        if (this.sizeCancelled !== null) {
            json.sizeCancelled = this.sizeCancelled;
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
        return true;
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
