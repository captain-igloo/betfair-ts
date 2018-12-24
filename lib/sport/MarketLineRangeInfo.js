"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketLineRangeInfo extends JsonMember_1.default {
    constructor(maxUnitValue = null, minUnitValue = null, interval = null, marketUnit = '') {
        super();
        this.maxUnitValue = maxUnitValue;
        this.minUnitValue = minUnitValue;
        this.interval = interval;
        this.marketUnit = marketUnit;
    }
    fromJson(json) {
        if ('maxUnitValue' in json) {
            this.maxUnitValue = json.maxUnitValue;
        }
        if ('minUnitValue' in json) {
            this.minUnitValue = json.minUnitValue;
        }
        if ('interval' in json) {
            this.interval = json.interval;
        }
        if ('marketUnit' in json) {
            this.marketUnit = json.marketUnit;
        }
    }
    toJson() {
        const json = {};
        if (this.maxUnitValue !== null) {
            json.maxUnitValue = this.maxUnitValue;
        }
        if (this.minUnitValue !== null) {
            json.minUnitValue = this.minUnitValue;
        }
        if (this.interval !== null) {
            json.interval = this.interval;
        }
        if (this.marketUnit !== null) {
            json.marketUnit = this.marketUnit;
        }
        return json;
    }
    isValid() {
        return this.maxUnitValue !== null &&
            this.minUnitValue !== null &&
            this.interval !== null &&
            this.marketUnit !== null;
    }
    getMaxUnitValue() {
        return this.maxUnitValue;
    }
    setMaxUnitValue(maxUnitValue) {
        this.maxUnitValue = maxUnitValue;
    }
    getMinUnitValue() {
        return this.minUnitValue;
    }
    setMinUnitValue(minUnitValue) {
        this.minUnitValue = minUnitValue;
    }
    getInterval() {
        return this.interval;
    }
    setInterval(interval) {
        this.interval = interval;
    }
    getMarketUnit() {
        return this.marketUnit;
    }
    setMarketUnit(marketUnit) {
        this.marketUnit = marketUnit;
    }
}
exports.default = MarketLineRangeInfo;
//# sourceMappingURL=MarketLineRangeInfo.js.map