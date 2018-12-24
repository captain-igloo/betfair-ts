"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const ExposureLimit_1 = require("../sport/ExposureLimit");
class SetDefaultExposureLimitForMarketGroupsRequest extends JsonRequest_1.default {
    constructor(marketGroupType = new MarketGroupType_1.default(), limit = new ExposureLimit_1.default()) {
        super();
        this.marketGroupType = marketGroupType;
        this.limit = limit;
    }
    fromJson(json) {
        if ('marketGroupType' in json) {
            this.marketGroupType.setValue(json.marketGroupType);
        }
        if ('limit' in json) {
            this.limit.fromJson(json.limit);
        }
    }
    toJson() {
        const json = {};
        if (this.marketGroupType.isValid()) {
            json.marketGroupType = this.marketGroupType;
        }
        if (this.limit.isValid()) {
            json.limit = this.limit.toJson();
        }
        return json;
    }
    isValid() {
        return this.marketGroupType.isValid() &&
            this.limit.isValid();
    }
    getMarketGroupType() {
        return this.marketGroupType;
    }
    setMarketGroupType(marketGroupType) {
        this.marketGroupType = marketGroupType;
    }
    getLimit() {
        return this.limit;
    }
    setLimit(limit) {
        this.limit = limit;
    }
}
exports.default = SetDefaultExposureLimitForMarketGroupsRequest;
//# sourceMappingURL=SetDefaultExposureLimitForMarketGroupsRequest.js.map