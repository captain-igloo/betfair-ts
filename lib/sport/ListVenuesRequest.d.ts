/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketFilter, { IMarketFilterOptions } from '../sport/MarketFilter';
export interface IListVenuesRequestOptions {
    filter: MarketFilter | IMarketFilterOptions;
    locale?: string;
}
export default class ListVenuesRequest extends JsonRequest {
    private filter;
    private locale?;
    constructor(options: IListVenuesRequestOptions);
    toJson(): IListVenuesRequestOptions;
    getFilter(): MarketFilter;
    setFilter(filter: MarketFilter): void;
    getLocale(): string | undefined;
    setLocale(locale: string): void;
}
