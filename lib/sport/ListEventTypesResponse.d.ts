/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import EventTypeResult, { IEventTypeResultOptions } from '../sport/EventTypeResult';
export interface IListEventTypesResponseOptions {
    eventTypeResults?: (EventTypeResult | IEventTypeResultOptions)[];
}
export default class ListEventTypesResponse extends JsonResponse {
    private eventTypeResults?;
    constructor(options: (EventTypeResult | IEventTypeResultOptions)[]);
    toJson(): IListEventTypesResponseOptions;
    getEventTypeResults(): EventTypeResult[] | undefined;
    setEventTypeResults(eventTypeResults: EventTypeResult[]): void;
}
