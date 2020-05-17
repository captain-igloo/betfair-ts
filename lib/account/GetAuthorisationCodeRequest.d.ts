/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IGetAuthorisationCodeRequestOptions {
    vendorId: string;
}
export default class GetAuthorisationCodeRequest extends JsonRequest {
    private vendorId;
    constructor(options: IGetAuthorisationCodeRequestOptions);
    toJson(): IGetAuthorisationCodeRequestOptions;
    getVendorId(): string;
    setVendorId(vendorId: string): void;
}
