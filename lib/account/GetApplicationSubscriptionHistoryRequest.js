"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class GetApplicationSubscriptionHistoryRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.vendorClientId = options.vendorClientId;
        this.applicationKey = options.applicationKey;
    }
    toJson() {
        const json = {};
        if (typeof this.vendorClientId !== 'undefined') {
            json.vendorClientId = this.vendorClientId;
        }
        if (typeof this.applicationKey !== 'undefined') {
            json.applicationKey = this.applicationKey;
        }
        return json;
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