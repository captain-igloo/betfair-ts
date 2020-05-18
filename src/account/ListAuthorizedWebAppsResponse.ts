/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import VendorDetails, { IVendorDetailsOptions } from '../account/VendorDetails';

export interface IListAuthorizedWebAppsResponseOptions {
    vendorDetailses?: (VendorDetails | IVendorDetailsOptions)[];
}

export default class ListAuthorizedWebAppsResponse extends JsonResponse {
    private vendorDetailses?: VendorDetails[];

    constructor(options: (VendorDetails | IVendorDetailsOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.vendorDetailses = this.arrayFromJson(options, VendorDetails);
            }
        }
    }

    public toJson(): IListAuthorizedWebAppsResponseOptions {
        throw new Error('not implemented');
    }

    public getVendorDetailses(): VendorDetails[] | undefined {
        return this.vendorDetailses;
    }
    public setVendorDetailses(vendorDetailses: VendorDetails[]): void {
        this.vendorDetailses = vendorDetailses;
    }

}
