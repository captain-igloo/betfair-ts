/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class GetAffiliateRelationRequest extends JsonRequest {
    private vendorClientIds: string[];

    constructor(
        vendorClientIds: string[] = [],
    ) {
        super();
        this.vendorClientIds = vendorClientIds;
    }

    public fromJson(json: any): void {
        if ('vendorClientIds' in json) {
            this.vendorClientIds = json.vendorClientIds;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.vendorClientIds.length > 0) {
            json.vendorClientIds = this.vendorClientIds;
        }
        return json;
    }

    public isValid(): boolean {
        return this.vendorClientIds.length > 0;
    }

    public getVendorClientIds(): string[] {
        return this.vendorClientIds;
    }
    public setVendorClientIds(vendorClientIds: string[]): void {
        this.vendorClientIds = vendorClientIds;
    }

}
