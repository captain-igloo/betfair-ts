/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import AffiliateRelation, { IAffiliateRelationOptions } from '../account/AffiliateRelation';

export interface IGetAffiliateRelationResponseOptions {
    affiliateRelations?: Array<AffiliateRelation | IAffiliateRelationOptions>;
}

export default class GetAffiliateRelationResponse extends JsonResponse {
    private affiliateRelations?: AffiliateRelation[];

    constructor(options: Array<AffiliateRelation | IAffiliateRelationOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.affiliateRelations = this.arrayFromJson(options, AffiliateRelation);
            }
        }
    }

    public toJson(): IGetAffiliateRelationResponseOptions {
        throw new Error('not implemented');
    }

    public getAffiliateRelations(): AffiliateRelation[] | undefined {
        return this.affiliateRelations;
    }
    public setAffiliateRelations(affiliateRelations: AffiliateRelation[]): void {
        this.affiliateRelations = affiliateRelations;
    }

}
