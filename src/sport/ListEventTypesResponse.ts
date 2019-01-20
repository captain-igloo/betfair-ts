/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import EventTypeResult from '../sport/EventTypeResult';

export default class ListEventTypesResponse extends JsonResponse {
    private eventTypeResults: EventTypeResult[];

    constructor(
        eventTypeResults: EventTypeResult[] = [],
    ) {
        super();
        this.eventTypeResults = eventTypeResults;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.eventTypeResults = json.map((eventTypeResultsJson: any) => {
                const element = new EventTypeResult();
                element.fromJson(eventTypeResultsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.eventTypeResults.length > 0) {
            json.eventTypeResults = this.eventTypeResults.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.eventTypeResults.length > 0;
    }

    public getEventTypeResults(): EventTypeResult[] {
        return this.eventTypeResults;
    }
    public setEventTypeResults(eventTypeResults: EventTypeResult[]): void {
        this.eventTypeResults = eventTypeResults;
    }

}
