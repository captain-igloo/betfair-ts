"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class SubscriptionOptions extends JsonMember_1.default {
    constructor(subscription_length = null, subscription_token = '', client_reference = '') {
        super();
        this.subscription_length = subscription_length;
        this.subscription_token = subscription_token;
        this.client_reference = client_reference;
    }
    fromJson(json) {
        if ('subscription_length' in json) {
            this.subscription_length = json.subscription_length;
        }
        if ('subscription_token' in json) {
            this.subscription_token = json.subscription_token;
        }
        if ('client_reference' in json) {
            this.client_reference = json.client_reference;
        }
    }
    toJson() {
        const json = {};
        if (this.subscription_length !== null) {
            json.subscription_length = this.subscription_length;
        }
        if (this.subscription_token !== null) {
            json.subscription_token = this.subscription_token;
        }
        if (this.client_reference !== null) {
            json.client_reference = this.client_reference;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getSubscription_length() {
        return this.subscription_length;
    }
    setSubscription_length(subscription_length) {
        this.subscription_length = subscription_length;
    }
    getSubscription_token() {
        return this.subscription_token;
    }
    setSubscription_token(subscription_token) {
        this.subscription_token = subscription_token;
    }
    getClient_reference() {
        return this.client_reference;
    }
    setClient_reference(client_reference) {
        this.client_reference = client_reference;
    }
}
exports.default = SubscriptionOptions;
