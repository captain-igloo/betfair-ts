/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import EventResult from '../sport/EventResult';

export default class ListEventsResponse extends JsonResponse {
    private eventResults: EventResult[];

    constructor(
        eventResults: EventResult[] = [],
    ) {
        super();
        this.eventResults = eventResults;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.eventResults = json.map((eventResultsJson: any) => {
                const element = new EventResult();
                element.fromJson(eventResultsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.eventResults.length > 0) {
            json.eventResults = this.eventResults.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.eventResults.length > 0;
    }

    public getEventResults(): EventResult[] {
        return this.eventResults;
    }
    public setEventResults(eventResults: EventResult[]): void {
        this.eventResults = eventResults;
    }

}
