"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketTypeResult extends JsonMember_1.default {
    constructor(marketType = '', marketCount = null) {
        super();
        this.marketType = marketType;
        this.marketCount = marketCount;
    }
    fromJson(json) {
        if ('marketType' in json) {
            this.marketType = json.marketType;
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }
    toJson() {
        const json = {};
        if (this.marketType !== '') {
            json.marketType = this.marketType;
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    isValid() {
        return true;
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