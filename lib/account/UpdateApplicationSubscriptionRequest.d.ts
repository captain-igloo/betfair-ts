/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IUpdateApplicationSubscriptionRequestOptions {
    vendorClientId: string;
    subscriptionLength: number;
}
export default class UpdateApplicationSubscriptionRequest extends JsonRequest {
    private vendorClientId;
    private subscriptionLength;
    constructor(options: IUpdateApplicationSubscriptionRequestOptions);
    toJson(): IUpdateApplicationSubscriptionRequestOptions;
    getVendorClientId(): string;
    setVendorClientId(vendorClientId: string): void;
    getSubscriptionLength(): number;
    setSubscriptionLength(subscriptionLength: number): void;
}
