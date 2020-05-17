"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const RollupModel_1 = require("../sport/enum/RollupModel");
class ExBestOffersOverrides extends JsonMember_1.default {
    constructor(options) {
        super();
        this.bestPricesDepth = options.bestPricesDepth;
        if (options.rollupModel) {
            this.rollupModel = this.fromJson(options.rollupModel, RollupModel_1.default);
        }
        this.rollupLimit = options.rollupLimit;
        this.rollupLiabilityThreshold = options.rollupLiabilityThreshold;
        this.rollupLiabilityFactor = options.rollupLiabilityFactor;
    }
    toJson() {
        const json = {};
        if (typeof this.bestPricesDepth !== 'undefined') {
            json.bestPricesDepth = this.bestPricesDepth;
        }
        if (this.rollupModel) {
            json.rollupModel = this.rollupModel.getValue();
        }
        if (typeof this.rollupLimit !== 'undefined') {
            json.rollupLimit = this.rollupLimit;
        }
        if (typeof this.rollupLiabilityThreshold !== 'undefined') {
            json.rollupLiabilityThreshold = this.rollupLiabilityThreshold;
        }
        if (typeof this.rollupLiabilityFactor !== 'undefined') {
            json.rollupLiabilityFactor = this.rollupLiabilityFactor;
        }
        return json;
    }
    getBestPricesDepth() {
        return this.bestPricesDepth;
    }
    setBestPricesDepth(bestPricesDepth) {
        this.bestPricesDepth = bestPricesDepth;
    }
    getRollupModel() {
        return this.rollupModel;
    }
    setRollupModel(rollupModel) {
        this.rollupModel = rollupModel;
    }
    getRollupLimit() {
        return this.rollupLimit;
    }
    setRollupLimit(rollupLimit) {
        this.rollupLimit = rollupLimit;
    }
    getRollupLiabilityThreshold() {
        return this.rollupLiabilityThreshold;
    }
    setRollupLiabilityThreshold(rollupLiabilityThreshold) {
        this.rollupLiabilityThreshold = rollupLiabilityThreshold;
    }
    getRollupLiabilityFactor() {
        return this.rollupLiabilityFactor;
    }
    setRollupLiabilityFactor(rollupLiabilityFactor) {
        this.rollupLiabilityFactor = rollupLiabilityFactor;
    }
}
exports.default = ExBestOffersOverrides;
//# sourceMappingURL=ExBestOffersOverrides.js.map