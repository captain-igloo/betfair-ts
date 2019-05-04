/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class SubscriptionOptions extends JsonMember {
    private subscriptionLength;
    private subscriptionToken;
    private clientReference;
    constructor(subscriptionLength?: number | null, subscriptionToken?: string, clientReference?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionLength(): number | null;
    setSubscriptionLength(subscriptionLength: number | null): void;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
    getClientReference(): string;
    setClientReference(clientReference: string): void;
}
