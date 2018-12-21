/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import CurrencyRate from '../account/CurrencyRate';
import JsonResponse from '../JsonResponse';

export default class ListCurrencyRatesResponse extends JsonResponse {
    private currencyRates: CurrencyRate[];

    constructor(
        currencyRates: CurrencyRate[] = [],
    ) {
        super();
        this.currencyRates = currencyRates;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('currencyRates' in json) {
                this.currencyRates = json.map((currencyRatesJson: any) => {
                    const element = new CurrencyRate();
                    element.fromJson(currencyRatesJson);
                    return element;
                });
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.currencyRates.length > 0) {
            json.currencyRates = this.currencyRates.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.currencyRates.length > 0;
    }

    public getCurrencyRates(): CurrencyRate[] {
        return this.currencyRates;
    }
    public setCurrencyRates(currencyRates: CurrencyRate[]): void {
        this.currencyRates = currencyRates;
    }

}
