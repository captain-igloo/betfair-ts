/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class UpdateApplicationSubscriptionRequest extends JsonRequest {
    private vendorClientId: string;
    private subscriptionLength: number | null;

    constructor(
        vendorClientId: string = '',
        subscriptionLength: number | null = null,
    ) {
        super();
        this.vendorClientId = vendorClientId;
        this.subscriptionLength = subscriptionLength;
    }

    public fromJson(json: any): void {
        if ('vendorClientId' in json) {
            this.vendorClientId = json.vendorClientId;
        }
        if ('subscriptionLength' in json) {
            this.subscriptionLength = json.subscriptionLength;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.vendorClientId !== '') {
            json.vendorClientId = this.vendorClientId;
        }
        if (this.subscriptionLength !== null) {
            json.subscriptionLength = this.subscriptionLength;
        }
        return json;
    }

    public isValid(): boolean {
        return this.vendorClientId !== '' &&
            this.subscriptionLength !== null;
    }

    public getVendorClientId(): string {
        return this.vendorClientId;
    }
    public setVendorClientId(vendorClientId: string): void {
        this.vendorClientId = vendorClientId;
    }
    public getSubscriptionLength(): number | null {
        return this.subscriptionLength;
    }
    public setSubscriptionLength(subscriptionLength: number | null): void {
        this.subscriptionLength = subscriptionLength;
    }

}
