/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class SubscriptionOptions extends JsonMember {
    private subscription_length;
    private subscription_token;
    private client_reference;
    constructor(subscription_length?: number | null, subscription_token?: string, client_reference?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscription_length(): number | null;
    setSubscription_length(subscription_length: number | null): void;
    getSubscription_token(): string;
    setSubscription_token(subscription_token: string): void;
    getClient_reference(): string;
    setClient_reference(client_reference: string): void;
}
