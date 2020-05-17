"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CurrencyRate_1 = require("../account/CurrencyRate");
class ListCurrencyRatesResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.currencyRates = this.arrayFromJson(options, CurrencyRate_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getCurrencyRates() {
        return this.currencyRates;
    }
    setCurrencyRates(currencyRates) {
        this.currencyRates = currencyRates;
    }
}
exports.default = ListCurrencyRatesResponse;
//# sourceMappingURL=ListCurrencyRatesResponse.js.map