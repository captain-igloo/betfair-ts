/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import AccountSubscription from '../account/AccountSubscription';
import JsonResponse from '../JsonResponse';
export default class ListAccountSubscriptionTokensResponse extends JsonResponse {
    private accountSubscriptions;
    constructor(accountSubscriptions?: AccountSubscription[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAccountSubscriptions(): AccountSubscription[];
    setAccountSubscriptions(accountSubscriptions: AccountSubscription[]): void;
}
