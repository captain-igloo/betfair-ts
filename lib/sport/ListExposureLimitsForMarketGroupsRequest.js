"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const MarketGroup_1 = require("../sport/MarketGroup");
class ListExposureLimitsForMarketGroupsRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        if (options.marketGroupTypeFilter) {
            this.marketGroupTypeFilter = this.fromJson(options.marketGroupTypeFilter, MarketGroupType_1.default);
        }
        if (options.marketGroupFilter) {
            this.marketGroupFilter = this.arrayFromJson(options.marketGroupFilter, MarketGroup_1.default);
        }
    }
    toJson() {
        const json = {};
        if (this.marketGroupTypeFilter) {
            json.marketGroupTypeFilter = this.marketGroupTypeFilter.getValue();
        }
        if (this.marketGroupFilter && this.marketGroupFilter.length > 0) {
            json.marketGroupFilter = this.marketGroupFilter.map((value) => value.toJson());
        }
        return json;
    }
    getMarketGroupTypeFilter() {
        return this.marketGroupTypeFilter;
    }
    setMarketGroupTypeFilter(marketGroupTypeFilter) {
        this.marketGroupTypeFilter = marketGroupTypeFilter;
    }
    getMarketGroupFilter() {
        return this.marketGroupFilter;
    }
    setMarketGroupFilter(marketGroupFilter) {
        this.marketGroupFilter = marketGroupFilter;
    }
}
exports.default = ListExposureLimitsForMarketGroupsRequest;
//# sourceMappingURL=ListExposureLimitsForMarketGroupsRequest.js.map