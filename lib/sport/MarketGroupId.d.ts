/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IMarketGroupIdOptions {
    eventId?: number;
}
export default class MarketGroupId extends JsonMember {
    private eventId?;
    constructor(options: IMarketGroupIdOptions);
    toJson(): IMarketGroupIdOptions;
    getEventId(): number | undefined;
    setEventId(eventId: number): void;
}
