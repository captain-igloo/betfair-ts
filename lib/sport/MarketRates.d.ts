/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IMarketRatesOptions {
    marketBaseRate: number;
    discountAllowed: boolean;
}
export default class MarketRates extends JsonMember {
    private marketBaseRate;
    private discountAllowed;
    constructor(options: IMarketRatesOptions);
    toJson(): IMarketRatesOptions;
    getMarketBaseRate(): number;
    setMarketBaseRate(marketBaseRate: number): void;
    getDiscountAllowed(): boolean;
    setDiscountAllowed(discountAllowed: boolean): void;
}
