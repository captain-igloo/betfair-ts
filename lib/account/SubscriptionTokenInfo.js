"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class SubscriptionTokenInfo extends JsonMember_1.default {
    constructor(subscriptionToken = '', activatedDateTime = null, expiryDateTime = null, expiredDateTime = null, cancellationDateTime = null, subscriptionStatus = '') {
        super();
        this.subscriptionToken = subscriptionToken;
        this.activatedDateTime = activatedDateTime;
        this.expiryDateTime = expiryDateTime;
        this.expiredDateTime = expiredDateTime;
        this.cancellationDateTime = cancellationDateTime;
        this.subscriptionStatus = subscriptionStatus;
    }
    fromJson(json) {
        if ('subscriptionToken' in json) {
            this.subscriptionToken = json.subscriptionToken;
        }
        if ('activatedDateTime' in json) {
            this.activatedDateTime = new Date(json.activatedDateTime);
        }
        if ('expiryDateTime' in json) {
            this.expiryDateTime = new Date(json.expiryDateTime);
        }
        if ('expiredDateTime' in json) {
            this.expiredDateTime = new Date(json.expiredDateTime);
        }
        if ('cancellationDateTime' in json) {
            this.cancellationDateTime = new Date(json.cancellationDateTime);
        }
        if ('subscriptionStatus' in json) {
            this.subscriptionStatus = json.subscriptionStatus;
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionToken !== null) {
            json.subscriptionToken = this.subscriptionToken;
        }
        if (this.activatedDateTime !== null) {
            json.activatedDateTime = this.activatedDateTime.toISOString();
        }
        if (this.expiryDateTime !== null) {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (this.expiredDateTime !== null) {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (this.cancellationDateTime !== null) {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (this.subscriptionStatus !== null) {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        return json;
    }
    isValid() {
        return this.subscriptionToken !== null;
    }
    getSubscriptionToken() {
        return this.subscriptionToken;
    }
    setSubscriptionToken(subscriptionToken) {
        this.subscriptionToken = subscriptionToken;
    }
    getActivatedDateTime() {
        return this.activatedDateTime;
    }
    setActivatedDateTime(activatedDateTime) {
        this.activatedDateTime = activatedDateTime;
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
}
exports.default = SubscriptionTokenInfo;
//# sourceMappingURL=SubscriptionTokenInfo.js.map