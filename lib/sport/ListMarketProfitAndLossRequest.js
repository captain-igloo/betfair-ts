"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class ListMarketProfitAndLossRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketIds = this.setFromJson(options.marketIds);
        this.includeSettledBets = options.includeSettledBets;
        this.includeBspBets = options.includeBspBets;
        this.netOfCommission = options.netOfCommission;
    }
    toJson() {
        const json = {
            marketIds: this.setToJson(this.marketIds),
        };
        if (typeof this.includeSettledBets !== 'undefined') {
            json.includeSettledBets = this.includeSettledBets;
        }
        if (typeof this.includeBspBets !== 'undefined') {
            json.includeBspBets = this.includeBspBets;
        }
        if (typeof this.netOfCommission !== 'undefined') {
            json.netOfCommission = this.netOfCommission;
        }
        return json;
    }
    getMarketIds() {
        return this.marketIds;
    }
    setMarketIds(marketIds) {
        this.marketIds = marketIds;
    }
    getIncludeSettledBets() {
        return this.includeSettledBets;
    }
    setIncludeSettledBets(includeSettledBets) {
        this.includeSettledBets = includeSettledBets;
    }
    getIncludeBspBets() {
        return this.includeBspBets;
    }
    setIncludeBspBets(includeBspBets) {
        this.includeBspBets = includeBspBets;
    }
    getNetOfCommission() {
        return this.netOfCommission;
    }
    setNetOfCommission(netOfCommission) {
        this.netOfCommission = netOfCommission;
    }
}
exports.default = ListMarketProfitAndLossRequest;
//# sourceMappingURL=ListMarketProfitAndLossRequest.js.map