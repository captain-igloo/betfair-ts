"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const SubscriptionHistory_1 = require("../account/SubscriptionHistory");
class GetApplicationSubscriptionHistoryResponse extends JsonResponse_1.default {
    constructor(subscriptionHistorys = []) {
        super();
        this.subscriptionHistorys = subscriptionHistorys;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.subscriptionHistorys = json.map((subscriptionHistorysJson) => {
                const element = new SubscriptionHistory_1.default();
                element.fromJson(subscriptionHistorysJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionHistorys.length > 0) {
            json.subscriptionHistorys = this.subscriptionHistorys.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.subscriptionHistorys.length > 0;
    }
    getSubscriptionHistorys() {
        return this.subscriptionHistorys;
    }
    setSubscriptionHistorys(subscriptionHistorys) {
        this.subscriptionHistorys = subscriptionHistorys;
    }
}
exports.default = GetApplicationSubscriptionHistoryResponse;
