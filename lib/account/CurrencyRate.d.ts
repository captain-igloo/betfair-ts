/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ICurrencyRateOptions {
    currencyCode?: string;
    rate?: number;
}
export default class CurrencyRate extends JsonMember {
    private currencyCode?;
    private rate?;
    constructor(options: ICurrencyRateOptions);
    toJson(): ICurrencyRateOptions;
    getCurrencyCode(): string | undefined;
    setCurrencyCode(currencyCode: string): void;
    getRate(): number | undefined;
    setRate(rate: number): void;
}
