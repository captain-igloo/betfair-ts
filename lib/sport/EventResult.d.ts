/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Event, { IEventOptions } from '../sport/Event';
export interface IEventResultOptions {
    event?: Event | IEventOptions;
    marketCount?: number;
}
export default class EventResult extends JsonMember {
    private event?;
    private marketCount?;
    constructor(options: IEventResultOptions);
    toJson(): IEventResultOptions;
    getEvent(): Event | undefined;
    setEvent(event: Event): void;
    getMarketCount(): number | undefined;
    setMarketCount(marketCount: number): void;
}
