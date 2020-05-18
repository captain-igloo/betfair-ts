/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import EventResult, { IEventResultOptions } from '../sport/EventResult';

export interface IListEventsResponseOptions {
    eventResults?: (EventResult | IEventResultOptions)[];
}

export default class ListEventsResponse extends JsonResponse {
    private eventResults?: EventResult[];

    constructor(options: (EventResult | IEventResultOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.eventResults = this.arrayFromJson(options, EventResult);
            }
        }
    }

    public toJson(): IListEventsResponseOptions {
        throw new Error('not implemented');
    }

    public getEventResults(): EventResult[] | undefined {
        return this.eventResults;
    }
    public setEventResults(eventResults: EventResult[]): void {
        this.eventResults = eventResults;
    }

}
