/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IGetVendorClientIdResponseOptions {
    response?: string;
}
export default class GetVendorClientIdResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IGetVendorClientIdResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
