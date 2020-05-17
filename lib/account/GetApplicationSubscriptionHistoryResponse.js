"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const SubscriptionHistory_1 = require("../account/SubscriptionHistory");
class GetApplicationSubscriptionHistoryResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.subscriptionHistorys = this.arrayFromJson(options, SubscriptionHistory_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getSubscriptionHistorys() {
        return this.subscriptionHistorys;
    }
    setSubscriptionHistorys(subscriptionHistorys) {
        this.subscriptionHistorys = subscriptionHistorys;
    }
}
exports.default = GetApplicationSubscriptionHistoryResponse;
//# sourceMappingURL=GetApplicationSubscriptionHistoryResponse.js.map