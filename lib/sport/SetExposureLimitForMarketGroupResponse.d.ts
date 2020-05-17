/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface ISetExposureLimitForMarketGroupResponseOptions {
    response?: string;
}
export default class SetExposureLimitForMarketGroupResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): ISetExposureLimitForMarketGroupResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
