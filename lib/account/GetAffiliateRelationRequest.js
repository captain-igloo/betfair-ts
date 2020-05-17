"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class GetAffiliateRelationRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.vendorClientIds = options.vendorClientIds;
    }
    toJson() {
        const json = {
            vendorClientIds: this.vendorClientIds,
        };
        return json;
    }
    getVendorClientIds() {
        return this.vendorClientIds;
    }
    setVendorClientIds(vendorClientIds) {
        this.vendorClientIds = vendorClientIds;
    }
}
exports.default = GetAffiliateRelationRequest;
//# sourceMappingURL=GetAffiliateRelationRequest.js.map