/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IGetExposureReuseEnabledEventsResponseOptions {
    response?: number[];
}
export default class GetExposureReuseEnabledEventsResponse extends JsonResponse {
    private response?;
    constructor(options: number[]);
    toJson(): IGetExposureReuseEnabledEventsResponseOptions;
    getResponse(): number[] | undefined;
    setResponse(response: number[]): void;
}
