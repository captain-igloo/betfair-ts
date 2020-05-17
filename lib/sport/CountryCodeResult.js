"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class CountryCodeResult extends JsonMember_1.default {
    constructor(options) {
        super();
        this.countryCode = options.countryCode;
        this.marketCount = options.marketCount;
    }
    toJson() {
        const json = {};
        if (typeof this.countryCode !== 'undefined') {
            json.countryCode = this.countryCode;
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    getCountryCode() {
        return this.countryCode;
    }
    setCountryCode(countryCode) {
        this.countryCode = countryCode;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
}
exports.default = CountryCodeResult;
//# sourceMappingURL=CountryCodeResult.js.map