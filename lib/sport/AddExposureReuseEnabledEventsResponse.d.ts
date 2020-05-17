/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IAddExposureReuseEnabledEventsResponseOptions {
    response?: string;
}
export default class AddExposureReuseEnabledEventsResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IAddExposureReuseEnabledEventsResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
