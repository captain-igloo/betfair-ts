"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
class RemoveDefaultExposureLimitForMarketGroupsRequest extends JsonRequest_1.default {
    constructor(marketGroupType = new MarketGroupType_1.default()) {
        super();
        this.marketGroupType = marketGroupType;
    }
    fromJson(json) {
        if ('marketGroupType' in json) {
            this.marketGroupType.setValue(json.marketGroupType);
        }
    }
    toJson() {
        const json = {};
        if (this.marketGroupType.isValid()) {
            json.marketGroupType = this.marketGroupType;
        }
        return json;
    }
    isValid() {
        return this.marketGroupType.isValid();
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