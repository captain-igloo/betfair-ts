"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketFilter_1 = require("../sport/MarketFilter");
const TimeGranularity_1 = require("../sport/enum/TimeGranularity");
class ListTimeRangesRequest extends JsonRequest_1.default {
    constructor(filter = new MarketFilter_1.default(), granularity = new TimeGranularity_1.default()) {
        super();
        this.filter = filter;
        this.granularity = granularity;
    }
    fromJson(json) {
        if ('filter' in json) {
            this.filter.fromJson(json.filter);
        }
        if ('granularity' in json) {
            this.granularity.setValue(json.granularity);
        }
    }
    toJson() {
        const json = {};
        if (this.filter.isValid()) {
            json.filter = this.filter.toJson();
        }
        if (this.granularity.isValid()) {
            json.granularity = this.granularity;
        }
        return json;
    }
    isValid() {
        return this.filter.isValid() &&
            this.granularity.isValid();
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
