"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class CurrencyRate extends JsonMember_1.default {
    constructor(currencyCode = '', rate = null) {
        super();
        this.currencyCode = currencyCode;
        this.rate = rate;
    }
    fromJson(json) {
        if ('currencyCode' in json) {
            this.currencyCode = json.currencyCode;
        }
        if ('rate' in json) {
            this.rate = json.rate;
        }
    }
    toJson() {
        const json = {};
        if (this.currencyCode !== '') {
            json.currencyCode = this.currencyCode;
        }
        if (this.rate !== null) {
            json.rate = this.rate;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getCurrencyCode() {
        return this.currencyCode;
    }
    setCurrencyCode(currencyCode) {
        this.currencyCode = currencyCode;
    }
    getRate() {
        return this.rate;
    }
    setRate(rate) {
        this.rate = rate;
    }
}
exports.default = CurrencyRate;
//# sourceMappingURL=CurrencyRate.js.map