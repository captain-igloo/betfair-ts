"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketRates extends JsonMember_1.default {
    constructor(options) {
        super();
        this.marketBaseRate = options.marketBaseRate;
        this.discountAllowed = options.discountAllowed;
    }
    toJson() {
        const json = {
            marketBaseRate: this.marketBaseRate,
            discountAllowed: this.discountAllowed,
        };
        return json;
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