"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const AffiliateRelationStatus_1 = require("../account/enum/AffiliateRelationStatus");
class AffiliateRelation extends JsonMember_1.default {
    constructor(options) {
        super();
        this.vendorClientId = options.vendorClientId;
        this.status = this.fromJson(options.status, AffiliateRelationStatus_1.default);
    }
    toJson() {
        const json = {
            vendorClientId: this.vendorClientId,
            status: this.status.getValue(),
        };
        return json;
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
//# sourceMappingURL=AffiliateRelation.js.map