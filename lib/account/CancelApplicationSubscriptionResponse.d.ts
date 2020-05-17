/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import Status from '../account/enum/Status';
export interface ICancelApplicationSubscriptionResponseOptions {
    response?: Status | string;
}
export default class CancelApplicationSubscriptionResponse extends JsonResponse {
    private response?;
    constructor(options: Status | string);
    toJson(): ICancelApplicationSubscriptionResponseOptions;
    getResponse(): Status | undefined;
    setResponse(response: Status): void;
}
