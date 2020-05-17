"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const VenueResult_1 = require("../sport/VenueResult");
class ListVenuesResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.venueResults = this.arrayFromJson(options, VenueResult_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getVenueResults() {
        return this.venueResults;
    }
    setVenueResults(venueResults) {
        this.venueResults = venueResults;
    }
}
exports.default = ListVenuesResponse;
//# sourceMappingURL=ListVenuesResponse.js.map