/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import CurrencyRate from '../account/CurrencyRate';

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
            this.currencyRates = json.map((currencyRatesJson: any) => {
                const element = new CurrencyRate();
                element.fromJson(currencyRatesJson);
                return element;
            });
        }
    }

    public toJson(): any {
        let json: any = {};
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
