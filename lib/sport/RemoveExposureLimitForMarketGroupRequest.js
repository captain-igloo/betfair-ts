"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroup_1 = require("../sport/MarketGroup");
class RemoveExposureLimitForMarketGroupRequest extends JsonRequest_1.default {
    constructor(marketGroup = new MarketGroup_1.default()) {
        super();
        this.marketGroup = marketGroup;
    }
    fromJson(json) {
        if ('marketGroup' in json) {
            this.marketGroup.fromJson(json.marketGroup);
        }
    }
    toJson() {
        const json = {};
        if (this.marketGroup.isValid()) {
            json.marketGroup = this.marketGroup.toJson();
        }
        return json;
    }
    isValid() {
        return this.marketGroup.isValid();
    }
    getMarketGroup() {
        return this.marketGroup;
    }
    setMarketGroup(marketGroup) {
        this.marketGroup = marketGroup;
    }
}
exports.default = RemoveExposureLimitForMarketGroupRequest;
//# sourceMappingURL=RemoveExposureLimitForMarketGroupRequest.js.map