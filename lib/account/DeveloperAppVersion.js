"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class DeveloperAppVersion extends JsonMember_1.default {
    constructor(owner = '', versionId = null, version = '', applicationKey = '', delayData = null, subscriptionRequired = null, ownerManaged = null, active = null, vendorId = '', vendorSecret = '') {
        super();
        this.owner = owner;
        this.versionId = versionId;
        this.version = version;
        this.applicationKey = applicationKey;
        this.delayData = delayData;
        this.subscriptionRequired = subscriptionRequired;
        this.ownerManaged = ownerManaged;
        this.active = active;
        this.vendorId = vendorId;
        this.vendorSecret = vendorSecret;
    }
    fromJson(json) {
        if ('owner' in json) {
            this.owner = json.owner;
        }
        if ('versionId' in json) {
            this.versionId = json.versionId;
        }
        if ('version' in json) {
            this.version = json.version;
        }
        if ('applicationKey' in json) {
            this.applicationKey = json.applicationKey;
        }
        if ('delayData' in json) {
            this.delayData = json.delayData;
        }
        if ('subscriptionRequired' in json) {
            this.subscriptionRequired = json.subscriptionRequired;
        }
        if ('ownerManaged' in json) {
            this.ownerManaged = json.ownerManaged;
        }
        if ('active' in json) {
            this.active = json.active;
        }
        if ('vendorId' in json) {
            this.vendorId = json.vendorId;
        }
        if ('vendorSecret' in json) {
            this.vendorSecret = json.vendorSecret;
        }
    }
    toJson() {
        const json = {};
        if (this.owner !== null) {
            json.owner = this.owner;
        }
        if (this.versionId !== null) {
            json.versionId = this.versionId;
        }
        if (this.version !== null) {
            json.version = this.version;
        }
        if (this.applicationKey !== null) {
            json.applicationKey = this.applicationKey;
        }
        if (this.delayData !== null) {
            json.delayData = this.delayData;
        }
        if (this.subscriptionRequired !== null) {
            json.subscriptionRequired = this.subscriptionRequired;
        }
        if (this.ownerManaged !== null) {
            json.ownerManaged = this.ownerManaged;
        }
        if (this.active !== null) {
            json.active = this.active;
        }
        if (this.vendorId !== null) {
            json.vendorId = this.vendorId;
        }
        if (this.vendorSecret !== null) {
            json.vendorSecret = this.vendorSecret;
        }
        return json;
    }
    isValid() {
        return this.owner !== null &&
            this.versionId !== null &&
            this.version !== null &&
            this.applicationKey !== null &&
            this.subscriptionRequired !== null &&
            this.ownerManaged !== null &&
            this.active !== null;
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