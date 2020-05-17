"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const ExposureLimit_1 = require("../sport/ExposureLimit");
const MarketGroup_1 = require("../sport/MarketGroup");
class SetExposureLimitForMarketGroupRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketGroup = this.fromJson(options.marketGroup, MarketGroup_1.default);
        this.limit = this.fromJson(options.limit, ExposureLimit_1.default);
    }
    toJson() {
        const json = {
            marketGroup: this.marketGroup.toJson(),
            limit: this.limit.toJson(),
        };
        return json;
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
//# sourceMappingURL=SetExposureLimitForMarketGroupRequest.js.map