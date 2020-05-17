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
    private eventType?: EventType;
    private marketCount?: number;

    constructor(options: IEventTypeResultOptions) {
        super();
        this.eventType = options.eventType && this.fromJson(options.eventType, EventType);
        this.marketCount = options.marketCount;
    }

    public toJson(): IEventTypeResultOptions {
        const json: IEventTypeResultOptions = {
        };
        if (this.eventType) {
            json.eventType = this.eventType.toJson();
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public getEventType(): EventType | undefined {
        return this.eventType;
    }
    public setEventType(eventType: EventType): void {
        this.eventType = eventType;
    }
    public getMarketCount(): number | undefined {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number): void {
        this.marketCount = marketCount;
    }

}
