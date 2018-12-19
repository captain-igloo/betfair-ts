/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import AccountSubscription from '../account/AccountSubscription';
import JsonResponse from '../JsonResponse';

export default class ListAccountSubscriptionTokensResponse extends JsonResponse {
    private accountSubscriptions: AccountSubscription[];

    constructor(
        accountSubscriptions: AccountSubscription[] = [],
    ) {
        super();
        this.accountSubscriptions = accountSubscriptions;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.accountSubscriptions = json.map((accountSubscriptionsJson: any) => {
                const element = new AccountSubscription();
                element.fromJson(accountSubscriptionsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.accountSubscriptions.length > 0) {
            json.accountSubscriptions = this.accountSubscriptions.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.accountSubscriptions.length > 0;
    }

    public getAccountSubscriptions(): AccountSubscription[] {
        return this.accountSubscriptions;
    }
    public setAccountSubscriptions(accountSubscriptions: AccountSubscription[]): void {
        this.accountSubscriptions = accountSubscriptions;
    }

}
