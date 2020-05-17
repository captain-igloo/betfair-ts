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
    private event?: Event;
    private marketCount?: number;

    constructor(options: IEventResultOptions) {
        super();
        this.event = options.event && this.fromJson(options.event, Event);
        this.marketCount = options.marketCount;
    }

    public toJson(): IEventResultOptions {
        const json: IEventResultOptions = {
        };
        if (this.event) {
            json.event = this.event.toJson();
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public getEvent(): Event | undefined {
        return this.event;
    }
    public setEvent(event: Event): void {
        this.event = event;
    }
    public getMarketCount(): number | undefined {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number): void {
        this.marketCount = marketCount;
    }

}
