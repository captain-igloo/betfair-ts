/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import VenueResult from '../sport/VenueResult';
export default class ListVenuesResponse extends JsonResponse {
    private venueResults;
    constructor(venueResults?: VenueResult[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVenueResults(): VenueResult[];
    setVenueResults(venueResults: VenueResult[]): void;
}
