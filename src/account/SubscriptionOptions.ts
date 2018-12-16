/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class SubscriptionOptions extends JsonMember {
    private subscription_length: number | null;
    private subscription_token: string;
    private client_reference: string;

    constructor(
        subscription_length: number | null = null,
        subscription_token: string = '',
        client_reference: string = '',
    ) {
        super();
        this.subscription_length = subscription_length;
        this.subscription_token = subscription_token;
        this.client_reference = client_reference;
    }

    public fromJson(json: any): void {
        if ('subscription_length' in json) {
            this.subscription_length = json.subscription_length;
        }
        if ('subscription_token' in json) {
            this.subscription_token = json.subscription_token;
        }
        if ('client_reference' in json) {
            this.client_reference = json.client_reference;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscription_length !== null) {
            json.subscription_length = this.subscription_length;
        }
        if (this.subscription_token !== null) {
            json.subscription_token = this.subscription_token;
        }
        if (this.client_reference !== null) {
            json.client_reference = this.client_reference;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getSubscription_length(): number | null {
        return this.subscription_length;
    }
    public setSubscription_length(subscription_length: number | null): void {
        this.subscription_length = subscription_length;
    }
    public getSubscription_token(): string {
        return this.subscription_token;
    }
    public setSubscription_token(subscription_token: string): void {
        this.subscription_token = subscription_token;
    }
    public getClient_reference(): string {
        return this.client_reference;
    }
    public setClient_reference(client_reference: string): void {
        this.client_reference = client_reference;
    }

}
