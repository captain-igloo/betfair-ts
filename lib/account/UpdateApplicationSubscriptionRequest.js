"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class UpdateApplicationSubscriptionRequest extends JsonRequest_1.default {
    constructor(vendorClientId = '', subscriptionLength = null) {
        super();
        this.vendorClientId = vendorClientId;
        this.subscriptionLength = subscriptionLength;
    }
    fromJson(json) {
        if ('vendorClientId' in json) {
            this.vendorClientId = json.vendorClientId;
        }
        if ('subscriptionLength' in json) {
            this.subscriptionLength = json.subscriptionLength;
        }
    }
    toJson() {
        const json = {};
        if (this.vendorClientId !== '') {
            json.vendorClientId = this.vendorClientId;
        }
        if (this.subscriptionLength !== null) {
            json.subscriptionLength = this.subscriptionLength;
        }
        return json;
    }
    isValid() {
        return this.vendorClientId !== '' &&
            this.subscriptionLength !== null;
    }
    getVendorClientId() {
        return this.vendorClientId;
    }
    setVendorClientId(vendorClientId) {
        this.vendorClientId = vendorClientId;
    }
    getSubscriptionLength() {
        return this.subscriptionLength;
    }
    setSubscriptionLength(subscriptionLength) {
        this.subscriptionLength = subscriptionLength;
    }
}
exports.default = UpdateApplicationSubscriptionRequest;
//# sourceMappingURL=UpdateApplicationSubscriptionRequest.js.map