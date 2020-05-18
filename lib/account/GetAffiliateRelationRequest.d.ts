/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IGetAffiliateRelationRequestOptions {
    vendorClientIds: string[];
}
export default class GetAffiliateRelationRequest extends JsonRequest {
    private vendorClientIds;
    constructor(options: IGetAffiliateRelationRequestOptions);
    toJson(): IGetAffiliateRelationRequestOptions;
    getVendorClientIds(): string[];
    setVendorClientIds(vendorClientIds: string[]): void;
}
