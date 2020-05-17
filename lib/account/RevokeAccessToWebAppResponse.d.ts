/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import Status from '../account/enum/Status';
export interface IRevokeAccessToWebAppResponseOptions {
    response?: Status | string;
}
export default class RevokeAccessToWebAppResponse extends JsonResponse {
    private response?;
    constructor(options: Status | string);
    toJson(): IRevokeAccessToWebAppResponseOptions;
    getResponse(): Status | undefined;
    setResponse(response: Status): void;
}
