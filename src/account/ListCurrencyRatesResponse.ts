/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import CurrencyRate, { ICurrencyRateOptions } from '../account/CurrencyRate';

export interface IListCurrencyRatesResponseOptions {
    currencyRates?: (CurrencyRate | ICurrencyRateOptions)[];
}

export default class ListCurrencyRatesResponse extends JsonResponse {
    private currencyRates?: CurrencyRate[];

    constructor(options: (CurrencyRate | ICurrencyRateOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.currencyRates = this.arrayFromJson(options, CurrencyRate);
            }
        }
    }

    public toJson(): IListCurrencyRatesResponseOptions {
        throw new Error('not implemented');
    }

    public getCurrencyRates(): CurrencyRate[] | undefined {
        return this.currencyRates;
    }
    public setCurrencyRates(currencyRates: CurrencyRate[]): void {
        this.currencyRates = currencyRates;
    }

}
