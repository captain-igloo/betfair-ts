"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const TimeRange_1 = require("../common/TimeRange");
class TimeRangeResult extends JsonMember_1.default {
    constructor(options) {
        super();
        this.timeRange = options.timeRange && this.fromJson(options.timeRange, TimeRange_1.default);
        this.marketCount = options.marketCount;
    }
    toJson() {
        const json = {};
        if (this.timeRange) {
            json.timeRange = this.timeRange.toJson();
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    getTimeRange() {
        return this.timeRange;
    }
    setTimeRange(timeRange) {
        this.timeRange = timeRange;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
}
exports.default = TimeRangeResult;
//# sourceMappingURL=TimeRangeResult.js.map