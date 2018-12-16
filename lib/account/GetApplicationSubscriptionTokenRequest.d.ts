/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class GetApplicationSubscriptionTokenRequest extends JsonRequest {
    private subscriptionLength;
    private clientReference;
    constructor(subscriptionLength?: number | null, clientReference?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionLength(): number | null;
    setSubscriptionLength(subscriptionLength: number | null): void;
    getClientReference(): string;
    setClientReference(clientReference: string): void;
}
