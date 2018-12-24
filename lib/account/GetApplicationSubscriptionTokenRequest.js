"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class GetApplicationSubscriptionTokenRequest extends JsonRequest_1.default {
    constructor(subscriptionLength = null, clientReference = '') {
        super();
        this.subscriptionLength = subscriptionLength;
        this.clientReference = clientReference;
    }
    fromJson(json) {
        if ('subscriptionLength' in json) {
            this.subscriptionLength = json.subscriptionLength;
        }
        if ('clientReference' in json) {
            this.clientReference = json.clientReference;
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionLength !== null) {
            json.subscriptionLength = this.subscriptionLength;
        }
        if (this.clientReference !== null) {
            json.clientReference = this.clientReference;
        }
        return json;
    }
    isValid() {
        return true;
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