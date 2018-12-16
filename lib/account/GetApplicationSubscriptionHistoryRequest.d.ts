/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class GetApplicationSubscriptionHistoryRequest extends JsonRequest {
    private vendorClientId;
    private applicationKey;
    constructor(vendorClientId?: string, applicationKey?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVendorClientId(): string;
    setVendorClientId(vendorClientId: string): void;
    getApplicationKey(): string;
    setApplicationKey(applicationKey: string): void;
}
