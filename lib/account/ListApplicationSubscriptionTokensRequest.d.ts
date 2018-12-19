/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import SubscriptionStatus from '../account/enum/SubscriptionStatus';
import JsonRequest from '../JsonRequest';
export default class ListApplicationSubscriptionTokensRequest extends JsonRequest {
    private subscriptionStatus;
    constructor(subscriptionStatus?: SubscriptionStatus);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionStatus(): SubscriptionStatus;
    setSubscriptionStatus(subscriptionStatus: SubscriptionStatus): void;
}
