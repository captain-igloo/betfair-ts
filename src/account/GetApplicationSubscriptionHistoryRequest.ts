/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class GetApplicationSubscriptionHistoryRequest extends JsonRequest {
    private vendorClientId: string;
    private applicationKey: string;

    constructor(
        vendorClientId: string = '',
        applicationKey: string = '',
    ) {
        super();
        this.vendorClientId = vendorClientId;
        this.applicationKey = applicationKey;
    }

    public fromJson(json: any): void {
        if ('vendorClientId' in json) {
            this.vendorClientId = json.vendorClientId;
        }
        if ('applicationKey' in json) {
            this.applicationKey = json.applicationKey;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.vendorClientId !== '') {
            json.vendorClientId = this.vendorClientId;
        }
        if (this.applicationKey !== '') {
            json.applicationKey = this.applicationKey;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getVendorClientId(): string {
        return this.vendorClientId;
    }
    public setVendorClientId(vendorClientId: string): void {
        this.vendorClientId = vendorClientId;
    }
    public getApplicationKey(): string {
        return this.applicationKey;
    }
    public setApplicationKey(applicationKey: string): void {
        this.applicationKey = applicationKey;
    }

}
