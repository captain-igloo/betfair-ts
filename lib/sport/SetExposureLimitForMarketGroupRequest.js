"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const ExposureLimit_1 = require("../sport/ExposureLimit");
const MarketGroup_1 = require("../sport/MarketGroup");
class SetExposureLimitForMarketGroupRequest extends JsonRequest_1.default {
    constructor(marketGroup = new MarketGroup_1.default(), limit = new ExposureLimit_1.default()) {
        super();
        this.marketGroup = marketGroup;
        this.limit = limit;
    }
    fromJson(json) {
        if ('marketGroup' in json) {
            this.marketGroup.fromJson(json.marketGroup);
        }
        if ('limit' in json) {
            this.limit.fromJson(json.limit);
        }
    }
    toJson() {
        const json = {};
        if (this.marketGroup.isValid()) {
            json.marketGroup = this.marketGroup.toJson();
        }
        if (this.limit.isValid()) {
            json.limit = this.limit.toJson();
        }
        return json;
    }
    isValid() {
        return this.marketGroup.isValid() &&
            this.limit.isValid();
    }
    getMarketGroup() {
        return this.marketGroup;
    }
    setMarketGroup(marketGroup) {
        this.marketGroup = marketGroup;
    }
    getLimit() {
        return this.limit;
    }
    setLimit(limit) {
        this.limit = limit;
    }
}
exports.default = SetExposureLimitForMarketGroupRequest;
