"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class SubscriptionTokenInfo extends JsonMember_1.default {
    constructor(options) {
        super();
        this.subscriptionToken = options.subscriptionToken;
        if (options.activatedDateTime) {
            this.activatedDateTime = this.fromJson(options.activatedDateTime, Date);
        }
        if (options.expiryDateTime) {
            this.expiryDateTime = this.fromJson(options.expiryDateTime, Date);
        }
        if (options.expiredDateTime) {
            this.expiredDateTime = this.fromJson(options.expiredDateTime, Date);
        }
        if (options.cancellationDateTime) {
            this.cancellationDateTime = this.fromJson(options.cancellationDateTime, Date);
        }
        this.subscriptionStatus = options.subscriptionStatus;
    }
    toJson() {
        const json = {
            subscriptionToken: this.subscriptionToken,
        };
        if (typeof this.activatedDateTime !== 'undefined') {
            json.activatedDateTime = this.activatedDateTime.toISOString();
        }
        if (typeof this.expiryDateTime !== 'undefined') {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (typeof this.expiredDateTime !== 'undefined') {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (typeof this.cancellationDateTime !== 'undefined') {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (typeof this.subscriptionStatus !== 'undefined') {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        return json;
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