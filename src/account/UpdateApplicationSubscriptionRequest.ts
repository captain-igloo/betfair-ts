/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IUpdateApplicationSubscriptionRequestOptions {
    vendorClientId: string;
    subscriptionLength: number;
}

export default class UpdateApplicationSubscriptionRequest extends JsonRequest {
    private vendorClientId: string;
    private subscriptionLength: number;

    constructor(options: IUpdateApplicationSubscriptionRequestOptions) {
        super();
        this.vendorClientId = options.vendorClientId;
        this.subscriptionLength = options.subscriptionLength;
    }

    public toJson(): IUpdateApplicationSubscriptionRequestOptions {
        const json: IUpdateApplicationSubscriptionRequestOptions = {
            vendorClientId: this.vendorClientId,
            subscriptionLength: this.subscriptionLength,
        };
        return json;
    }

    public getVendorClientId(): string {
        return this.vendorClientId;
    }
    public setVendorClientId(vendorClientId: string): void {
        this.vendorClientId = vendorClientId;
    }
    public getSubscriptionLength(): number {
        return this.subscriptionLength;
    }
    public setSubscriptionLength(subscriptionLength: number): void {
        this.subscriptionLength = subscriptionLength;
    }

}
