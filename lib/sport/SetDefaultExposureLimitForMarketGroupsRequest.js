"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const ExposureLimit_1 = require("../sport/ExposureLimit");
class SetDefaultExposureLimitForMarketGroupsRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketGroupType = this.fromJson(options.marketGroupType, MarketGroupType_1.default);
        this.limit = this.fromJson(options.limit, ExposureLimit_1.default);
    }
    toJson() {
        const json = {
            marketGroupType: this.marketGroupType.getValue(),
            limit: this.limit.toJson(),
        };
        return json;
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