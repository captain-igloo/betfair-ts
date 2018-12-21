"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CountryCodeResult_1 = require("../sport/CountryCodeResult");
class ListCountriesResponse extends JsonResponse_1.default {
    constructor(countryCodeResults = []) {
        super();
        this.countryCodeResults = countryCodeResults;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('countryCodeResults' in json) {
                this.countryCodeResults = json.map((countryCodeResultsJson) => {
                    const element = new CountryCodeResult_1.default();
                    element.fromJson(countryCodeResultsJson);
                    return element;
                });
            }
        }
    }
    toJson() {
        const json = {};
        if (this.countryCodeResults.length > 0) {
            json.countryCodeResults = this.countryCodeResults.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.countryCodeResults.length > 0;
    }
    getCountryCodeResults() {
        return this.countryCodeResults;
    }
    setCountryCodeResults(countryCodeResults) {
        this.countryCodeResults = countryCodeResults;
    }
}
exports.default = ListCountriesResponse;
