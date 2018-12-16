/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import VenueResult from '../sport/VenueResult';

export default class ListVenuesResponse extends JsonResponse {
    private venueResults: VenueResult[];

    constructor(
        venueResults: VenueResult[] = [],
    ) {
        super();
        this.venueResults = venueResults;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.venueResults = json.map((venueResultsJson: any) => {
                const element = new VenueResult();
                element.fromJson(venueResultsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.venueResults.length > 0) {
            json.venueResults = this.venueResults.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.venueResults.length > 0;
    }

    public getVenueResults(): VenueResult[] {
        return this.venueResults;
    }
    public setVenueResults(venueResults: VenueResult[]): void {
        this.venueResults = venueResults;
    }

}
