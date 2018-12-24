"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class ListCurrencyRatesRequest extends JsonRequest_1.default {
    constructor(fromCurrency = '') {
        super();
        this.fromCurrency = fromCurrency;
    }
    fromJson(json) {
        if ('fromCurrency' in json) {
            this.fromCurrency = json.fromCurrency;
        }
    }
    toJson() {
        const json = {};
        if (this.fromCurrency !== null) {
            json.fromCurrency = this.fromCurrency;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getFromCurrency() {
        return this.fromCurrency;
    }
    setFromCurrency(fromCurrency) {
        this.fromCurrency = fromCurrency;
    }
}
exports.default = ListCurrencyRatesRequest;
//# sourceMappingURL=ListCurrencyRatesRequest.js.map