/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import Event from '../sport/Event';

export default class EventResult extends JsonMember {
    private event: Event;
    private marketCount: number | null;

    constructor(
        event: Event = new Event(),
        marketCount: number | null = null,
    ) {
        super();
        this.event = event;
        this.marketCount = marketCount;
    }

    public fromJson(json: any): void {
        if ('event' in json) {
            this.event.fromJson(json.event);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.event.isValid()) {
            json.event = this.event.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getEvent(): Event {
        return this.event;
    }
    public setEvent(event: Event): void {
        this.event = event;
    }
    public getMarketCount(): number | null {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number | null): void {
        this.marketCount = marketCount;
    }

}
