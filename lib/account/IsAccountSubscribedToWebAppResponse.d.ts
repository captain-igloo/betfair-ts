/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class IsAccountSubscribedToWebAppResponse extends JsonResponse {
    private response;
    constructor(response?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getResponse(): boolean | null;
    setResponse(response: boolean | null): void;
}
