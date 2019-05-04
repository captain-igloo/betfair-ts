"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const RollupModel_1 = require("../sport/enum/RollupModel");
class ExBestOffersOverrides extends JsonMember_1.default {
    constructor(bestPricesDepth = null, rollupModel = new RollupModel_1.default(), rollupLimit = null, rollupLiabilityThreshold = null, rollupLiabilityFactor = null) {
        super();
        this.bestPricesDepth = bestPricesDepth;
        this.rollupModel = rollupModel;
        this.rollupLimit = rollupLimit;
        this.rollupLiabilityThreshold = rollupLiabilityThreshold;
        this.rollupLiabilityFactor = rollupLiabilityFactor;
    }
    fromJson(json) {
        if ('bestPricesDepth' in json) {
            this.bestPricesDepth = json.bestPricesDepth;
        }
        if ('rollupModel' in json) {
            this.rollupModel.setValue(json.rollupModel);
        }
        if ('rollupLimit' in json) {
            this.rollupLimit = json.rollupLimit;
        }
        if ('rollupLiabilityThreshold' in json) {
            this.rollupLiabilityThreshold = json.rollupLiabilityThreshold;
        }
        if ('rollupLiabilityFactor' in json) {
            this.rollupLiabilityFactor = json.rollupLiabilityFactor;
        }
    }
    toJson() {
        const json = {};
        if (this.bestPricesDepth !== null) {
            json.bestPricesDepth = this.bestPricesDepth;
        }
        if (this.rollupModel.isValid()) {
            json.rollupModel = this.rollupModel.getValue();
        }
        if (this.rollupLimit !== null) {
            json.rollupLimit = this.rollupLimit;
        }
        if (this.rollupLiabilityThreshold !== null) {
            json.rollupLiabilityThreshold = this.rollupLiabilityThreshold;
        }
        if (this.rollupLiabilityFactor !== null) {
            json.rollupLiabilityFactor = this.rollupLiabilityFactor;
        }
        return json;
    }
    isValid() {
        return true;
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