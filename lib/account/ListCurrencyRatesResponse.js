"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CurrencyRate_1 = require("../account/CurrencyRate");
class ListCurrencyRatesResponse extends JsonResponse_1.default {
    constructor(currencyRates = []) {
        super();
        this.currencyRates = currencyRates;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.currencyRates = json.map((currencyRatesJson) => {
                const element = new CurrencyRate_1.default();
                element.fromJson(currencyRatesJson);
                return element;
            });
        }
    }
    toJson() {
        let json = {};
        if (this.currencyRates.length > 0) {
            json.currencyRates = this.currencyRates.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.currencyRates.length > 0;
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