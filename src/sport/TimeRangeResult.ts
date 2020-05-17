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
    private timeRange?: TimeRange;
    private marketCount?: number;

    constructor(options: ITimeRangeResultOptions) {
        super();
        this.timeRange = options.timeRange && this.fromJson(options.timeRange, TimeRange);
        this.marketCount = options.marketCount;
    }

    public toJson(): ITimeRangeResultOptions {
        const json: ITimeRangeResultOptions = {
        };
        if (this.timeRange) {
            json.timeRange = this.timeRange.toJson();
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public getTimeRange(): TimeRange | undefined {
        return this.timeRange;
    }
    public setTimeRange(timeRange: TimeRange): void {
        this.timeRange = timeRange;
    }
    public getMarketCount(): number | undefined {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number): void {
        this.marketCount = marketCount;
    }

}
