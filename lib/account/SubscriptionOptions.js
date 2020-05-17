"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class SubscriptionOptions extends JsonMember_1.default {
    constructor(options) {
        super();
        this.subscriptionLength = options.subscription_length;
        this.subscriptionToken = options.subscription_token;
        this.clientReference = options.client_reference;
    }
    toJson() {
        const json = {};
        if (typeof this.subscriptionLength !== 'undefined') {
            json.subscription_length = this.subscriptionLength;
        }
        if (typeof this.subscriptionToken !== 'undefined') {
            json.subscription_token = this.subscriptionToken;
        }
        if (typeof this.clientReference !== 'undefined') {
            json.client_reference = this.clientReference;
        }
        return json;
    }
    getSubscriptionLength() {
        return this.subscriptionLength;
    }
    setSubscriptionLength(subscriptionLength) {
        this.subscriptionLength = subscriptionLength;
    }
    getSubscriptionToken() {
        return this.subscriptionToken;
    }
    setSubscriptionToken(subscriptionToken) {
        this.subscriptionToken = subscriptionToken;
    }
    getClientReference() {
        return this.clientReference;
    }
    setClientReference(clientReference) {
        this.clientReference = clientReference;
    }
}
exports.default = SubscriptionOptions;
//# sourceMappingURL=SubscriptionOptions.js.map