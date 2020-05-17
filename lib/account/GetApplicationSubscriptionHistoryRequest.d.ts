/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IGetApplicationSubscriptionHistoryRequestOptions {
    vendorClientId?: string;
    applicationKey?: string;
}
export default class GetApplicationSubscriptionHistoryRequest extends JsonRequest {
    private vendorClientId?;
    private applicationKey?;
    constructor(options: IGetApplicationSubscriptionHistoryRequestOptions);
    toJson(): IGetApplicationSubscriptionHistoryRequestOptions;
    getVendorClientId(): string | undefined;
    setVendorClientId(vendorClientId: string): void;
    getApplicationKey(): string | undefined;
    setApplicationKey(applicationKey: string): void;
}
