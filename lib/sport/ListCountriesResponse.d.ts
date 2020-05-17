/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CountryCodeResult, { ICountryCodeResultOptions } from '../sport/CountryCodeResult';
export interface IListCountriesResponseOptions {
    countryCodeResults?: Array<CountryCodeResult | ICountryCodeResultOptions>;
}
export default class ListCountriesResponse extends JsonResponse {
    private countryCodeResults?;
    constructor(options: Array<CountryCodeResult | ICountryCodeResultOptions>);
    toJson(): IListCountriesResponseOptions;
    getCountryCodeResults(): CountryCodeResult[] | undefined;
    setCountryCodeResults(countryCodeResults: CountryCodeResult[]): void;
}
