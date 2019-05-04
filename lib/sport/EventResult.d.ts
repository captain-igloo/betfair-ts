/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Event from '../sport/Event';
export default class EventResult extends JsonMember {
    private event;
    private marketCount;
    constructor(event?: Event, marketCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEvent(): Event;
    setEvent(event: Event): void;
    getMarketCount(): number | null;
    setMarketCount(marketCount: number | null): void;
}
