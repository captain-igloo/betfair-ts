"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class CancelApplicationSubscriptionRequest extends JsonRequest_1.default {
    constructor(subscriptionToken = '') {
        super();
        this.subscriptionToken = subscriptionToken;
    }
    fromJson(json) {
        if ('subscriptionToken' in json) {
            this.subscriptionToken = json.subscriptionToken;
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionToken !== '') {
            json.subscriptionToken = this.subscriptionToken;
        }
        return json;
    }
    isValid() {
        return this.subscriptionToken !== '';
    }
    getSubscriptionToken() {
        return this.subscriptionToken;
    }
    setSubscriptionToken(subscriptionToken) {
        this.subscriptionToken = subscriptionToken;
    }
}
exports.default = CancelApplicationSubscriptionRequest;
//# sourceMappingURL=CancelApplicationSubscriptionRequest.js.map