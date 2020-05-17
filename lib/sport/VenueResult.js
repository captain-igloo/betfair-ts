"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class VenueResult extends JsonMember_1.default {
    constructor(options) {
        super();
        this.venue = options.venue;
        this.marketCount = options.marketCount;
    }
    toJson() {
        const json = {};
        if (typeof this.venue !== 'undefined') {
            json.venue = this.venue;
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
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
//# sourceMappingURL=VenueResult.js.map