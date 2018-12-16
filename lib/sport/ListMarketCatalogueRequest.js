"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketFilter_1 = require("../sport/MarketFilter");
const MarketSort_1 = require("../sport/enum/MarketSort");
class ListMarketCatalogueRequest extends JsonRequest_1.default {
    constructor(filter = new MarketFilter_1.default(), marketProjection = new Set(), sort = new MarketSort_1.default(), maxResults = null, locale = '') {
        super();
        this.filter = filter;
        this.marketProjection = marketProjection;
        this.sort = sort;
        this.maxResults = maxResults;
        this.locale = locale;
    }
    fromJson(json) {
        if ('filter' in json) {
            this.filter.fromJson(json.filter);
        }
        if ('marketProjection' in json) {
            this.marketProjection = json.marketProjection;
        }
        if ('sort' in json) {
            this.sort.setValue(json.sort);
        }
        if ('maxResults' in json) {
            this.maxResults = json.maxResults;
        }
        if ('locale' in json) {
            this.locale = json.locale;
        }
    }
    toJson() {
        const json = {};
        if (this.filter.isValid()) {
            json.filter = this.filter.toJson();
        }
        if (this.marketProjection.size > 0) {
            json.marketProjection = this.marketProjection;
        }
        if (this.sort.isValid()) {
            json.sort = this.sort;
        }
        if (this.maxResults !== null) {
            json.maxResults = this.maxResults;
        }
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        return json;
    }
    isValid() {
        return this.filter.isValid() &&
            this.maxResults !== null;
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
