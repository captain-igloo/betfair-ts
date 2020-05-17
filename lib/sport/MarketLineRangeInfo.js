"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketLineRangeInfo extends JsonMember_1.default {
    constructor(options) {
        super();
        this.maxUnitValue = options.maxUnitValue;
        this.minUnitValue = options.minUnitValue;
        this.interval = options.interval;
        this.marketUnit = options.marketUnit;
    }
    toJson() {
        const json = {
            maxUnitValue: this.maxUnitValue,
            minUnitValue: this.minUnitValue,
            interval: this.interval,
            marketUnit: this.marketUnit,
        };
        return json;
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