/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ISubscriptionOptionsOptions {
    subscription_length?: number;
    subscription_token?: string;
    client_reference?: string;
}

export default class SubscriptionOptions extends JsonMember {
    private subscriptionLength?: number;
    private subscriptionToken?: string;
    private clientReference?: string;

    constructor(options: ISubscriptionOptionsOptions) {
        super();
        this.subscriptionLength = options.subscription_length;
        this.subscriptionToken = options.subscription_token;
        this.clientReference = options.client_reference;
    }

    public toJson(): ISubscriptionOptionsOptions {
        const json: ISubscriptionOptionsOptions = {
        };
        if (typeof this.subscriptionLength !== 'undefined') {
            json.subscription_length = this.subscriptionLength;
        }
        if (typeof this.subscriptionToken !== 'undefined') {
            json.subscription_token = this.subscriptionToken;
        }
        if (typeof this.clientReference !== 'undefined') {
            json.client_reference = this.clientReference;
        }
        return json;
    }

    public getSubscriptionLength(): number | undefined {
        return this.subscriptionLength;
    }
    public setSubscriptionLength(subscriptionLength: number): void {
        this.subscriptionLength = subscriptionLength;
    }
    public getSubscriptionToken(): string | undefined {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
    }
    public getClientReference(): string | undefined {
        return this.clientReference;
    }
    public setClientReference(clientReference: string): void {
        this.clientReference = clientReference;
    }

}
