"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ExposureLimitsForMarketGroups_1 = require("../sport/ExposureLimitsForMarketGroups");
class ListExposureLimitsForMarketGroupsResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.exposureLimitsForMarketGroupses = this.arrayFromJson(options, ExposureLimitsForMarketGroups_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getExposureLimitsForMarketGroupses() {
        return this.exposureLimitsForMarketGroupses;
    }
    setExposureLimitsForMarketGroupses(exposureLimitsForMarketGroupses) {
        this.exposureLimitsForMarketGroupses = exposureLimitsForMarketGroupses;
    }
}
exports.default = ListExposureLimitsForMarketGroupsResponse;
//# sourceMappingURL=ListExposureLimitsForMarketGroupsResponse.js.map