"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class VendorDetails extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.appVersionId = options.appVersionId;
            this.vendorName = options.vendorName;
            this.redirectUrl = options.redirectUrl;
        }
    }
    toJson() {
        const json = {};
        if (typeof this.appVersionId !== 'undefined') {
            json.appVersionId = this.appVersionId;
        }
        if (typeof this.vendorName !== 'undefined') {
            json.vendorName = this.vendorName;
        }
        if (typeof this.redirectUrl !== 'undefined') {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
    }
    getAppVersionId() {
        return this.appVersionId;
    }
    setAppVersionId(appVersionId) {
        this.appVersionId = appVersionId;
    }
    getVendorName() {
        return this.vendorName;
    }
    setVendorName(vendorName) {
        this.vendorName = vendorName;
    }
    getRedirectUrl() {
        return this.redirectUrl;
    }
    setRedirectUrl(redirectUrl) {
        this.redirectUrl = redirectUrl;
    }
}
exports.default = VendorDetails;
//# sourceMappingURL=VendorDetails.js.map