"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const TimeRange_1 = require("../common/TimeRange");
class TimeRangeResult extends JsonMember_1.default {
    constructor(timeRange = new TimeRange_1.default(), marketCount = null) {
        super();
        this.timeRange = timeRange;
        this.marketCount = marketCount;
    }
    fromJson(json) {
        if ('timeRange' in json) {
            this.timeRange.fromJson(json.timeRange);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }
    toJson() {
        const json = {};
        if (this.timeRange.isValid()) {
            json.timeRange = this.timeRange.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    isValid() {
        return true;
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
