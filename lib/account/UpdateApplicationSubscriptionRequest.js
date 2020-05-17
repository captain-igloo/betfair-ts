"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class UpdateApplicationSubscriptionRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.vendorClientId = options.vendorClientId;
        this.subscriptionLength = options.subscriptionLength;
    }
    toJson() {
        const json = {
            vendorClientId: this.vendorClientId,
            subscriptionLength: this.subscriptionLength,
        };
        return json;
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