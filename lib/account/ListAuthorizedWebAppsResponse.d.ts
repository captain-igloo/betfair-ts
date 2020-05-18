/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import VendorDetails, { IVendorDetailsOptions } from '../account/VendorDetails';
export interface IListAuthorizedWebAppsResponseOptions {
    vendorDetailses?: (VendorDetails | IVendorDetailsOptions)[];
}
export default class ListAuthorizedWebAppsResponse extends JsonResponse {
    private vendorDetailses?;
    constructor(options: (VendorDetails | IVendorDetailsOptions)[]);
    toJson(): IListAuthorizedWebAppsResponseOptions;
    getVendorDetailses(): VendorDetails[] | undefined;
    setVendorDetailses(vendorDetailses: VendorDetails[]): void;
}
