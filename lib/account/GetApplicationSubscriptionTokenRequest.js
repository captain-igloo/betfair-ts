"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class GetApplicationSubscriptionTokenRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.subscriptionLength = options.subscriptionLength;
        this.clientReference = options.clientReference;
    }
    toJson() {
        const json = {};
        if (typeof this.subscriptionLength !== 'undefined') {
            json.subscriptionLength = this.subscriptionLength;
        }
        if (typeof this.clientReference !== 'undefined') {
            json.clientReference = this.clientReference;
        }
        return json;
    }
    getSubscriptionLength() {
        return this.subscriptionLength;
    }
    setSubscriptionLength(subscriptionLength) {
        this.subscriptionLength = subscriptionLength;
    }
    getClientReference() {
        return this.clientReference;
    }
    setClientReference(clientReference) {
        this.clientReference = clientReference;
    }
}
exports.default = GetApplicationSubscriptionTokenRequest;
//# sourceMappingURL=GetApplicationSubscriptionTokenRequest.js.map