/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class LimitOnCloseOrder extends JsonMember {
    private liability: number | null;
    private price: number | null;

    constructor(
        liability: number | null = null,
        price: number | null = null,
    ) {
        super();
        this.liability = liability;
        this.price = price;
    }

    public fromJson(json: any): void {
        if ('liability' in json) {
            this.liability = json.liability;
        }
        if ('price' in json) {
            this.price = json.price;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.liability !== null) {
            json.liability = this.liability;
        }
        if (this.price !== null) {
            json.price = this.price;
        }
        return json;
    }

    public isValid(): boolean {
        return this.liability !== null &&
            this.price !== null;
    }

    public getLiability(): number | null {
        return this.liability;
    }
    public setLiability(liability: number | null): void {
        this.liability = liability;
    }
    public getPrice(): number | null {
        return this.price;
    }
    public setPrice(price: number | null): void {
        this.price = price;
    }

}
