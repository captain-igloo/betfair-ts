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
    private vendorClientId: string;
    private status: AffiliateRelationStatus;

    constructor(options: IAffiliateRelationOptions) {
        super();
        this.vendorClientId = options.vendorClientId;
        this.status = this.fromJson(options.status, AffiliateRelationStatus);
    }

    public toJson(): IAffiliateRelationOptions {
        const json: IAffiliateRelationOptions = {
            vendorClientId: this.vendorClientId,
            status: this.status.getValue(),
        };
        return json;
    }

    public getVendorClientId(): string {
        return this.vendorClientId;
    }
    public setVendorClientId(vendorClientId: string): void {
        this.vendorClientId = vendorClientId;
    }
    public getStatus(): AffiliateRelationStatus {
        return this.status;
    }
    public setStatus(status: AffiliateRelationStatus): void {
        this.status = status;
    }

}
