"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class ApplicationSubscription extends JsonMember_1.default {
    constructor(subscriptionToken = '', expiryDateTime = null, expiredDateTime = null, createdDateTime = null, activationDateTime = null, cancellationDateTime = null, subscriptionStatus = '', clientReference = '', vendorClientId = '') {
        super();
        this.subscriptionToken = subscriptionToken;
        this.expiryDateTime = expiryDateTime;
        this.expiredDateTime = expiredDateTime;
        this.createdDateTime = createdDateTime;
        this.activationDateTime = activationDateTime;
        this.cancellationDateTime = cancellationDateTime;
        this.subscriptionStatus = subscriptionStatus;
        this.clientReference = clientReference;
        this.vendorClientId = vendorClientId;
    }
    fromJson(json) {
        if ('subscriptionToken' in json) {
            this.subscriptionToken = json.subscriptionToken;
        }
        if ('expiryDateTime' in json) {
            this.expiryDateTime = new Date(json.expiryDateTime);
        }
        if ('expiredDateTime' in json) {
            this.expiredDateTime = new Date(json.expiredDateTime);
        }
        if ('createdDateTime' in json) {
            this.createdDateTime = new Date(json.createdDateTime);
        }
        if ('activationDateTime' in json) {
            this.activationDateTime = new Date(json.activationDateTime);
        }
        if ('cancellationDateTime' in json) {
            this.cancellationDateTime = new Date(json.cancellationDateTime);
        }
        if ('subscriptionStatus' in json) {
            this.subscriptionStatus = json.subscriptionStatus;
        }
        if ('clientReference' in json) {
            this.clientReference = json.clientReference;
        }
        if ('vendorClientId' in json) {
            this.vendorClientId = json.vendorClientId;
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionToken !== '') {
            json.subscriptionToken = this.subscriptionToken;
        }
        if (this.expiryDateTime !== null) {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (this.expiredDateTime !== null) {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (this.createdDateTime !== null) {
            json.createdDateTime = this.createdDateTime.toISOString();
        }
        if (this.activationDateTime !== null) {
            json.activationDateTime = this.activationDateTime.toISOString();
        }
        if (this.cancellationDateTime !== null) {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (this.subscriptionStatus !== '') {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        if (this.clientReference !== '') {
            json.clientReference = this.clientReference;
        }
        if (this.vendorClientId !== '') {
            json.vendorClientId = this.vendorClientId;
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
    getVendorClientId() {
        return this.vendorClientId;
    }
    setVendorClientId(vendorClientId) {
        this.vendorClientId = vendorClientId;
    }
}
exports.default = ApplicationSubscription;
//# sourceMappingURL=ApplicationSubscription.js.map