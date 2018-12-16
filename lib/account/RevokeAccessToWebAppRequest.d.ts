/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class RevokeAccessToWebAppRequest extends JsonRequest {
    private vendorId;
    constructor(vendorId?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVendorId(): number | null;
    setVendorId(vendorId: number | null): void;
}
