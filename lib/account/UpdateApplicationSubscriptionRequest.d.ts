/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class UpdateApplicationSubscriptionRequest extends JsonRequest {
    private vendorClientId;
    private subscriptionLength;
    constructor(vendorClientId?: string, subscriptionLength?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVendorClientId(): string;
    setVendorClientId(vendorClientId: string): void;
    getSubscriptionLength(): number | null;
    setSubscriptionLength(subscriptionLength: number | null): void;
}
