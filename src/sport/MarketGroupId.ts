/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IMarketGroupIdOptions {
    eventId?: number;
}

export default class MarketGroupId extends JsonMember {
    private eventId?: number;

    constructor(options: IMarketGroupIdOptions) {
        super();
        this.eventId = options.eventId;
    }

    public toJson(): IMarketGroupIdOptions {
        const json: IMarketGroupIdOptions = {
        };
        if (typeof this.eventId !== 'undefined') {
            json.eventId = this.eventId;
        }
        return json;
    }

    public getEventId(): number | undefined {
        return this.eventId;
    }
    public setEventId(eventId: number): void {
        this.eventId = eventId;
    }

}
