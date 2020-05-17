/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IRemoveExposureLimitForMarketGroupResponseOptions {
    response?: string;
}
export default class RemoveExposureLimitForMarketGroupResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IRemoveExposureLimitForMarketGroupResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
