"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketFilter_1 = require("../sport/MarketFilter");
class ListCompetitionsRequest extends JsonRequest_1.default {
    constructor(filter = new MarketFilter_1.default(), locale = '') {
        super();
        this.filter = filter;
        this.locale = locale;
    }
    fromJson(json) {
        if ('filter' in json) {
            this.filter.fromJson(json.filter);
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
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        return json;
    }
    isValid() {
        return this.filter.isValid();
    }
    getFilter() {
        return this.filter;
    }
    setFilter(filter) {
        this.filter = filter;
    }
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
}
exports.default = ListCompetitionsRequest;
