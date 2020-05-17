/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import VenueResult, { IVenueResultOptions } from '../sport/VenueResult';

export interface IListVenuesResponseOptions {
    venueResults?: Array<VenueResult | IVenueResultOptions>;
}

export default class ListVenuesResponse extends JsonResponse {
    private venueResults?: VenueResult[];

    constructor(options: Array<VenueResult | IVenueResultOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.venueResults = this.arrayFromJson(options, VenueResult);
            }
        }
    }

    public toJson(): IListVenuesResponseOptions {
        throw new Error('not implemented');
    }

    public getVenueResults(): VenueResult[] | undefined {
        return this.venueResults;
    }
    public setVenueResults(venueResults: VenueResult[]): void {
        this.venueResults = venueResults;
    }

}
