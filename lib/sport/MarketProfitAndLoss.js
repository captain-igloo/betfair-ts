"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const RunnerProfitAndLoss_1 = require("../sport/RunnerProfitAndLoss");
class MarketProfitAndLoss extends JsonMember_1.default {
    constructor(marketId = '', commissionApplied = null, profitAndLosses = []) {
        super();
        this.marketId = marketId;
        this.commissionApplied = commissionApplied;
        this.profitAndLosses = profitAndLosses;
    }
    fromJson(json) {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('commissionApplied' in json) {
            this.commissionApplied = json.commissionApplied;
        }
        if ('profitAndLosses' in json) {
            this.profitAndLosses = json.profitAndLosses.map((profitAndLossesJson) => {
                const element = new RunnerProfitAndLoss_1.default();
                element.fromJson(profitAndLossesJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.commissionApplied !== null) {
            json.commissionApplied = this.commissionApplied;
        }
        if (this.profitAndLosses.length > 0) {
            json.profitAndLosses = this.profitAndLosses.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return true;
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
