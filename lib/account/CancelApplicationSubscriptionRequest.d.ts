/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface ICancelApplicationSubscriptionRequestOptions {
    subscriptionToken: string;
}
export default class CancelApplicationSubscriptionRequest extends JsonRequest {
    private subscriptionToken;
    constructor(options: ICancelApplicationSubscriptionRequestOptions);
    toJson(): ICancelApplicationSubscriptionRequestOptions;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
}
