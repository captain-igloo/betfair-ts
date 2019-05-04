"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketRates extends JsonMember_1.default {
    constructor(marketBaseRate = null, discountAllowed = null) {
        super();
        this.marketBaseRate = marketBaseRate;
        this.discountAllowed = discountAllowed;
    }
    fromJson(json) {
        if ('marketBaseRate' in json) {
            this.marketBaseRate = json.marketBaseRate;
        }
        if ('discountAllowed' in json) {
            this.discountAllowed = json.discountAllowed;
        }
    }
    toJson() {
        const json = {};
        if (this.marketBaseRate !== null) {
            json.marketBaseRate = this.marketBaseRate;
        }
        if (this.discountAllowed !== null) {
            json.discountAllowed = this.discountAllowed;
        }
        return json;
    }
    isValid() {
        return this.marketBaseRate !== null &&
            this.discountAllowed !== null;
    }
    getMarketBaseRate() {
        return this.marketBaseRate;
    }
    setMarketBaseRate(marketBaseRate) {
        this.marketBaseRate = marketBaseRate;
    }
    getDiscountAllowed() {
        return this.discountAllowed;
    }
    setDiscountAllowed(discountAllowed) {
        this.discountAllowed = discountAllowed;
    }
}
exports.default = MarketRates;
//# sourceMappingURL=MarketRates.js.map