/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IGetVendorDetailsRequestOptions {
    vendorId: string;
}

export default class GetVendorDetailsRequest extends JsonRequest {
    private vendorId: string;

    constructor(options: IGetVendorDetailsRequestOptions) {
        super();
        this.vendorId = options.vendorId;
    }

    public toJson(): IGetVendorDetailsRequestOptions {
        const json: IGetVendorDetailsRequestOptions = {
            vendorId: this.vendorId,
        };
        return json;
    }

    public getVendorId(): string {
        return this.vendorId;
    }
    public setVendorId(vendorId: string): void {
        this.vendorId = vendorId;
    }

}
