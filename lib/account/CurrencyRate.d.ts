/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class CurrencyRate extends JsonMember {
    private currencyCode;
    private rate;
    constructor(currencyCode?: string, rate?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCurrencyCode(): string;
    setCurrencyCode(currencyCode: string): void;
    getRate(): number | null;
    setRate(rate: number | null): void;
}
