/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IListCurrencyRatesRequestOptions {
    fromCurrency?: string;
}

export default class ListCurrencyRatesRequest extends JsonRequest {
    private fromCurrency?: string;

    constructor(options: IListCurrencyRatesRequestOptions) {
        super();
        this.fromCurrency = options.fromCurrency;
    }

    public toJson(): IListCurrencyRatesRequestOptions {
        const json: IListCurrencyRatesRequestOptions = {
        };
        if (typeof this.fromCurrency !== 'undefined') {
            json.fromCurrency = this.fromCurrency;
        }
        return json;
    }

    public getFromCurrency(): string | undefined {
        return this.fromCurrency;
    }
    public setFromCurrency(fromCurrency: string): void {
        this.fromCurrency = fromCurrency;
    }

}
