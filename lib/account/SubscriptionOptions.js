"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class SubscriptionOptions extends JsonMember_1.default {
    constructor(subscriptionLength = null, subscriptionToken = '', clientReference = '') {
        super();
        this.subscriptionLength = subscriptionLength;
        this.subscriptionToken = subscriptionToken;
        this.clientReference = clientReference;
    }
    fromJson(json) {
        if ('subscription_length' in json) {
            this.subscriptionLength = json.subscription_length;
        }
        if ('subscription_token' in json) {
            this.subscriptionToken = json.subscription_token;
        }
        if ('client_reference' in json) {
            this.clientReference = json.client_reference;
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionLength !== null) {
            json.subscription_length = this.subscriptionLength;
        }
        if (this.subscriptionToken !== null) {
            json.subscription_token = this.subscriptionToken;
        }
        if (this.clientReference !== null) {
            json.client_reference = this.clientReference;
        }
        return json;
    }
    isValid() {
        return true;
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
