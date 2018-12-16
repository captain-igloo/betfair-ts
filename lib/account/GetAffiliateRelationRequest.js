"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class GetAffiliateRelationRequest extends JsonRequest_1.default {
    constructor(vendorClientIds = []) {
        super();
        this.vendorClientIds = vendorClientIds;
    }
    fromJson(json) {
        if ('vendorClientIds' in json) {
            this.vendorClientIds = json.vendorClientIds;
        }
    }
    toJson() {
        const json = {};
        if (this.vendorClientIds.length > 0) {
            json.vendorClientIds = this.vendorClientIds;
        }
        return json;
    }
    isValid() {
        return this.vendorClientIds.length > 0;
    }
    getVendorClientIds() {
        return this.vendorClientIds;
    }
    setVendorClientIds(vendorClientIds) {
        this.vendorClientIds = vendorClientIds;
    }
}
exports.default = GetAffiliateRelationRequest;
