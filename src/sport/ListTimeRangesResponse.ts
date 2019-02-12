/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import TimeRangeResult from '../sport/TimeRangeResult';

export default class ListTimeRangesResponse extends JsonResponse {
    private timeRangeResults: TimeRangeResult[];

    constructor(
        timeRangeResults: TimeRangeResult[] = [],
    ) {
        super();
        this.timeRangeResults = timeRangeResults;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.timeRangeResults = json.map((timeRangeResultsJson: any) => {
                const element = new TimeRangeResult();
                element.fromJson(timeRangeResultsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        let json: any = {};
        if (this.timeRangeResults.length > 0) {
            json.timeRangeResults = this.timeRangeResults.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.timeRangeResults.length > 0;
    }

    public getTimeRangeResults(): TimeRangeResult[] {
        return this.timeRangeResults;
    }
    public setTimeRangeResults(timeRangeResults: TimeRangeResult[]): void {
        this.timeRangeResults = timeRangeResults;
    }

}
