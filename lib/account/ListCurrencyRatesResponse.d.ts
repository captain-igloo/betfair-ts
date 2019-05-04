/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CurrencyRate from '../account/CurrencyRate';
export default class ListCurrencyRatesResponse extends JsonResponse {
    private currencyRates;
    constructor(currencyRates?: CurrencyRate[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCurrencyRates(): CurrencyRate[];
    setCurrencyRates(currencyRates: CurrencyRate[]): void;
}
