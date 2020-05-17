/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IUnblockMarketGroupResponseOptions {
    response?: string;
}
export default class UnblockMarketGroupResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IUnblockMarketGroupResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
