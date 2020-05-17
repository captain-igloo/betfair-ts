/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketProjection from '../sport/enum/MarketProjection';
import MarketSort from '../sport/enum/MarketSort';
import MarketFilter, { IMarketFilterOptions } from '../sport/MarketFilter';
export interface IListMarketCatalogueRequestOptions {
    filter: MarketFilter | IMarketFilterOptions;
    marketProjection?: Set<MarketProjection> | string[];
    sort?: MarketSort | string;
    maxResults: number;
    locale?: string;
}
export default class ListMarketCatalogueRequest extends JsonRequest {
    private filter;
    private marketProjection?;
    private sort?;
    private maxResults;
    private locale?;
    constructor(options: IListMarketCatalogueRequestOptions);
    toJson(): IListMarketCatalogueRequestOptions;
    getFilter(): MarketFilter;
    setFilter(filter: MarketFilter): void;
    getMarketProjection(): Set<MarketProjection> | undefined;
    setMarketProjection(marketProjection: Set<MarketProjection>): void;
    getSort(): MarketSort | undefined;
    setSort(sort: MarketSort): void;
    getMaxResults(): number;
    setMaxResults(maxResults: number): void;
    getLocale(): string | undefined;
    setLocale(locale: string): void;
}
