/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IRevokeAccessToWebAppRequestOptions {
    vendorId: number;
}
export default class RevokeAccessToWebAppRequest extends JsonRequest {
    private vendorId;
    constructor(options: IRevokeAccessToWebAppRequestOptions);
    toJson(): IRevokeAccessToWebAppRequestOptions;
    getVendorId(): number;
    setVendorId(vendorId: number): void;
}
