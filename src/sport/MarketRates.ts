/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class MarketRates extends JsonMember {
    private marketBaseRate: number | null;
    private discountAllowed: boolean | null;

    constructor(
        marketBaseRate: number | null = null,
        discountAllowed: boolean | null = null,
    ) {
        super();
        this.marketBaseRate = marketBaseRate;
        this.discountAllowed = discountAllowed;
    }

    public fromJson(json: any): void {
        if ('marketBaseRate' in json) {
            this.marketBaseRate = json.marketBaseRate;
        }
        if ('discountAllowed' in json) {
            this.discountAllowed = json.discountAllowed;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketBaseRate !== null) {
            json.marketBaseRate = this.marketBaseRate;
        }
        if (this.discountAllowed !== null) {
            json.discountAllowed = this.discountAllowed;
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketBaseRate !== null &&
            this.discountAllowed !== null;
    }

    public getMarketBaseRate(): number | null {
        return this.marketBaseRate;
    }
    public setMarketBaseRate(marketBaseRate: number | null): void {
        this.marketBaseRate = marketBaseRate;
    }
    public getDiscountAllowed(): boolean | null {
        return this.discountAllowed;
    }
    public setDiscountAllowed(discountAllowed: boolean | null): void {
        this.discountAllowed = discountAllowed;
    }

}
