"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const SubscriptionStatus_1 = require("../account/enum/SubscriptionStatus");
const JsonRequest_1 = require("../JsonRequest");
class ListApplicationSubscriptionTokensRequest extends JsonRequest_1.default {
    constructor(subscriptionStatus = new SubscriptionStatus_1.default()) {
        super();
        this.subscriptionStatus = subscriptionStatus;
    }
    fromJson(json) {
        if ('subscriptionStatus' in json) {
            this.subscriptionStatus.setValue(json.subscriptionStatus);
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionStatus.isValid()) {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        return json;
    }
    isValid() {
        return true;
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