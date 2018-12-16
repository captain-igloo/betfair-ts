/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class PriceSize extends JsonMember {
    private price: number | null;
    private size: number | null;

    constructor(
        price: number | null = null,
        size: number | null = null,
    ) {
        super();
        this.price = price;
        this.size = size;
    }

    public fromJson(json: any): void {
        if ('price' in json) {
            this.price = json.price;
        }
        if ('size' in json) {
            this.size = json.size;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.price !== null) {
            json.price = this.price;
        }
        if (this.size !== null) {
            json.size = this.size;
        }
        return json;
    }

    public isValid(): boolean {
        return this.price !== null &&
            this.size !== null;
    }

    public getPrice(): number | null {
        return this.price;
    }
    public setPrice(price: number | null): void {
        this.price = price;
    }
    public getSize(): number | null {
        return this.size;
    }
    public setSize(size: number | null): void {
        this.size = size;
    }

}
