/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import EventType from '../sport/EventType';

export default class EventTypeResult extends JsonMember {
    private eventType: EventType;
    private marketCount: number | null;

    constructor(
        eventType: EventType = new EventType(),
        marketCount: number | null = null,
    ) {
        super();
        this.eventType = eventType;
        this.marketCount = marketCount;
    }

    public fromJson(json: any): void {
        if ('eventType' in json) {
            this.eventType.fromJson(json.eventType);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.eventType.isValid()) {
            json.eventType = this.eventType.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getEventType(): EventType {
        return this.eventType;
    }
    public setEventType(eventType: EventType): void {
        this.eventType = eventType;
    }
    public getMarketCount(): number | null {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number | null): void {
        this.marketCount = marketCount;
    }

}
