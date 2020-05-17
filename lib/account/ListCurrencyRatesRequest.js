"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class ListCurrencyRatesRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.fromCurrency = options.fromCurrency;
    }
    toJson() {
        const json = {};
        if (typeof this.fromCurrency !== 'undefined') {
            json.fromCurrency = this.fromCurrency;
        }
        return json;
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