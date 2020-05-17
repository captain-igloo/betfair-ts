/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import CountryCodeResult, { ICountryCodeResultOptions } from '../sport/CountryCodeResult';

export interface IListCountriesResponseOptions {
    countryCodeResults?: Array<CountryCodeResult | ICountryCodeResultOptions>;
}

export default class ListCountriesResponse extends JsonResponse {
    private countryCodeResults?: CountryCodeResult[];

    constructor(options: Array<CountryCodeResult | ICountryCodeResultOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.countryCodeResults = this.arrayFromJson(options, CountryCodeResult);
            }
        }
    }

    public toJson(): IListCountriesResponseOptions {
        throw new Error('not implemented');
    }

    public getCountryCodeResults(): CountryCodeResult[] | undefined {
        return this.countryCodeResults;
    }
    public setCountryCodeResults(countryCodeResults: CountryCodeResult[]): void {
        this.countryCodeResults = countryCodeResults;
    }

}
