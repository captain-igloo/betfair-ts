/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import TimeRange, { ITimeRangeOptions } from '../common/TimeRange';
export interface ITimeRangeResultOptions {
    timeRange?: TimeRange | ITimeRangeOptions;
    marketCount?: number;
}
export default class TimeRangeResult extends JsonMember {
    private timeRange?;
    private marketCount?;
    constructor(options: ITimeRangeResultOptions);
    toJson(): ITimeRangeResultOptions;
    getTimeRange(): TimeRange | undefined;
    setTimeRange(timeRange: TimeRange): void;
    getMarketCount(): number | undefined;
    setMarketCount(marketCount: number): void;
}
