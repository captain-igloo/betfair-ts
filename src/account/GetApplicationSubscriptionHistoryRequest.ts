/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IGetApplicationSubscriptionHistoryRequestOptions {
    vendorClientId?: string;
    applicationKey?: string;
}

export default class GetApplicationSubscriptionHistoryRequest extends JsonRequest {
    private vendorClientId?: string;
    private applicationKey?: string;

    constructor(options: IGetApplicationSubscriptionHistoryRequestOptions) {
        super();
        this.vendorClientId = options.vendorClientId;
        this.applicationKey = options.applicationKey;
    }

    public toJson(): IGetApplicationSubscriptionHistoryRequestOptions {
        const json: IGetApplicationSubscriptionHistoryRequestOptions = {
        };
        if (typeof this.vendorClientId !== 'undefined') {
            json.vendorClientId = this.vendorClientId;
        }
        if (typeof this.applicationKey !== 'undefined') {
            json.applicationKey = this.applicationKey;
        }
        return json;
    }

    public getVendorClientId(): string | undefined {
        return this.vendorClientId;
    }
    public setVendorClientId(vendorClientId: string): void {
        this.vendorClientId = vendorClientId;
    }
    public getApplicationKey(): string | undefined {
        return this.applicationKey;
    }
    public setApplicationKey(applicationKey: string): void {
        this.applicationKey = applicationKey;
    }

}
