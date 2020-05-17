/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import EventType, { IEventTypeOptions } from '../sport/EventType';
export interface IEventTypeResultOptions {
    eventType?: EventType | IEventTypeOptions;
    marketCount?: number;
}
export default class EventTypeResult extends JsonMember {
    private eventType?;
    private marketCount?;
    constructor(options: IEventTypeResultOptions);
    toJson(): IEventTypeResultOptions;
    getEventType(): EventType | undefined;
    setEventType(eventType: EventType): void;
    getMarketCount(): number | undefined;
    setMarketCount(marketCount: number): void;
}
