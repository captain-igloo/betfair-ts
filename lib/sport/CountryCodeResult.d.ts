/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ICountryCodeResultOptions {
    countryCode?: string;
    marketCount?: number;
}
export default class CountryCodeResult extends JsonMember {
    private countryCode?;
    private marketCount?;
    constructor(options: ICountryCodeResultOptions);
    toJson(): ICountryCodeResultOptions;
    getCountryCode(): string | undefined;
    setCountryCode(countryCode: string): void;
    getMarketCount(): number | undefined;
    setMarketCount(marketCount: number): void;
}
