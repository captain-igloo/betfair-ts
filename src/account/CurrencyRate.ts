/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class CurrencyRate extends JsonMember {
    private currencyCode: string;
    private rate: number | null;

    constructor(
        currencyCode: string = '',
        rate: number | null = null,
    ) {
        super();
        this.currencyCode = currencyCode;
        this.rate = rate;
    }

    public fromJson(json: any): void {
        if ('currencyCode' in json) {
            this.currencyCode = json.currencyCode;
        }
        if ('rate' in json) {
            this.rate = json.rate;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.currencyCode !== null) {
            json.currencyCode = this.currencyCode;
        }
        if (this.rate !== null) {
            json.rate = this.rate;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getCurrencyCode(): string {
        return this.currencyCode;
    }
    public setCurrencyCode(currencyCode: string): void {
        this.currencyCode = currencyCode;
    }
    public getRate(): number | null {
        return this.rate;
    }
    public setRate(rate: number | null): void {
        this.rate = rate;
    }

}
