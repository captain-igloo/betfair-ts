/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IMarketRatesOptions {
    marketBaseRate: number;
    discountAllowed: boolean;
}

export default class MarketRates extends JsonMember {
    private marketBaseRate: number;
    private discountAllowed: boolean;

    constructor(options: IMarketRatesOptions) {
        super();
        this.marketBaseRate = options.marketBaseRate;
        this.discountAllowed = options.discountAllowed;
    }

    public toJson(): IMarketRatesOptions {
        const json: IMarketRatesOptions = {
            marketBaseRate: this.marketBaseRate,
            discountAllowed: this.discountAllowed,
        };
        return json;
    }

    public getMarketBaseRate(): number {
        return this.marketBaseRate;
    }
    public setMarketBaseRate(marketBaseRate: number): void {
        this.marketBaseRate = marketBaseRate;
    }
    public getDiscountAllowed(): boolean {
        return this.discountAllowed;
    }
    public setDiscountAllowed(discountAllowed: boolean): void {
        this.discountAllowed = discountAllowed;
    }

}
