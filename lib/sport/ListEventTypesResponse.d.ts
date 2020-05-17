/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import EventTypeResult, { IEventTypeResultOptions } from '../sport/EventTypeResult';
export interface IListEventTypesResponseOptions {
    eventTypeResults?: Array<EventTypeResult | IEventTypeResultOptions>;
}
export default class ListEventTypesResponse extends JsonResponse {
    private eventTypeResults?;
    constructor(options: Array<EventTypeResult | IEventTypeResultOptions>);
    toJson(): IListEventTypesResponseOptions;
    getEventTypeResults(): EventTypeResult[] | undefined;
    setEventTypeResults(eventTypeResults: EventTypeResult[]): void;
}
