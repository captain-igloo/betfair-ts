/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class LimitOnCloseOrder extends JsonMember {
    private liability;
    private price;
    constructor(liability?: number | null, price?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getLiability(): number | null;
    setLiability(liability: number | null): void;
    getPrice(): number | null;
    setPrice(price: number | null): void;
}
