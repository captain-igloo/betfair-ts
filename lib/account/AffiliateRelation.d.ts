/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import AffiliateRelationStatus from '../account/enum/AffiliateRelationStatus';
export interface IAffiliateRelationOptions {
    vendorClientId: string;
    status: AffiliateRelationStatus | string;
}
export default class AffiliateRelation extends JsonMember {
    private vendorClientId;
    private status;
    constructor(options: IAffiliateRelationOptions);
    toJson(): IAffiliateRelationOptions;
    getVendorClientId(): string;
    setVendorClientId(vendorClientId: string): void;
    getStatus(): AffiliateRelationStatus;
    setStatus(status: AffiliateRelationStatus): void;
}
