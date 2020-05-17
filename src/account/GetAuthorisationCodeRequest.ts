/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IGetAuthorisationCodeRequestOptions {
    vendorId: string;
}

export default class GetAuthorisationCodeRequest extends JsonRequest {
    private vendorId: string;

    constructor(options: IGetAuthorisationCodeRequestOptions) {
        super();
        this.vendorId = options.vendorId;
    }

    public toJson(): IGetAuthorisationCodeRequestOptions {
        const json: IGetAuthorisationCodeRequestOptions = {
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
