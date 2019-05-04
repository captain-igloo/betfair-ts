"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CurrentOrderSummary_1 = require("../sport/CurrentOrderSummary");
class CurrentOrderSummaryReport extends JsonResponse_1.default {
    constructor(currentOrders = [], moreAvailable = null) {
        super();
        this.currentOrders = currentOrders;
        this.moreAvailable = moreAvailable;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('currentOrders' in json) {
                this.currentOrders = json.currentOrders.map((currentOrdersJson) => {
                    const element = new CurrentOrderSummary_1.default();
                    element.fromJson(currentOrdersJson);
                    return element;
                });
            }
            if ('moreAvailable' in json) {
                this.moreAvailable = json.moreAvailable;
            }
        }
    }
    toJson() {
        const json = {};
        if (this.currentOrders.length > 0) {
            json.currentOrders = this.currentOrders.map((value) => value.toJson());
        }
        if (this.moreAvailable !== null) {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }
    isValid() {
        return this.currentOrders.length > 0 &&
            this.moreAvailable !== null;
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