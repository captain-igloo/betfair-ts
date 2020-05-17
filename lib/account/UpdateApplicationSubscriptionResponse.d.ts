/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IUpdateApplicationSubscriptionResponseOptions {
    response?: string;
}
export default class UpdateApplicationSubscriptionResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IUpdateApplicationSubscriptionResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
