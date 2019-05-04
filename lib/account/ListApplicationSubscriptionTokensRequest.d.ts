/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import SubscriptionStatus from '../account/enum/SubscriptionStatus';
export default class ListApplicationSubscriptionTokensRequest extends JsonRequest {
    private subscriptionStatus;
    constructor(subscriptionStatus?: SubscriptionStatus);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionStatus(): SubscriptionStatus;
    setSubscriptionStatus(subscriptionStatus: SubscriptionStatus): void;
}
