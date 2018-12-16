/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

export default class GetApplicationSubscriptionTokenRequest extends JsonRequest {
    private subscriptionLength: number | null;
    private clientReference: string;

    constructor(
        subscriptionLength: number | null = null,
        clientReference: string = '',
    ) {
        super();
        this.subscriptionLength = subscriptionLength;
        this.clientReference = clientReference;
    }

    public fromJson(json: any): void {
        if ('subscriptionLength' in json) {
            this.subscriptionLength = json.subscriptionLength;
        }
        if ('clientReference' in json) {
            this.clientReference = json.clientReference;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionLength !== null) {
            json.subscriptionLength = this.subscriptionLength;
        }
        if (this.clientReference !== null) {
            json.clientReference = this.clientReference;
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
    public getClientReference(): string {
        return this.clientReference;
    }
    public setClientReference(clientReference: string): void {
        this.clientReference = clientReference;
    }

}
