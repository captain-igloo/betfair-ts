/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import AccountSubscription, { IAccountSubscriptionOptions } from '../account/AccountSubscription';

export interface IListAccountSubscriptionTokensResponseOptions {
    accountSubscriptions?: (AccountSubscription | IAccountSubscriptionOptions)[];
}

export default class ListAccountSubscriptionTokensResponse extends JsonResponse {
    private accountSubscriptions?: AccountSubscription[];

    constructor(options: (AccountSubscription | IAccountSubscriptionOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.accountSubscriptions = this.arrayFromJson(options, AccountSubscription);
            }
        }
    }

    public toJson(): IListAccountSubscriptionTokensResponseOptions {
        throw new Error('not implemented');
    }

    public getAccountSubscriptions(): AccountSubscription[] | undefined {
        return this.accountSubscriptions;
    }
    public setAccountSubscriptions(accountSubscriptions: AccountSubscription[]): void {
        this.accountSubscriptions = accountSubscriptions;
    }

}
