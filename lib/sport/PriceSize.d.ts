/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IPriceSizeOptions {
    price: number;
    size: number;
}
export default class PriceSize extends JsonMember {
    private price;
    private size;
    constructor(options: IPriceSizeOptions);
    toJson(): IPriceSizeOptions;
    getPrice(): number;
    setPrice(price: number): void;
    getSize(): number;
    setSize(size: number): void;
}
