/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketFilter from '../sport/MarketFilter';
import MarketProjection from '../sport/enum/MarketProjection';
import MarketSort from '../sport/enum/MarketSort';
export default class ListMarketCatalogueRequest extends JsonRequest {
    private filter;
    private marketProjection;
    private sort;
    private maxResults;
    private locale;
    constructor(filter?: MarketFilter, marketProjection?: Set<MarketProjection>, sort?: MarketSort, maxResults?: number | null, locale?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getFilter(): MarketFilter;
    setFilter(filter: MarketFilter): void;
    getMarketProjection(): Set<MarketProjection>;
    setMarketProjection(marketProjection: Set<MarketProjection>): void;
    getSort(): MarketSort;
    setSort(sort: MarketSort): void;
    getMaxResults(): number | null;
    setMaxResults(maxResults: number | null): void;
    getLocale(): string;
    setLocale(locale: string): void;
}
