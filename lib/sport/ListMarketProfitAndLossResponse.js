"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketProfitAndLoss_1 = require("../sport/MarketProfitAndLoss");
class ListMarketProfitAndLossResponse extends JsonResponse_1.default {
    constructor(marketProfitAndLosses = []) {
        super();
        this.marketProfitAndLosses = marketProfitAndLosses;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.marketProfitAndLosses = json.map((marketProfitAndLossesJson) => {
                const element = new MarketProfitAndLoss_1.default();
                element.fromJson(marketProfitAndLossesJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.marketProfitAndLosses.length > 0) {
            json.marketProfitAndLosses = this.marketProfitAndLosses.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.marketProfitAndLosses.length > 0;
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