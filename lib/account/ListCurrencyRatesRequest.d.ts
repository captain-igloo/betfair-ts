/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class ListCurrencyRatesRequest extends JsonRequest {
    private fromCurrency;
    constructor(fromCurrency?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getFromCurrency(): string;
    setFromCurrency(fromCurrency: string): void;
}
