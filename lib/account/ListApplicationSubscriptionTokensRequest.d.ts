/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import SubscriptionStatus from '../account/enum/SubscriptionStatus';
export interface IListApplicationSubscriptionTokensRequestOptions {
    subscriptionStatus?: SubscriptionStatus | string;
}
export default class ListApplicationSubscriptionTokensRequest extends JsonRequest {
    private subscriptionStatus?;
    constructor(options: IListApplicationSubscriptionTokensRequestOptions);
    toJson(): IListApplicationSubscriptionTokensRequestOptions;
    getSubscriptionStatus(): SubscriptionStatus | undefined;
    setSubscriptionStatus(subscriptionStatus: SubscriptionStatus): void;
}
