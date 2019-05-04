/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class IsAccountSubscribedToWebAppRequest extends JsonRequest {
    private vendorId;
    constructor(vendorId?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVendorId(): string;
    setVendorId(vendorId: string): void;
}
