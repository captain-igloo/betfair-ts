"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class CurrencyRate extends JsonMember_1.default {
    constructor(options) {
        super();
        this.currencyCode = options.currencyCode;
        this.rate = options.rate;
    }
    toJson() {
        const json = {};
        if (typeof this.currencyCode !== 'undefined') {
            json.currencyCode = this.currencyCode;
        }
        if (typeof this.rate !== 'undefined') {
            json.rate = this.rate;
        }
        return json;
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