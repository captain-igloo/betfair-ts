/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import SubscriptionStatus from '../account/enum/SubscriptionStatus';
import JsonRequest from '../JsonRequest';

export default class ListApplicationSubscriptionTokensRequest extends JsonRequest {
    private subscriptionStatus: SubscriptionStatus;

    constructor(
        subscriptionStatus: SubscriptionStatus = new SubscriptionStatus(),
    ) {
        super();
        this.subscriptionStatus = subscriptionStatus;
    }

    public fromJson(json: any): void {
        if ('subscriptionStatus' in json) {
            this.subscriptionStatus.setValue(json.subscriptionStatus);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionStatus.isValid()) {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getSubscriptionStatus(): SubscriptionStatus {
        return this.subscriptionStatus;
    }
    public setSubscriptionStatus(subscriptionStatus: SubscriptionStatus): void {
        this.subscriptionStatus = subscriptionStatus;
    }

}
