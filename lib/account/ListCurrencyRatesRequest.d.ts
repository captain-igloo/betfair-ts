/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IListCurrencyRatesRequestOptions {
    fromCurrency?: string;
}
export default class ListCurrencyRatesRequest extends JsonRequest {
    private fromCurrency?;
    constructor(options: IListCurrencyRatesRequestOptions);
    toJson(): IListCurrencyRatesRequestOptions;
    getFromCurrency(): string | undefined;
    setFromCurrency(fromCurrency: string): void;
}
