/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IIsAccountSubscribedToWebAppResponseOptions {
    response?: boolean;
}
export default class IsAccountSubscribedToWebAppResponse extends JsonResponse {
    private response?;
    constructor(options: boolean);
    toJson(): IIsAccountSubscribedToWebAppResponseOptions;
    getResponse(): boolean | undefined;
    setResponse(response: boolean): void;
}
