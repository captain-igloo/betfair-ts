"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ExposureLimitsForMarketGroups_1 = require("../sport/ExposureLimitsForMarketGroups");
class ListExposureLimitsForMarketGroupsResponse extends JsonResponse_1.default {
    constructor(exposureLimitsForMarketGroupses = []) {
        super();
        this.exposureLimitsForMarketGroupses = exposureLimitsForMarketGroupses;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('exposureLimitsForMarketGroupses' in json) {
                this.exposureLimitsForMarketGroupses = json.map((exposureLimitsForMarketGroupsesJson) => {
                    const element = new ExposureLimitsForMarketGroups_1.default();
                    element.fromJson(exposureLimitsForMarketGroupsesJson);
                    return element;
                });
            }
        }
    }
    toJson() {
        const json = {};
        if (this.exposureLimitsForMarketGroupses.length > 0) {
            json.exposureLimitsForMarketGroupses = this.exposureLimitsForMarketGroupses.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.exposureLimitsForMarketGroupses.length > 0;
    }
    getExposureLimitsForMarketGroupses() {
        return this.exposureLimitsForMarketGroupses;
    }
    setExposureLimitsForMarketGroupses(exposureLimitsForMarketGroupses) {
        this.exposureLimitsForMarketGroupses = exposureLimitsForMarketGroupses;
    }
}
exports.default = ListExposureLimitsForMarketGroupsResponse;
