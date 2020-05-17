/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IActivateApplicationSubscriptionRequestOptions {
    subscriptionToken: string;
}

export default class ActivateApplicationSubscriptionRequest extends JsonRequest {
    private subscriptionToken: string;

    constructor(options: IActivateApplicationSubscriptionRequestOptions) {
        super();
        this.subscriptionToken = options.subscriptionToken;
    }

    public toJson(): IActivateApplicationSubscriptionRequestOptions {
        const json: IActivateApplicationSubscriptionRequestOptions = {
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
