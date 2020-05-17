/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ILimitOnCloseOrderOptions {
    liability: number;
    price: number;
}
export default class LimitOnCloseOrder extends JsonMember {
    private liability;
    private price;
    constructor(options: ILimitOnCloseOrderOptions);
    toJson(): ILimitOnCloseOrderOptions;
    getLiability(): number;
    setLiability(liability: number): void;
    getPrice(): number;
    setPrice(price: number): void;
}
