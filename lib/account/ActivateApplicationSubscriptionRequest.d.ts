/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IActivateApplicationSubscriptionRequestOptions {
    subscriptionToken: string;
}
export default class ActivateApplicationSubscriptionRequest extends JsonRequest {
    private subscriptionToken;
    constructor(options: IActivateApplicationSubscriptionRequestOptions);
    toJson(): IActivateApplicationSubscriptionRequestOptions;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
}
