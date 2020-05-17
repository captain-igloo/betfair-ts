"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const AffiliateRelation_1 = require("../account/AffiliateRelation");
class GetAffiliateRelationResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.affiliateRelations = this.arrayFromJson(options, AffiliateRelation_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getAffiliateRelations() {
        return this.affiliateRelations;
    }
    setAffiliateRelations(affiliateRelations) {
        this.affiliateRelations = affiliateRelations;
    }
}
exports.default = GetAffiliateRelationResponse;
//# sourceMappingURL=GetAffiliateRelationResponse.js.map