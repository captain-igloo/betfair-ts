"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class ListMarketProfitAndLossRequest extends JsonRequest_1.default {
    constructor(marketIds = new Set(), includeSettledBets = null, includeBspBets = null, netOfCommission = null) {
        super();
        this.marketIds = marketIds;
        this.includeSettledBets = includeSettledBets;
        this.includeBspBets = includeBspBets;
        this.netOfCommission = netOfCommission;
    }
    fromJson(json) {
        if ('marketIds' in json) {
            this.marketIds = json.marketIds;
        }
        if ('includeSettledBets' in json) {
            this.includeSettledBets = json.includeSettledBets;
        }
        if ('includeBspBets' in json) {
            this.includeBspBets = json.includeBspBets;
        }
        if ('netOfCommission' in json) {
            this.netOfCommission = json.netOfCommission;
        }
    }
    toJson() {
        const json = {};
        if (this.marketIds.size > 0) {
            json.marketIds = this.marketIds;
        }
        if (this.includeSettledBets !== null) {
            json.includeSettledBets = this.includeSettledBets;
        }
        if (this.includeBspBets !== null) {
            json.includeBspBets = this.includeBspBets;
        }
        if (this.netOfCommission !== null) {
            json.netOfCommission = this.netOfCommission;
        }
        return json;
    }
    isValid() {
        return this.marketIds.size > 0;
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