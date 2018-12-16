/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class MarketGroupId extends JsonMember {
    private eventId: number | null;

    constructor(
        eventId: number | null = null,
    ) {
        super();
        this.eventId = eventId;
    }

    public fromJson(json: any): void {
        if ('eventId' in json) {
            this.eventId = json.eventId;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.eventId !== null) {
            json.eventId = this.eventId;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getEventId(): number | null {
        return this.eventId;
    }
    public setEventId(eventId: number | null): void {
        this.eventId = eventId;
    }

}
