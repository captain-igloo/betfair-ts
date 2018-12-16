/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class CountryCodeResult extends JsonMember {
    private countryCode: string;
    private marketCount: number | null;

    constructor(
        countryCode: string = '',
        marketCount: number | null = null,
    ) {
        super();
        this.countryCode = countryCode;
        this.marketCount = marketCount;
    }

    public fromJson(json: any): void {
        if ('countryCode' in json) {
            this.countryCode = json.countryCode;
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.countryCode !== null) {
            json.countryCode = this.countryCode;
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getCountryCode(): string {
        return this.countryCode;
    }
    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }
    public getMarketCount(): number | null {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number | null): void {
        this.marketCount = marketCount;
    }

}
