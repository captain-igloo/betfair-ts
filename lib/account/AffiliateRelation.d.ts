/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import AffiliateRelationStatus from '../account/enum/AffiliateRelationStatus';
export default class AffiliateRelation extends JsonMember {
    private vendorClientId;
    private status;
    constructor(vendorClientId?: string, status?: AffiliateRelationStatus);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVendorClientId(): string;
    setVendorClientId(vendorClientId: string): void;
    getStatus(): AffiliateRelationStatus;
    setStatus(status: AffiliateRelationStatus): void;
}
