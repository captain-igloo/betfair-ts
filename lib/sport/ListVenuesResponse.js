"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const VenueResult_1 = require("../sport/VenueResult");
class ListVenuesResponse extends JsonResponse_1.default {
    constructor(venueResults = []) {
        super();
        this.venueResults = venueResults;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.venueResults = json.map((venueResultsJson) => {
                const element = new VenueResult_1.default();
                element.fromJson(venueResultsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.venueResults.length > 0) {
            json.venueResults = this.venueResults.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.venueResults.length > 0;
    }
    getVenueResults() {
        return this.venueResults;
    }
    setVenueResults(venueResults) {
        this.venueResults = venueResults;
    }
}
exports.default = ListVenuesResponse;
