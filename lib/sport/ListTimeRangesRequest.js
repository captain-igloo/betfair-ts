"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const TimeGranularity_1 = require("../sport/enum/TimeGranularity");
const MarketFilter_1 = require("../sport/MarketFilter");
class ListTimeRangesRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.filter = this.fromJson(options.filter, MarketFilter_1.default);
        this.granularity = this.fromJson(options.granularity, TimeGranularity_1.default);
    }
    toJson() {
        const json = {
            filter: this.filter.toJson(),
            granularity: this.granularity.getValue(),
        };
        return json;
    }
    getFilter() {
        return this.filter;
    }
    setFilter(filter) {
        this.filter = filter;
    }
    getGranularity() {
        return this.granularity;
    }
    setGranularity(granularity) {
        this.granularity = granularity;
    }
}
exports.default = ListTimeRangesRequest;
//# sourceMappingURL=ListTimeRangesRequest.js.map