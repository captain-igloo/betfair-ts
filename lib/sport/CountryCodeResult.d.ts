/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class CountryCodeResult extends JsonMember {
    private countryCode;
    private marketCount;
    constructor(countryCode?: string, marketCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCountryCode(): string;
    setCountryCode(countryCode: string): void;
    getMarketCount(): number | null;
    setMarketCount(marketCount: number | null): void;
}
