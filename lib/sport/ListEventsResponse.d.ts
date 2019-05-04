/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import EventResult from '../sport/EventResult';
export default class ListEventsResponse extends JsonResponse {
    private eventResults;
    constructor(eventResults?: EventResult[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEventResults(): EventResult[];
    setEventResults(eventResults: EventResult[]): void;
}
