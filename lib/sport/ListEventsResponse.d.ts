/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import EventResult, { IEventResultOptions } from '../sport/EventResult';
export interface IListEventsResponseOptions {
    eventResults?: (EventResult | IEventResultOptions)[];
}
export default class ListEventsResponse extends JsonResponse {
    private eventResults?;
    constructor(options: (EventResult | IEventResultOptions)[]);
    toJson(): IListEventsResponseOptions;
    getEventResults(): EventResult[] | undefined;
    setEventResults(eventResults: EventResult[]): void;
}
