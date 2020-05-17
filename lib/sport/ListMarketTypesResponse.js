"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketTypeResult_1 = require("../sport/MarketTypeResult");
class ListMarketTypesResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketTypeResults = this.arrayFromJson(options, MarketTypeResult_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getMarketTypeResults() {
        return this.marketTypeResults;
    }
    setMarketTypeResults(marketTypeResults) {
        this.marketTypeResults = marketTypeResults;
    }
}
exports.default = ListMarketTypesResponse;
//# sourceMappingURL=ListMarketTypesResponse.js.map