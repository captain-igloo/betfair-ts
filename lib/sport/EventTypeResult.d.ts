/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import EventType from '../sport/EventType';
export default class EventTypeResult extends JsonMember {
    private eventType;
    private marketCount;
    constructor(eventType?: EventType, marketCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEventType(): EventType;
    setEventType(eventType: EventType): void;
    getMarketCount(): number | null;
    setMarketCount(marketCount: number | null): void;
}
