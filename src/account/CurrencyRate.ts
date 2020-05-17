/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ICurrencyRateOptions {
    currencyCode?: string;
    rate?: number;
}

export default class CurrencyRate extends JsonMember {
    private currencyCode?: string;
    private rate?: number;

    constructor(options: ICurrencyRateOptions) {
        super();
        this.currencyCode = options.currencyCode;
        this.rate = options.rate;
    }

    public toJson(): ICurrencyRateOptions {
        const json: ICurrencyRateOptions = {
        };
        if (typeof this.currencyCode !== 'undefined') {
            json.currencyCode = this.currencyCode;
        }
        if (typeof this.rate !== 'undefined') {
            json.rate = this.rate;
        }
        return json;
    }

    public getCurrencyCode(): string | undefined {
        return this.currencyCode;
    }
    public setCurrencyCode(currencyCode: string): void {
        this.currencyCode = currencyCode;
    }
    public getRate(): number | undefined {
        return this.rate;
    }
    public setRate(rate: number): void {
        this.rate = rate;
    }

}
