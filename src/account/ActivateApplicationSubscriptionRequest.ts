/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class ActivateApplicationSubscriptionRequest extends JsonRequest {
    private subscriptionToken: string;

    constructor(
        subscriptionToken: string = '',
    ) {
        super();
        this.subscriptionToken = subscriptionToken;
    }

    public fromJson(json: any): void {
        if ('subscriptionToken' in json) {
            this.subscriptionToken = json.subscriptionToken;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionToken !== '') {
            json.subscriptionToken = this.subscriptionToken;
        }
        return json;
    }

    public isValid(): boolean {
        return this.subscriptionToken !== '';
    }

    public getSubscriptionToken(): string {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
    }

}
