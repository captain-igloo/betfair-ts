"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketProjection_1 = require("../sport/enum/MarketProjection");
const MarketSort_1 = require("../sport/enum/MarketSort");
const MarketFilter_1 = require("../sport/MarketFilter");
class ListMarketCatalogueRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.filter = this.fromJson(options.filter, MarketFilter_1.default);
        this.marketProjection = options.marketProjection && this.setFromJson(options.marketProjection, MarketProjection_1.default);
        if (options.sort) {
            this.sort = this.fromJson(options.sort, MarketSort_1.default);
        }
        this.maxResults = options.maxResults;
        this.locale = options.locale;
    }
    toJson() {
        const json = {
            filter: this.filter.toJson(),
            maxResults: this.maxResults,
        };
        if (this.marketProjection && this.marketProjection.size > 0) {
            json.marketProjection = this.setToJson(this.marketProjection);
        }
        if (this.sort) {
            json.sort = this.sort.getValue();
        }
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        return json;
    }
    getFilter() {
        return this.filter;
    }
    setFilter(filter) {
        this.filter = filter;
    }
    getMarketProjection() {
        return this.marketProjection;
    }
    setMarketProjection(marketProjection) {
        this.marketProjection = marketProjection;
    }
    getSort() {
        return this.sort;
    }
    setSort(sort) {
        this.sort = sort;
    }
    getMaxResults() {
        return this.maxResults;
    }
    setMaxResults(maxResults) {
        this.maxResults = maxResults;
    }
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
}
exports.default = ListMarketCatalogueRequest;
//# sourceMappingURL=ListMarketCatalogueRequest.js.map