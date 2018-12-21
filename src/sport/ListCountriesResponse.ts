/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CountryCodeResult from '../sport/CountryCodeResult';

export default class ListCountriesResponse extends JsonResponse {
    private countryCodeResults: CountryCodeResult[];

    constructor(
        countryCodeResults: CountryCodeResult[] = [],
    ) {
        super();
        this.countryCodeResults = countryCodeResults;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('countryCodeResults' in json) {
                this.countryCodeResults = json.map((countryCodeResultsJson: any) => {
                    const element = new CountryCodeResult();
                    element.fromJson(countryCodeResultsJson);
                    return element;
                });
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.countryCodeResults.length > 0) {
            json.countryCodeResults = this.countryCodeResults.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.countryCodeResults.length > 0;
    }

    public getCountryCodeResults(): CountryCodeResult[] {
        return this.countryCodeResults;
    }
    public setCountryCodeResults(countryCodeResults: CountryCodeResult[]): void {
        this.countryCodeResults = countryCodeResults;
    }

}
