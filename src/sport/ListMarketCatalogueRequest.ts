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
    private filter: MarketFilter;
    private marketProjection?: Set<MarketProjection>;
    private sort?: MarketSort;
    private maxResults: number;
    private locale?: string;

    constructor(options: IListMarketCatalogueRequestOptions) {
        super();
        this.filter = this.fromJson(options.filter, MarketFilter);
        this.marketProjection = options.marketProjection && this.setFromJson(options.marketProjection, MarketProjection);
        if (options.sort) {
            this.sort = this.fromJson(options.sort, MarketSort);
        }
        this.maxResults = options.maxResults;
        this.locale = options.locale;
    }

    public toJson(): IListMarketCatalogueRequestOptions {
        const json: IListMarketCatalogueRequestOptions = {
            filter: this.filter.toJson(),
            maxResults: this.maxResults,
        };
        if (this.marketProjection && this.marketProjection.size > 0) {
            json.marketProjection = this.setToJson(this.marketProjection);
        }
        if (this.sort) {
            json.sort = this.sort.getValue();
        }
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        return json;
    }

    public getFilter(): MarketFilter {
        return this.filter;
    }
    public setFilter(filter: MarketFilter): void {
        this.filter = filter;
    }
    public getMarketProjection(): Set<MarketProjection> | undefined {
        return this.marketProjection;
    }
    public setMarketProjection(marketProjection: Set<MarketProjection>): void {
        this.marketProjection = marketProjection;
    }
    public getSort(): MarketSort | undefined {
        return this.sort;
    }
    public setSort(sort: MarketSort): void {
        this.sort = sort;
    }
    public getMaxResults(): number {
        return this.maxResults;
    }
    public setMaxResults(maxResults: number): void {
        this.maxResults = maxResults;
    }
    public getLocale(): string | undefined {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }

}
