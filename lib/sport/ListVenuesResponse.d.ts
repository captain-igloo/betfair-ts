/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import VenueResult, { IVenueResultOptions } from '../sport/VenueResult';
export interface IListVenuesResponseOptions {
    venueResults?: (VenueResult | IVenueResultOptions)[];
}
export default class ListVenuesResponse extends JsonResponse {
    private venueResults?;
    constructor(options: (VenueResult | IVenueResultOptions)[]);
    toJson(): IListVenuesResponseOptions;
    getVenueResults(): VenueResult[] | undefined;
    setVenueResults(venueResults: VenueResult[]): void;
}
