"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CountryCodeResult_1 = require("../sport/CountryCodeResult");
class ListCountriesResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.countryCodeResults = this.arrayFromJson(options, CountryCodeResult_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getCountryCodeResults() {
        return this.countryCodeResults;
    }
    setCountryCodeResults(countryCodeResults) {
        this.countryCodeResults = countryCodeResults;
    }
}
exports.default = ListCountriesResponse;
//# sourceMappingURL=ListCountriesResponse.js.map