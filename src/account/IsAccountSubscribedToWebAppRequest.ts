/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IIsAccountSubscribedToWebAppRequestOptions {
    vendorId: string;
}

export default class IsAccountSubscribedToWebAppRequest extends JsonRequest {
    private vendorId: string;

    constructor(options: IIsAccountSubscribedToWebAppRequestOptions) {
        super();
        this.vendorId = options.vendorId;
    }

    public toJson(): IIsAccountSubscribedToWebAppRequestOptions {
        const json: IIsAccountSubscribedToWebAppRequestOptions = {
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
