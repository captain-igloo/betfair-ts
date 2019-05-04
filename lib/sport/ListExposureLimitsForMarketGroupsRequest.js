"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const MarketGroup_1 = require("../sport/MarketGroup");
class ListExposureLimitsForMarketGroupsRequest extends JsonRequest_1.default {
    constructor(marketGroupTypeFilter = new MarketGroupType_1.default(), marketGroupFilter = []) {
        super();
        this.marketGroupTypeFilter = marketGroupTypeFilter;
        this.marketGroupFilter = marketGroupFilter;
    }
    fromJson(json) {
        if ('marketGroupTypeFilter' in json) {
            this.marketGroupTypeFilter.setValue(json.marketGroupTypeFilter);
        }
        if ('marketGroupFilter' in json) {
            this.marketGroupFilter = json.marketGroupFilter.map((marketGroupFilterJson) => {
                const element = new MarketGroup_1.default();
                element.fromJson(marketGroupFilterJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.marketGroupTypeFilter.isValid()) {
            json.marketGroupTypeFilter = this.marketGroupTypeFilter.getValue();
        }
        if (this.marketGroupFilter.length > 0) {
            json.marketGroupFilter = this.marketGroupFilter.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return true;
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