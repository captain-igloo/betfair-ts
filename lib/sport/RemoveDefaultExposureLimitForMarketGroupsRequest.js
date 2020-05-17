"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
class RemoveDefaultExposureLimitForMarketGroupsRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketGroupType = this.fromJson(options.marketGroupType, MarketGroupType_1.default);
    }
    toJson() {
        const json = {
            marketGroupType: this.marketGroupType.getValue(),
        };
        return json;
    }
    getMarketGroupType() {
        return this.marketGroupType;
    }
    setMarketGroupType(marketGroupType) {
        this.marketGroupType = marketGroupType;
    }
}
exports.default = RemoveDefaultExposureLimitForMarketGroupsRequest;
//# sourceMappingURL=RemoveDefaultExposureLimitForMarketGroupsRequest.js.map