/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class MarketGroupId extends JsonMember {
    private eventId;
    constructor(eventId?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEventId(): number | null;
    setEventId(eventId: number | null): void;
}
