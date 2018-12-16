"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class CountryCodeResult extends JsonMember_1.default {
    constructor(countryCode = '', marketCount = null) {
        super();
        this.countryCode = countryCode;
        this.marketCount = marketCount;
    }
    fromJson(json) {
        if ('countryCode' in json) {
            this.countryCode = json.countryCode;
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }
    toJson() {
        const json = {};
        if (this.countryCode !== null) {
            json.countryCode = this.countryCode;
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    isValid() {
        return true;
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
