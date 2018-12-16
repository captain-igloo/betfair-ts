"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const AffiliateRelationStatus_1 = require("../account/enum/AffiliateRelationStatus");
class AffiliateRelation extends JsonMember_1.default {
    constructor(vendorClientId = '', status = new AffiliateRelationStatus_1.default()) {
        super();
        this.vendorClientId = vendorClientId;
        this.status = status;
    }
    fromJson(json) {
        if ('vendorClientId' in json) {
            this.vendorClientId = json.vendorClientId;
        }
        if ('status' in json) {
            this.status.setValue(json.status);
        }
    }
    toJson() {
        const json = {};
        if (this.vendorClientId !== null) {
            json.vendorClientId = this.vendorClientId;
        }
        if (this.status.isValid()) {
            json.status = this.status;
        }
        return json;
    }
    isValid() {
        return this.vendorClientId !== null &&
            this.status.isValid();
    }
    getVendorClientId() {
        return this.vendorClientId;
    }
    setVendorClientId(vendorClientId) {
        this.vendorClientId = vendorClientId;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}
exports.default = AffiliateRelation;
