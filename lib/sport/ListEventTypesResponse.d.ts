/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import EventTypeResult from '../sport/EventTypeResult';
export default class ListEventTypesResponse extends JsonResponse {
    private eventTypeResults;
    constructor(eventTypeResults?: EventTypeResult[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEventTypeResults(): EventTypeResult[];
    setEventTypeResults(eventTypeResults: EventTypeResult[]): void;
}
