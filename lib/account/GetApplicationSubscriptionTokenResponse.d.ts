/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IGetApplicationSubscriptionTokenResponseOptions {
    response?: string;
}
export default class GetApplicationSubscriptionTokenResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IGetApplicationSubscriptionTokenResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
