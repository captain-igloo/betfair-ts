"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CurrentOrderSummary_1 = require("../sport/CurrentOrderSummary");
class CurrentOrderSummaryReport extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options.currentOrders) {
                this.currentOrders = this.arrayFromJson(options.currentOrders, CurrentOrderSummary_1.default);
            }
            this.moreAvailable = options.moreAvailable;
        }
    }
    toJson() {
        const json = {};
        if (this.currentOrders && this.currentOrders.length > 0) {
            json.currentOrders = this.currentOrders.map((value) => value.toJson());
        }
        if (typeof this.moreAvailable !== 'undefined') {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }
    getCurrentOrders() {
        return this.currentOrders;
    }
    setCurrentOrders(currentOrders) {
        this.currentOrders = currentOrders;
    }
    getMoreAvailable() {
        return this.moreAvailable;
    }
    setMoreAvailable(moreAvailable) {
        this.moreAvailable = moreAvailable;
    }
}
exports.default = CurrentOrderSummaryReport;
//# sourceMappingURL=CurrentOrderSummaryReport.js.map