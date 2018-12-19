/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Status from '../account/enum/Status';
import JsonResponse from '../JsonResponse';
export default class RevokeAccessToWebAppResponse extends JsonResponse {
    private response;
    constructor(response?: Status);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getResponse(): Status;
    setResponse(response: Status): void;
}
