/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IGetAffiliateRelationRequestOptions {
    vendorClientIds: Array<string>;
}

export default class GetAffiliateRelationRequest extends JsonRequest {
    private vendorClientIds: string[];

    constructor(options: IGetAffiliateRelationRequestOptions) {
        super();
        this.vendorClientIds = options.vendorClientIds;
    }

    public toJson(): IGetAffiliateRelationRequestOptions {
        const json: IGetAffiliateRelationRequestOptions = {
            vendorClientIds: this.vendorClientIds,
        };
        return json;
    }

    public getVendorClientIds(): string[] {
        return this.vendorClientIds;
    }
    public setVendorClientIds(vendorClientIds: string[]): void {
        this.vendorClientIds = vendorClientIds;
    }

}
