/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class GetExposureReuseEnabledEventsResponse extends JsonResponse {
    private response;
    constructor(response?: number[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getResponse(): number[];
    setResponse(response: number[]): void;
}
