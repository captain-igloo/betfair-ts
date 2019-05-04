/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import TimeRangeResult from '../sport/TimeRangeResult';
export default class ListTimeRangesResponse extends JsonResponse {
    private timeRangeResults;
    constructor(timeRangeResults?: TimeRangeResult[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getTimeRangeResults(): TimeRangeResult[];
    setTimeRangeResults(timeRangeResults: TimeRangeResult[]): void;
}
