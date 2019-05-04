"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class GetVendorDetailsRequest extends JsonRequest_1.default {
    constructor(vendorId = '') {
        super();
        this.vendorId = vendorId;
    }
    fromJson(json) {
        if ('vendorId' in json) {
            this.vendorId = json.vendorId;
        }
    }
    toJson() {
        const json = {};
        if (this.vendorId !== '') {
            json.vendorId = this.vendorId;
        }
        return json;
    }
    isValid() {
        return this.vendorId !== '';
    }
    getVendorId() {
        return this.vendorId;
    }
    setVendorId(vendorId) {
        this.vendorId = vendorId;
    }
}
exports.default = GetVendorDetailsRequest;
//# sourceMappingURL=GetVendorDetailsRequest.js.map