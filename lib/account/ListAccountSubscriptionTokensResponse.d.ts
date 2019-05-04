/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import AccountSubscription from '../account/AccountSubscription';
export default class ListAccountSubscriptionTokensResponse extends JsonResponse {
    private accountSubscriptions;
    constructor(accountSubscriptions?: AccountSubscription[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAccountSubscriptions(): AccountSubscription[];
    setAccountSubscriptions(accountSubscriptions: AccountSubscription[]): void;
}
