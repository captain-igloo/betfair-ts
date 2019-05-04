/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CountryCodeResult from '../sport/CountryCodeResult';
export default class ListCountriesResponse extends JsonResponse {
    private countryCodeResults;
    constructor(countryCodeResults?: CountryCodeResult[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCountryCodeResults(): CountryCodeResult[];
    setCountryCodeResults(countryCodeResults: CountryCodeResult[]): void;
}
