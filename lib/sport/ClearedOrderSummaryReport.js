"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ClearedOrderSummary_1 = require("../sport/ClearedOrderSummary");
class ClearedOrderSummaryReport extends JsonResponse_1.default {
    constructor(clearedOrders = [], moreAvailable = null) {
        super();
        this.clearedOrders = clearedOrders;
        this.moreAvailable = moreAvailable;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('clearedOrders' in json) {
                this.clearedOrders = json.clearedOrders.map((clearedOrdersJson) => {
                    const element = new ClearedOrderSummary_1.default();
                    element.fromJson(clearedOrdersJson);
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
        if (this.clearedOrders.length > 0) {
            json.clearedOrders = this.clearedOrders.map((value) => value.toJson());
        }
        if (this.moreAvailable !== null) {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }
    isValid() {
        return this.clearedOrders.length > 0 &&
            this.moreAvailable !== null;
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
