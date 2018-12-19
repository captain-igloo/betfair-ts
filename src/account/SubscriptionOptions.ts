/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class SubscriptionOptions extends JsonMember {
    private subscriptionLength: number | null;
    private subscriptionToken: string;
    private clientReference: string;

    constructor(
        subscriptionLength: number | null = null,
        subscriptionToken: string = '',
        clientReference: string = '',
    ) {
        super();
        this.subscriptionLength = subscriptionLength;
        this.subscriptionToken = subscriptionToken;
        this.clientReference = clientReference;
    }

    public fromJson(json: any): void {
        if ('subscription_length' in json) {
            this.subscriptionLength = json.subscription_length;
        }
        if ('subscription_token' in json) {
            this.subscriptionToken = json.subscription_token;
        }
        if ('client_reference' in json) {
            this.clientReference = json.client_reference;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionLength !== null) {
            json.subscription_length = this.subscriptionLength;
        }
        if (this.subscriptionToken !== null) {
            json.subscription_token = this.subscriptionToken;
        }
        if (this.clientReference !== null) {
            json.client_reference = this.clientReference;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getSubscriptionLength(): number | null {
        return this.subscriptionLength;
    }
    public setSubscriptionLength(subscriptionLength: number | null): void {
        this.subscriptionLength = subscriptionLength;
    }
    public getSubscriptionToken(): string {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
    }
    public getClientReference(): string {
        return this.clientReference;
    }
    public setClientReference(clientReference: string): void {
        this.clientReference = clientReference;
    }

}
