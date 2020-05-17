"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const RunnerStatus_1 = require("../sport/enum/RunnerStatus");
const ExchangePrices_1 = require("../sport/ExchangePrices");
const Match_1 = require("../sport/Match");
const Matches_1 = require("../sport/Matches");
const Order_1 = require("../sport/Order");
const StartingPrices_1 = require("../sport/StartingPrices");
class Runner extends JsonMember_1.default {
    constructor(options) {
        super();
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.status = this.fromJson(options.status, RunnerStatus_1.default);
        this.adjustmentFactor = options.adjustmentFactor;
        this.lastPriceTraded = options.lastPriceTraded;
        this.totalMatched = options.totalMatched;
        if (options.removalDate) {
            this.removalDate = this.fromJson(options.removalDate, Date);
        }
        this.sp = options.sp && this.fromJson(options.sp, StartingPrices_1.default);
        this.ex = options.ex && this.fromJson(options.ex, ExchangePrices_1.default);
        if (options.orders) {
            this.orders = this.arrayFromJson(options.orders, Order_1.default);
        }
        if (options.matches) {
            this.matches = this.arrayFromJson(options.matches, Match_1.default);
        }
        if (options.matchesByStrategy) {
            this.matchesByStrategy = this.mapFromJson(options.matchesByStrategy, Matches_1.default);
        }
    }
    toJson() {
        const json = {
            selectionId: this.selectionId,
            handicap: this.handicap,
            status: this.status.getValue(),
            adjustmentFactor: this.adjustmentFactor,
        };
        if (typeof this.lastPriceTraded !== 'undefined') {
            json.lastPriceTraded = this.lastPriceTraded;
        }
        if (typeof this.totalMatched !== 'undefined') {
            json.totalMatched = this.totalMatched;
        }
        if (typeof this.removalDate !== 'undefined') {
            json.removalDate = this.removalDate.toISOString();
        }
        if (this.sp) {
            json.sp = this.sp.toJson();
        }
        if (this.ex) {
            json.ex = this.ex.toJson();
        }
        if (this.orders && this.orders.length > 0) {
            json.orders = this.orders.map((value) => value.toJson());
        }
        if (this.matches && this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        if (this.matchesByStrategy && this.matchesByStrategy.size > 0) {
            json.matchesByStrategy = {};
            this.matchesByStrategy.forEach((value, key) => {
                json.matchesByStrategy[key] = value.toJson();
            });
        }
        return json;
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
//# sourceMappingURL=Runner.js.map