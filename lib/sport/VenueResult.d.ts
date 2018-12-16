/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class VenueResult extends JsonMember {
    private venue;
    private marketCount;
    constructor(venue?: string, marketCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVenue(): string;
    setVenue(venue: string): void;
    getMarketCount(): number | null;
    setMarketCount(marketCount: number | null): void;
}
