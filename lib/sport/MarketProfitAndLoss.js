"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const RunnerProfitAndLoss_1 = require("../sport/RunnerProfitAndLoss");
class MarketProfitAndLoss extends JsonMember_1.default {
    constructor(options) {
        super();
        this.marketId = options.marketId;
        this.commissionApplied = options.commissionApplied;
        if (options.profitAndLosses) {
            this.profitAndLosses = this.arrayFromJson(options.profitAndLosses, RunnerProfitAndLoss_1.default);
        }
    }
    toJson() {
        const json = {};
        if (typeof this.marketId !== 'undefined') {
            json.marketId = this.marketId;
        }
        if (typeof this.commissionApplied !== 'undefined') {
            json.commissionApplied = this.commissionApplied;
        }
        if (this.profitAndLosses && this.profitAndLosses.length > 0) {
            json.profitAndLosses = this.profitAndLosses.map((value) => value.toJson());
        }
        return json;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getCommissionApplied() {
        return this.commissionApplied;
    }
    setCommissionApplied(commissionApplied) {
        this.commissionApplied = commissionApplied;
    }
    getProfitAndLosses() {
        return this.profitAndLosses;
    }
    setProfitAndLosses(profitAndLosses) {
        this.profitAndLosses = profitAndLosses;
    }
}
exports.default = MarketProfitAndLoss;
//# sourceMappingURL=MarketProfitAndLoss.js.map