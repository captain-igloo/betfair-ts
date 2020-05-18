/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CurrencyRate, { ICurrencyRateOptions } from '../account/CurrencyRate';
export interface IListCurrencyRatesResponseOptions {
    currencyRates?: (CurrencyRate | ICurrencyRateOptions)[];
}
export default class ListCurrencyRatesResponse extends JsonResponse {
    private currencyRates?;
    constructor(options: (CurrencyRate | ICurrencyRateOptions)[]);
    toJson(): IListCurrencyRatesResponseOptions;
    getCurrencyRates(): CurrencyRate[] | undefined;
    setCurrencyRates(currencyRates: CurrencyRate[]): void;
}
