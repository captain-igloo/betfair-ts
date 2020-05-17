"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketTypeResult extends JsonMember_1.default {
    constructor(options) {
        super();
        this.marketType = options.marketType;
        this.marketCount = options.marketCount;
    }
    toJson() {
        const json = {};
        if (typeof this.marketType !== 'undefined') {
            json.marketType = this.marketType;
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    getMarketType() {
        return this.marketType;
    }
    setMarketType(marketType) {
        this.marketType = marketType;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
}
exports.default = MarketTypeResult;
//# sourceMappingURL=MarketTypeResult.js.map