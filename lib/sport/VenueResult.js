"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class VenueResult extends JsonMember_1.default {
    constructor(venue = '', marketCount = null) {
        super();
        this.venue = venue;
        this.marketCount = marketCount;
    }
    fromJson(json) {
        if ('venue' in json) {
            this.venue = json.venue;
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }
    toJson() {
        const json = {};
        if (this.venue !== null) {
            json.venue = this.venue;
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getVenue() {
        return this.venue;
    }
    setVenue(venue) {
        this.venue = venue;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
}
exports.default = VenueResult;
