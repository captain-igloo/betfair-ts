"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const VendorDetails_1 = require("../account/VendorDetails");
class ListAuthorizedWebAppsResponse extends JsonResponse_1.default {
    constructor(vendorDetailses = []) {
        super();
        this.vendorDetailses = vendorDetailses;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.vendorDetailses = json.map((vendorDetailsesJson) => {
                const element = new VendorDetails_1.default();
                element.fromJson(vendorDetailsesJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.vendorDetailses.length > 0) {
            json.vendorDetailses = this.vendorDetailses.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.vendorDetailses.length > 0;
    }
    getVendorDetailses() {
        return this.vendorDetailses;
    }
    setVendorDetailses(vendorDetailses) {
        this.vendorDetailses = vendorDetailses;
    }
}
exports.default = ListAuthorizedWebAppsResponse;
