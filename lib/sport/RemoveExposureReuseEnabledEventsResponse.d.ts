/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IRemoveExposureReuseEnabledEventsResponseOptions {
    response?: string;
}
export default class RemoveExposureReuseEnabledEventsResponse extends JsonResponse {
    private response?;
    constructor(options: string);
    toJson(): IRemoveExposureReuseEnabledEventsResponseOptions;
    getResponse(): string | undefined;
    setResponse(response: string): void;
}
