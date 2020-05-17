"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class SubscriptionHistory extends JsonMember_1.default {
    constructor(options) {
        super();
        this.subscriptionToken = options.subscriptionToken;
        if (options.expiryDateTime) {
            this.expiryDateTime = this.fromJson(options.expiryDateTime, Date);
        }
        if (options.expiredDateTime) {
            this.expiredDateTime = this.fromJson(options.expiredDateTime, Date);
        }
        if (options.createdDateTime) {
            this.createdDateTime = this.fromJson(options.createdDateTime, Date);
        }
        if (options.activationDateTime) {
            this.activationDateTime = this.fromJson(options.activationDateTime, Date);
        }
        if (options.cancellationDateTime) {
            this.cancellationDateTime = this.fromJson(options.cancellationDateTime, Date);
        }
        this.subscriptionStatus = options.subscriptionStatus;
        this.clientReference = options.clientReference;
    }
    toJson() {
        const json = {
            subscriptionToken: this.subscriptionToken,
        };
        if (typeof this.expiryDateTime !== 'undefined') {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (typeof this.expiredDateTime !== 'undefined') {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (typeof this.createdDateTime !== 'undefined') {
            json.createdDateTime = this.createdDateTime.toISOString();
        }
        if (typeof this.activationDateTime !== 'undefined') {
            json.activationDateTime = this.activationDateTime.toISOString();
        }
        if (typeof this.cancellationDateTime !== 'undefined') {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (typeof this.subscriptionStatus !== 'undefined') {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        if (typeof this.clientReference !== 'undefined') {
            json.clientReference = this.clientReference;
        }
        return json;
    }
    getSubscriptionToken() {
        return this.subscriptionToken;
    }
    setSubscriptionToken(subscriptionToken) {
        this.subscriptionToken = subscriptionToken;
    }
    getExpiryDateTime() {
        return this.expiryDateTime;
    }
    setExpiryDateTime(expiryDateTime) {
        this.expiryDateTime = expiryDateTime;
    }
    getExpiredDateTime() {
        return this.expiredDateTime;
    }
    setExpiredDateTime(expiredDateTime) {
        this.expiredDateTime = expiredDateTime;
    }
    getCreatedDateTime() {
        return this.createdDateTime;
    }
    setCreatedDateTime(createdDateTime) {
        this.createdDateTime = createdDateTime;
    }
    getActivationDateTime() {
        return this.activationDateTime;
    }
    setActivationDateTime(activationDateTime) {
        this.activationDateTime = activationDateTime;
    }
    getCancellationDateTime() {
        return this.cancellationDateTime;
    }
    setCancellationDateTime(cancellationDateTime) {
        this.cancellationDateTime = cancellationDateTime;
    }
    getSubscriptionStatus() {
        return this.subscriptionStatus;
    }
    setSubscriptionStatus(subscriptionStatus) {
        this.subscriptionStatus = subscriptionStatus;
    }
    getClientReference() {
        return this.clientReference;
    }
    setClientReference(clientReference) {
        this.clientReference = clientReference;
    }
}
exports.default = SubscriptionHistory;
//# sourceMappingURL=SubscriptionHistory.js.map