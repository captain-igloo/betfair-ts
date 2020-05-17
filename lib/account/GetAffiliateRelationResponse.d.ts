/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import AffiliateRelation, { IAffiliateRelationOptions } from '../account/AffiliateRelation';
export interface IGetAffiliateRelationResponseOptions {
    affiliateRelations?: Array<AffiliateRelation | IAffiliateRelationOptions>;
}
export default class GetAffiliateRelationResponse extends JsonResponse {
    private affiliateRelations?;
    constructor(options: Array<AffiliateRelation | IAffiliateRelationOptions>);
    toJson(): IGetAffiliateRelationResponseOptions;
    getAffiliateRelations(): AffiliateRelation[] | undefined;
    setAffiliateRelations(affiliateRelations: AffiliateRelation[]): void;
}
