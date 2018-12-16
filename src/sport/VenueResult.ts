/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class VenueResult extends JsonMember {
    private venue: string;
    private marketCount: number | null;

    constructor(
        venue: string = '',
        marketCount: number | null = null,
    ) {
        super();
        this.venue = venue;
        this.marketCount = marketCount;
    }

    public fromJson(json: any): void {
        if ('venue' in json) {
            this.venue = json.venue;
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.venue !== null) {
            json.venue = this.venue;
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getVenue(): string {
        return this.venue;
    }
    public setVenue(venue: string): void {
        this.venue = venue;
    }
    public getMarketCount(): number | null {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number | null): void {
        this.marketCount = marketCount;
    }

}
