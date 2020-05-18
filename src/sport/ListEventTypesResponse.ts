/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import EventTypeResult, { IEventTypeResultOptions } from '../sport/EventTypeResult';

export interface IListEventTypesResponseOptions {
    eventTypeResults?: (EventTypeResult | IEventTypeResultOptions)[];
}

export default class ListEventTypesResponse extends JsonResponse {
    private eventTypeResults?: EventTypeResult[];

    constructor(options: (EventTypeResult | IEventTypeResultOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.eventTypeResults = this.arrayFromJson(options, EventTypeResult);
            }
        }
    }

    public toJson(): IListEventTypesResponseOptions {
        throw new Error('not implemented');
    }

    public getEventTypeResults(): EventTypeResult[] | undefined {
        return this.eventTypeResults;
    }
    public setEventTypeResults(eventTypeResults: EventTypeResult[]): void {
        this.eventTypeResults = eventTypeResults;
    }

}
