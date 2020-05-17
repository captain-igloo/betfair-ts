"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketFilter_1 = require("../sport/MarketFilter");
class ListEventsRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.filter = this.fromJson(options.filter, MarketFilter_1.default);
        this.locale = options.locale;
    }
    toJson() {
        const json = {
            filter: this.filter.toJson(),
        };
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
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
}
exports.default = ListEventsRequest;
//# sourceMappingURL=ListEventsRequest.js.map