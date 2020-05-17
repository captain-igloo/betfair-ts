/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ICountryCodeResultOptions {
    countryCode?: string;
    marketCount?: number;
}

export default class CountryCodeResult extends JsonMember {
    private countryCode?: string;
    private marketCount?: number;

    constructor(options: ICountryCodeResultOptions) {
        super();
        this.countryCode = options.countryCode;
        this.marketCount = options.marketCount;
    }

    public toJson(): ICountryCodeResultOptions {
        const json: ICountryCodeResultOptions = {
        };
        if (typeof this.countryCode !== 'undefined') {
            json.countryCode = this.countryCode;
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public getCountryCode(): string | undefined {
        return this.countryCode;
    }
    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }
    public getMarketCount(): number | undefined {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number): void {
        this.marketCount = marketCount;
    }

}
