"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class GetApplicationSubscriptionHistoryRequest extends JsonRequest_1.default {
    constructor(vendorClientId = '', applicationKey = '') {
        super();
        this.vendorClientId = vendorClientId;
        this.applicationKey = applicationKey;
    }
    fromJson(json) {
        if ('vendorClientId' in json) {
            this.vendorClientId = json.vendorClientId;
        }
        if ('applicationKey' in json) {
            this.applicationKey = json.applicationKey;
        }
    }
    toJson() {
        const json = {};
        if (this.vendorClientId !== '') {
            json.vendorClientId = this.vendorClientId;
        }
        if (this.applicationKey !== '') {
            json.applicationKey = this.applicationKey;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getVendorClientId() {
        return this.vendorClientId;
    }
    setVendorClientId(vendorClientId) {
        this.vendorClientId = vendorClientId;
    }
    getApplicationKey() {
        return this.applicationKey;
    }
    setApplicationKey(applicationKey) {
        this.applicationKey = applicationKey;
    }
}
exports.default = GetApplicationSubscriptionHistoryRequest;
//# sourceMappingURL=GetApplicationSubscriptionHistoryRequest.js.map