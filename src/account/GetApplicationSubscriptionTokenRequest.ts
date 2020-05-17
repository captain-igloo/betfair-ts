/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IGetApplicationSubscriptionTokenRequestOptions {
    subscriptionLength?: number;
    clientReference?: string;
}

export default class GetApplicationSubscriptionTokenRequest extends JsonRequest {
    private subscriptionLength?: number;
    private clientReference?: string;

    constructor(options: IGetApplicationSubscriptionTokenRequestOptions) {
        super();
        this.subscriptionLength = options.subscriptionLength;
        this.clientReference = options.clientReference;
    }

    public toJson(): IGetApplicationSubscriptionTokenRequestOptions {
        const json: IGetApplicationSubscriptionTokenRequestOptions = {
        };
        if (typeof this.subscriptionLength !== 'undefined') {
            json.subscriptionLength = this.subscriptionLength;
        }
        if (typeof this.clientReference !== 'undefined') {
            json.clientReference = this.clientReference;
        }
        return json;
    }

    public getSubscriptionLength(): number | undefined {
        return this.subscriptionLength;
    }
    public setSubscriptionLength(subscriptionLength: number): void {
        this.subscriptionLength = subscriptionLength;
    }
    public getClientReference(): string | undefined {
        return this.clientReference;
    }
    public setClientReference(clientReference: string): void {
        this.clientReference = clientReference;
    }

}
