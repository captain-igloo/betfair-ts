/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class MarketRates extends JsonMember {
    private marketBaseRate;
    private discountAllowed;
    constructor(marketBaseRate?: number | null, discountAllowed?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketBaseRate(): number | null;
    setMarketBaseRate(marketBaseRate: number | null): void;
    getDiscountAllowed(): boolean | null;
    setDiscountAllowed(discountAllowed: boolean | null): void;
}
