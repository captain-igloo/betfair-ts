"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketTypeResult_1 = require("../sport/MarketTypeResult");
class ListMarketTypesResponse extends JsonResponse_1.default {
    constructor(marketTypeResults = []) {
        super();
        this.marketTypeResults = marketTypeResults;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.marketTypeResults = json.map((marketTypeResultsJson) => {
                const element = new MarketTypeResult_1.default();
                element.fromJson(marketTypeResultsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.marketTypeResults.length > 0) {
            json.marketTypeResults = this.marketTypeResults.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.marketTypeResults.length > 0;
    }
    getMarketTypeResults() {
        return this.marketTypeResults;
    }
    setMarketTypeResults(marketTypeResults) {
        this.marketTypeResults = marketTypeResults;
    }
}
exports.default = ListMarketTypesResponse;
