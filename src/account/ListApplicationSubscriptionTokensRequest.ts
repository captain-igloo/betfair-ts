/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import SubscriptionStatus from '../account/enum/SubscriptionStatus';

export interface IListApplicationSubscriptionTokensRequestOptions {
    subscriptionStatus?: SubscriptionStatus | string;
}

export default class ListApplicationSubscriptionTokensRequest extends JsonRequest {
    private subscriptionStatus?: SubscriptionStatus;

    constructor(options: IListApplicationSubscriptionTokensRequestOptions) {
        super();
        if (options.subscriptionStatus) {
            this.subscriptionStatus = this.fromJson(options.subscriptionStatus, SubscriptionStatus);
        }
    }

    public toJson(): IListApplicationSubscriptionTokensRequestOptions {
        const json: IListApplicationSubscriptionTokensRequestOptions = {
        };
        if (this.subscriptionStatus) {
            json.subscriptionStatus = this.subscriptionStatus.getValue();
        }
        return json;
    }

    public getSubscriptionStatus(): SubscriptionStatus | undefined {
        return this.subscriptionStatus;
    }
    public setSubscriptionStatus(subscriptionStatus: SubscriptionStatus): void {
        this.subscriptionStatus = subscriptionStatus;
    }

}
