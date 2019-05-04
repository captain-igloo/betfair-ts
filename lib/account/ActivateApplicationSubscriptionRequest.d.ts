/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class ActivateApplicationSubscriptionRequest extends JsonRequest {
    private subscriptionToken;
    constructor(subscriptionToken?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
}
