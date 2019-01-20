/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import TimeRange from '../common/TimeRange';

export default class TimeRangeResult extends JsonMember {
    private timeRange: TimeRange;
    private marketCount: number | null;

    constructor(
        timeRange: TimeRange = new TimeRange(),
        marketCount: number | null = null,
    ) {
        super();
        this.timeRange = timeRange;
        this.marketCount = marketCount;
    }

    public fromJson(json: any): void {
        if ('timeRange' in json) {
            this.timeRange.fromJson(json.timeRange);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.timeRange.isValid()) {
            json.timeRange = this.timeRange.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getTimeRange(): TimeRange {
        return this.timeRange;
    }
    public setTimeRange(timeRange: TimeRange): void {
        this.timeRange = timeRange;
    }
    public getMarketCount(): number | null {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number | null): void {
        this.marketCount = marketCount;
    }

}
