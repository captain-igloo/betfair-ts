/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import AccountSubscription, { IAccountSubscriptionOptions } from '../account/AccountSubscription';
export interface IListAccountSubscriptionTokensResponseOptions {
    accountSubscriptions?: Array<AccountSubscription | IAccountSubscriptionOptions>;
}
export default class ListAccountSubscriptionTokensResponse extends JsonResponse {
    private accountSubscriptions?;
    constructor(options: Array<AccountSubscription | IAccountSubscriptionOptions>);
    toJson(): IListAccountSubscriptionTokensResponseOptions;
    getAccountSubscriptions(): AccountSubscription[] | undefined;
    setAccountSubscriptions(accountSubscriptions: AccountSubscription[]): void;
}
