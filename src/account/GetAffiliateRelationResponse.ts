/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import AffiliateRelation from '../account/AffiliateRelation';
import JsonResponse from '../JsonResponse';

export default class GetAffiliateRelationResponse extends JsonResponse {
    private affiliateRelations: AffiliateRelation[];

    constructor(
        affiliateRelations: AffiliateRelation[] = [],
    ) {
        super();
        this.affiliateRelations = affiliateRelations;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.affiliateRelations = json.map((affiliateRelationsJson: any) => {
                const element = new AffiliateRelation();
                element.fromJson(affiliateRelationsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.affiliateRelations.length > 0) {
            json.affiliateRelations = this.affiliateRelations.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.affiliateRelations.length > 0;
    }

    public getAffiliateRelations(): AffiliateRelation[] {
        return this.affiliateRelations;
    }
    public setAffiliateRelations(affiliateRelations: AffiliateRelation[]): void {
        this.affiliateRelations = affiliateRelations;
    }

}
