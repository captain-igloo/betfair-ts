/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ILimitOnCloseOrderOptions {
    liability: number;
    price: number;
}

export default class LimitOnCloseOrder extends JsonMember {
    private liability: number;
    private price: number;

    constructor(options: ILimitOnCloseOrderOptions) {
        super();
        this.liability = options.liability;
        this.price = options.price;
    }

    public toJson(): ILimitOnCloseOrderOptions {
        const json: ILimitOnCloseOrderOptions = {
            liability: this.liability,
            price: this.price,
        };
        return json;
    }

    public getLiability(): number {
        return this.liability;
    }
    public setLiability(liability: number): void {
        this.liability = liability;
    }
    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number): void {
        this.price = price;
    }

}
