"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const RunnerStatus_1 = require("../sport/enum/RunnerStatus");
const StartingPrices_1 = require("../sport/StartingPrices");
const ExchangePrices_1 = require("../sport/ExchangePrices");
const Order_1 = require("../sport/Order");
const Match_1 = require("../sport/Match");
class Runner extends JsonMember_1.default {
    constructor(selectionId = null, handicap = null, status = new RunnerStatus_1.default(), adjustmentFactor = null, lastPriceTraded = null, totalMatched = null, removalDate = null, sp = new StartingPrices_1.default(), ex = new ExchangePrices_1.default(), orders = [], matches = [], matchesByStrategy = new Map()) {
        super();
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.status = status;
        this.adjustmentFactor = adjustmentFactor;
        this.lastPriceTraded = lastPriceTraded;
        this.totalMatched = totalMatched;
        this.removalDate = removalDate;
        this.sp = sp;
        this.ex = ex;
        this.orders = orders;
        this.matches = matches;
        this.matchesByStrategy = matchesByStrategy;
    }
    fromJson(json) {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('adjustmentFactor' in json) {
            this.adjustmentFactor = json.adjustmentFactor;
        }
        if ('lastPriceTraded' in json) {
            this.lastPriceTraded = json.lastPriceTraded;
        }
        if ('totalMatched' in json) {
            this.totalMatched = json.totalMatched;
        }
        if ('removalDate' in json) {
            this.removalDate = new Date(json.removalDate);
        }
        if ('sp' in json) {
            this.sp.fromJson(json.sp);
        }
        if ('ex' in json) {
            this.ex.fromJson(json.ex);
        }
        if ('orders' in json) {
            this.orders = json.orders.map((ordersJson) => {
                const element = new Order_1.default();
                element.fromJson(ordersJson);
                return element;
            });
        }
        if ('matches' in json) {
            this.matches = json.matches.map((matchesJson) => {
                const element = new Match_1.default();
                element.fromJson(matchesJson);
                return element;
            });
        }
        if ('matchesByStrategy' in json) {
            this.matchesByStrategy = json.matchesByStrategy;
        }
    }
    toJson() {
        const json = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.status.isValid()) {
            json.status = this.status;
        }
        if (this.adjustmentFactor !== null) {
            json.adjustmentFactor = this.adjustmentFactor;
        }
        if (this.lastPriceTraded !== null) {
            json.lastPriceTraded = this.lastPriceTraded;
        }
        if (this.totalMatched !== null) {
            json.totalMatched = this.totalMatched;
        }
        if (this.removalDate !== null) {
            json.removalDate = this.removalDate.toISOString();
        }
        if (this.sp.isValid()) {
            json.sp = this.sp.toJson();
        }
        if (this.ex.isValid()) {
            json.ex = this.ex.toJson();
        }
        if (this.orders.length > 0) {
            json.orders = this.orders.map((value) => value.toJson());
        }
        if (this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        if (this.matchesByStrategy.size > 0) {
            json.matchesByStrategy = this.matchesByStrategy;
        }
        return json;
    }
    isValid() {
        return this.selectionId !== null &&
            this.handicap !== null &&
            this.status.isValid() &&
            this.adjustmentFactor !== null;
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
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getAdjustmentFactor() {
        return this.adjustmentFactor;
    }
    setAdjustmentFactor(adjustmentFactor) {
        this.adjustmentFactor = adjustmentFactor;
    }
    getLastPriceTraded() {
        return this.lastPriceTraded;
    }
    setLastPriceTraded(lastPriceTraded) {
        this.lastPriceTraded = lastPriceTraded;
    }
    getTotalMatched() {
        return this.totalMatched;
    }
    setTotalMatched(totalMatched) {
        this.totalMatched = totalMatched;
    }
    getRemovalDate() {
        return this.removalDate;
    }
    setRemovalDate(removalDate) {
        this.removalDate = removalDate;
    }
    getSp() {
        return this.sp;
    }
    setSp(sp) {
        this.sp = sp;
    }
    getEx() {
        return this.ex;
    }
    setEx(ex) {
        this.ex = ex;
    }
    getOrders() {
        return this.orders;
    }
    setOrders(orders) {
        this.orders = orders;
    }
    getMatches() {
        return this.matches;
    }
    setMatches(matches) {
        this.matches = matches;
    }
    getMatchesByStrategy() {
        return this.matchesByStrategy;
    }
    setMatchesByStrategy(matchesByStrategy) {
        this.matchesByStrategy = matchesByStrategy;
    }
}
exports.default = Runner;
