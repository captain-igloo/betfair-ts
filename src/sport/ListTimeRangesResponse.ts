/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import TimeRangeResult, { ITimeRangeResultOptions } from '../sport/TimeRangeResult';

export interface IListTimeRangesResponseOptions {
    timeRangeResults?: Array<TimeRangeResult | ITimeRangeResultOptions>;
}

export default class ListTimeRangesResponse extends JsonResponse {
    private timeRangeResults?: TimeRangeResult[];

    constructor(options: Array<TimeRangeResult | ITimeRangeResultOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.timeRangeResults = this.arrayFromJson(options, TimeRangeResult);
            }
        }
    }

    public toJson(): IListTimeRangesResponseOptions {
        throw new Error('not implemented');
    }

    public getTimeRangeResults(): TimeRangeResult[] | undefined {
        return this.timeRangeResults;
    }
    public setTimeRangeResults(timeRangeResults: TimeRangeResult[]): void {
        this.timeRangeResults = timeRangeResults;
    }

}
