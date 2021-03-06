/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import TimeRangeResult, { ITimeRangeResultOptions } from '../sport/TimeRangeResult';
export interface IListTimeRangesResponseOptions {
    timeRangeResults?: (TimeRangeResult | ITimeRangeResultOptions)[];
}
export default class ListTimeRangesResponse extends JsonResponse {
    private timeRangeResults?;
    constructor(options: (TimeRangeResult | ITimeRangeResultOptions)[]);
    toJson(): IListTimeRangesResponseOptions;
    getTimeRangeResults(): TimeRangeResult[] | undefined;
    setTimeRangeResults(timeRangeResults: TimeRangeResult[]): void;
}
