/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

export default class ListCurrencyRatesRequest extends JsonRequest {
    private fromCurrency: string;

    constructor(
        fromCurrency: string = '',
    ) {
        super();
        this.fromCurrency = fromCurrency;
    }

    public fromJson(json: any): void {
        if ('fromCurrency' in json) {
            this.fromCurrency = json.fromCurrency;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.fromCurrency !== null) {
            json.fromCurrency = this.fromCurrency;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getFromCurrency(): string {
        return this.fromCurrency;
    }
    public setFromCurrency(fromCurrency: string): void {
        this.fromCurrency = fromCurrency;
    }

}
