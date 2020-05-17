/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import Status from '../account/enum/Status';
export interface IActivateApplicationSubscriptionResponseOptions {
    response?: Status | string;
}
export default class ActivateApplicationSubscriptionResponse extends JsonResponse {
    private response?;
    constructor(options: Status | string);
    toJson(): IActivateApplicationSubscriptionResponseOptions;
    getResponse(): Status | undefined;
    setResponse(response: Status): void;
}
