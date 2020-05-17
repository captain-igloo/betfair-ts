/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IIsAccountSubscribedToWebAppRequestOptions {
    vendorId: string;
}
export default class IsAccountSubscribedToWebAppRequest extends JsonRequest {
    private vendorId;
    constructor(options: IIsAccountSubscribedToWebAppRequestOptions);
    toJson(): IIsAccountSubscribedToWebAppRequestOptions;
    getVendorId(): string;
    setVendorId(vendorId: string): void;
}
