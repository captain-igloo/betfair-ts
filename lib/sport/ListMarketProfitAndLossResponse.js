"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketProfitAndLoss_1 = require("../sport/MarketProfitAndLoss");
class ListMarketProfitAndLossResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketProfitAndLosses = this.arrayFromJson(options, MarketProfitAndLoss_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getMarketProfitAndLosses() {
        return this.marketProfitAndLosses;
    }
    setMarketProfitAndLosses(marketProfitAndLosses) {
        this.marketProfitAndLosses = marketProfitAndLosses;
    }
}
exports.default = ListMarketProfitAndLossResponse;
//# sourceMappingURL=ListMarketProfitAndLossResponse.js.map