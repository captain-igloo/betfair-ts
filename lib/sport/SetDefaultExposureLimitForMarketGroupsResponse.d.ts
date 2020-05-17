/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface ISetDefaultExposureLimitForMarketGroupsResponseOptions {
    response?: string;
}
export default class SetDefaultExposureLimitForMarketGroupsResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): ISetDefaultExposureLimitForMarketGroupsResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
