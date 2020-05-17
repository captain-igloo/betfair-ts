/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IGetVendorDetailsRequestOptions {
    vendorId: string;
}
export default class GetVendorDetailsRequest extends JsonRequest {
    private vendorId;
    constructor(options: IGetVendorDetailsRequestOptions);
    toJson(): IGetVendorDetailsRequestOptions;
    getVendorId(): string;
    setVendorId(vendorId: string): void;
}
