/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class PriceSize extends JsonMember {
    private price;
    private size;
    constructor(price?: number | null, size?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getPrice(): number | null;
    setPrice(price: number | null): void;
    getSize(): number | null;
    setSize(size: number | null): void;
}
