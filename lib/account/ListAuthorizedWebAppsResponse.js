"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const VendorDetails_1 = require("../account/VendorDetails");
class ListAuthorizedWebAppsResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.vendorDetailses = this.arrayFromJson(options, VendorDetails_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getVendorDetailses() {
        return this.vendorDetailses;
    }
    setVendorDetailses(vendorDetailses) {
        this.vendorDetailses = vendorDetailses;
    }
}
exports.default = ListAuthorizedWebAppsResponse;
//# sourceMappingURL=ListAuthorizedWebAppsResponse.js.map