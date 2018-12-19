/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import VendorDetails from '../account/VendorDetails';
import JsonResponse from '../JsonResponse';
export default class ListAuthorizedWebAppsResponse extends JsonResponse {
    private vendorDetailses;
    constructor(vendorDetailses?: VendorDetails[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVendorDetailses(): VendorDetails[];
    setVendorDetailses(vendorDetailses: VendorDetails[]): void;
}
