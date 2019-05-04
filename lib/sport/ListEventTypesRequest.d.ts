/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketFilter from '../sport/MarketFilter';
export default class ListEventTypesRequest extends JsonRequest {
    private filter;
    private locale;
    constructor(filter?: MarketFilter, locale?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getFilter(): MarketFilter;
    setFilter(filter: MarketFilter): void;
    getLocale(): string;
    setLocale(locale: string): void;
}
