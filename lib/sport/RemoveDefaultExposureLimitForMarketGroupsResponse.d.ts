/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IRemoveDefaultExposureLimitForMarketGroupsResponseOptions {
    response?: string;
}
export default class RemoveDefaultExposureLimitForMarketGroupsResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IRemoveDefaultExposureLimitForMarketGroupsResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
