"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const AffiliateRelation_1 = require("../account/AffiliateRelation");
class GetAffiliateRelationResponse extends JsonResponse_1.default {
    constructor(affiliateRelations = []) {
        super();
        this.affiliateRelations = affiliateRelations;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.affiliateRelations = json.map((affiliateRelationsJson) => {
                const element = new AffiliateRelation_1.default();
                element.fromJson(affiliateRelationsJson);
                return element;
            });
        }
    }
    toJson() {
        let json = {};
        if (this.affiliateRelations.length > 0) {
            json.affiliateRelations = this.affiliateRelations.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.affiliateRelations.length > 0;
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