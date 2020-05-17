/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IVenueResultOptions {
    venue?: string;
    marketCount?: number;
}
export default class VenueResult extends JsonMember {
    private venue?;
    private marketCount?;
    constructor(options: IVenueResultOptions);
    toJson(): IVenueResultOptions;
    getVenue(): string | undefined;
    setVenue(venue: string): void;
    getMarketCount(): number | undefined;
    setMarketCount(marketCount: number): void;
}
