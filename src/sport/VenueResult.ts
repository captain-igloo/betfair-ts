/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IVenueResultOptions {
    venue?: string;
    marketCount?: number;
}

export default class VenueResult extends JsonMember {
    private venue?: string;
    private marketCount?: number;

    constructor(options: IVenueResultOptions) {
        super();
        this.venue = options.venue;
        this.marketCount = options.marketCount;
    }

    public toJson(): IVenueResultOptions {
        const json: IVenueResultOptions = {
        };
        if (typeof this.venue !== 'undefined') {
            json.venue = this.venue;
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public getVenue(): string | undefined {
        return this.venue;
    }
    public setVenue(venue: string): void {
        this.venue = venue;
    }
    public getMarketCount(): number | undefined {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number): void {
        this.marketCount = marketCount;
    }

}
