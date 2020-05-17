"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketGroup_1 = require("../sport/MarketGroup");
class RemoveExposureLimitForMarketGroupRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketGroup = this.fromJson(options.marketGroup, MarketGroup_1.default);
    }
    toJson() {
        const json = {
            marketGroup: this.marketGroup.toJson(),
        };
        return json;
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