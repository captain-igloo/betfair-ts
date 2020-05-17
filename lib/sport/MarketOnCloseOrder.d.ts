/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IMarketOnCloseOrderOptions {
    liability: number;
}
export default class MarketOnCloseOrder extends JsonMember {
    private liability;
    constructor(options: IMarketOnCloseOrderOptions);
    toJson(): IMarketOnCloseOrderOptions;
    getLiability(): number;
    setLiability(liability: number): void;
}
