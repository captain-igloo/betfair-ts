"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class DeveloperAppVersion extends JsonMember_1.default {
    constructor(options) {
        super();
        this.owner = options.owner;
        this.versionId = options.versionId;
        this.version = options.version;
        this.applicationKey = options.applicationKey;
        this.delayData = options.delayData;
        this.subscriptionRequired = options.subscriptionRequired;
        this.ownerManaged = options.ownerManaged;
        this.active = options.active;
        this.vendorId = options.vendorId;
        this.vendorSecret = options.vendorSecret;
    }
    toJson() {
        const json = {
            owner: this.owner,
            versionId: this.versionId,
            version: this.version,
            applicationKey: this.applicationKey,
            subscriptionRequired: this.subscriptionRequired,
            ownerManaged: this.ownerManaged,
            active: this.active,
        };
        if (typeof this.delayData !== 'undefined') {
            json.delayData = this.delayData;
        }
        if (typeof this.vendorId !== 'undefined') {
            json.vendorId = this.vendorId;
        }
        if (typeof this.vendorSecret !== 'undefined') {
            json.vendorSecret = this.vendorSecret;
        }
        return json;
    }
    getOwner() {
        return this.owner;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    getVersionId() {
        return this.versionId;
    }
    setVersionId(versionId) {
        this.versionId = versionId;
    }
    getVersion() {
        return this.version;
    }
    setVersion(version) {
        this.version = version;
    }
    getApplicationKey() {
        return this.applicationKey;
    }
    setApplicationKey(applicationKey) {
        this.applicationKey = applicationKey;
    }
    getDelayData() {
        return this.delayData;
    }
    setDelayData(delayData) {
        this.delayData = delayData;
    }
    getSubscriptionRequired() {
        return this.subscriptionRequired;
    }
    setSubscriptionRequired(subscriptionRequired) {
        this.subscriptionRequired = subscriptionRequired;
    }
    getOwnerManaged() {
        return this.ownerManaged;
    }
    setOwnerManaged(ownerManaged) {
        this.ownerManaged = ownerManaged;
    }
    getActive() {
        return this.active;
    }
    setActive(active) {
        this.active = active;
    }
    getVendorId() {
        return this.vendorId;
    }
    setVendorId(vendorId) {
        this.vendorId = vendorId;
    }
    getVendorSecret() {
        return this.vendorSecret;
    }
    setVendorSecret(vendorSecret) {
        this.vendorSecret = vendorSecret;
    }
}
exports.default = DeveloperAppVersion;
//# sourceMappingURL=DeveloperAppVersion.js.map