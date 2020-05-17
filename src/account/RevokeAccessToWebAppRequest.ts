/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IRevokeAccessToWebAppRequestOptions {
    vendorId: number;
}

export default class RevokeAccessToWebAppRequest extends JsonRequest {
    private vendorId: number;

    constructor(options: IRevokeAccessToWebAppRequestOptions) {
        super();
        this.vendorId = options.vendorId;
    }

    public toJson(): IRevokeAccessToWebAppRequestOptions {
        const json: IRevokeAccessToWebAppRequestOptions = {
            vendorId: this.vendorId,
        };
        return json;
    }

    public getVendorId(): number {
        return this.vendorId;
    }
    public setVendorId(vendorId: number): void {
        this.vendorId = vendorId;
    }

}
