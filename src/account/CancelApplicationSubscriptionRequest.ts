/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface ICancelApplicationSubscriptionRequestOptions {
    subscriptionToken: string;
}

export default class CancelApplicationSubscriptionRequest extends JsonRequest {
    private subscriptionToken: string;

    constructor(options: ICancelApplicationSubscriptionRequestOptions) {
        super();
        this.subscriptionToken = options.subscriptionToken;
    }

    public toJson(): ICancelApplicationSubscriptionRequestOptions {
        const json: ICancelApplicationSubscriptionRequestOptions = {
            subscriptionToken: this.subscriptionToken,
        };
        return json;
    }

    public getSubscriptionToken(): string {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
    }

}
