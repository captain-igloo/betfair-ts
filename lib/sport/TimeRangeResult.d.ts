/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import TimeRange from '../common/TimeRange';
export default class TimeRangeResult extends JsonMember {
    private timeRange;
    private marketCount;
    constructor(timeRange?: TimeRange, marketCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getTimeRange(): TimeRange;
    setTimeRange(timeRange: TimeRange): void;
    getMarketCount(): number | null;
    setMarketCount(marketCount: number | null): void;
}
