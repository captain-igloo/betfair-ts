"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class VendorDetails extends JsonResponse_1.default {
    constructor(appVersionId = null, vendorName = '', redirectUrl = '') {
        super();
        this.appVersionId = appVersionId;
        this.vendorName = vendorName;
        this.redirectUrl = redirectUrl;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('appVersionId' in json) {
                this.appVersionId = json.appVersionId;
            }
            if ('vendorName' in json) {
                this.vendorName = json.vendorName;
            }
            if ('redirectUrl' in json) {
                this.redirectUrl = json.redirectUrl;
            }
        }
    }
    toJson() {
        const json = {};
        if (this.appVersionId !== null) {
            json.appVersionId = this.appVersionId;
        }
        if (this.vendorName !== null) {
            json.vendorName = this.vendorName;
        }
        if (this.redirectUrl !== null) {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
    }
    isValid() {
        return this.appVersionId !== null &&
            this.vendorName !== null;
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