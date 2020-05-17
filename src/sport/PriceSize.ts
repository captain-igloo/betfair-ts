/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IPriceSizeOptions {
    price: number;
    size: number;
}

export default class PriceSize extends JsonMember {
    private price: number;
    private size: number;

    constructor(options: IPriceSizeOptions) {
        super();
        this.price = options.price;
        this.size = options.size;
    }

    public toJson(): IPriceSizeOptions {
        const json: IPriceSizeOptions = {
            price: this.price,
            size: this.size,
        };
        return json;
    }

    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number): void {
        this.price = price;
    }
    public getSize(): number {
        return this.size;
    }
    public setSize(size: number): void {
        this.size = size;
    }

}
