/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class SetDefaultExposureLimitForMarketGroupsResponse extends JsonResponse {
    private response;
    constructor(response?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getResponse(): string;
    setResponse(response: string): void;
}
