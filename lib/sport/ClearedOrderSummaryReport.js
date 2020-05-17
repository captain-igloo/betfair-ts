"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ClearedOrderSummary_1 = require("../sport/ClearedOrderSummary");
class ClearedOrderSummaryReport extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options.clearedOrders) {
                this.clearedOrders = this.arrayFromJson(options.clearedOrders, ClearedOrderSummary_1.default);
            }
            this.moreAvailable = options.moreAvailable;
        }
    }
    toJson() {
        const json = {};
        if (this.clearedOrders && this.clearedOrders.length > 0) {
            json.clearedOrders = this.clearedOrders.map((value) => value.toJson());
        }
        if (typeof this.moreAvailable !== 'undefined') {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }
    getClearedOrders() {
        return this.clearedOrders;
    }
    setClearedOrders(clearedOrders) {
        this.clearedOrders = clearedOrders;
    }
    getMoreAvailable() {
        return this.moreAvailable;
    }
    setMoreAvailable(moreAvailable) {
        this.moreAvailable = moreAvailable;
    }
}
exports.default = ClearedOrderSummaryReport;
//# sourceMappingURL=ClearedOrderSummaryReport.js.map