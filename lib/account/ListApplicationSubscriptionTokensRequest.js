"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const SubscriptionStatus_1 = require("../account/enum/SubscriptionStatus");
class ListApplicationSubscriptionTokensRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        if (options.subscriptionStatus) {
            this.subscriptionStatus = this.fromJson(options.subscriptionStatus, SubscriptionStatus_1.default);
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionStatus) {
            json.subscriptionStatus = this.subscriptionStatus.getValue();
        }
        return json;
    }
    getSubscriptionStatus() {
        return this.subscriptionStatus;
    }
    setSubscriptionStatus(subscriptionStatus) {
        this.subscriptionStatus = subscriptionStatus;
    }
}
exports.default = ListApplicationSubscriptionTokensRequest;
//# sourceMappingURL=ListApplicationSubscriptionTokensRequest.js.map