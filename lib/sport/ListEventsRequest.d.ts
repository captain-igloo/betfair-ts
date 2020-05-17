/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketFilter, { IMarketFilterOptions } from '../sport/MarketFilter';
export interface IListEventsRequestOptions {
    filter: MarketFilter | IMarketFilterOptions;
    locale?: string;
}
export default class ListEventsRequest extends JsonRequest {
    private filter;
    private locale?;
    constructor(options: IListEventsRequestOptions);
    toJson(): IListEventsRequestOptions;
    getFilter(): MarketFilter;
    setFilter(filter: MarketFilter): void;
    getLocale(): string | undefined;
    setLocale(locale: string): void;
}
