/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ISubscriptionOptionsOptions {
    subscription_length?: number;
    subscription_token?: string;
    client_reference?: string;
}
export default class SubscriptionOptions extends JsonMember {
    private subscriptionLength?;
    private subscriptionToken?;
    private clientReference?;
    constructor(options: ISubscriptionOptionsOptions);
    toJson(): ISubscriptionOptionsOptions;
    getSubscriptionLength(): number | undefined;
    setSubscriptionLength(subscriptionLength: number): void;
    getSubscriptionToken(): string | undefined;
    setSubscriptionToken(subscriptionToken: string): void;
    getClientReference(): string | undefined;
    setClientReference(clientReference: string): void;
}
