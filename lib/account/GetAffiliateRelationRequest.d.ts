/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class GetAffiliateRelationRequest extends JsonRequest {
    private vendorClientIds;
    constructor(vendorClientIds?: string[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVendorClientIds(): string[];
    setVendorClientIds(vendorClientIds: string[]): void;
}
