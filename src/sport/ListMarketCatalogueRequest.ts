/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketProjection from '../sport/enum/MarketProjection';
import MarketSort from '../sport/enum/MarketSort';
import MarketFilter from '../sport/MarketFilter';

export default class ListMarketCatalogueRequest extends JsonRequest {
    private filter: MarketFilter;
    private marketProjection: Set<MarketProjection>;
    private sort: MarketSort;
    private maxResults: number | null;
    private locale: string;

    constructor(
        filter: MarketFilter = new MarketFilter(),
        marketProjection: Set<MarketProjection> = new Set(),
        sort: MarketSort = new MarketSort(),
        maxResults: number | null = null,
        locale: string = '',
    ) {
        super();
        this.filter = filter;
        this.marketProjection = marketProjection;
        this.sort = sort;
        this.maxResults = maxResults;
        this.locale = locale;
    }

    public fromJson(json: any): void {
        if ('filter' in json) {
            this.filter.fromJson(json.filter);
        }
        if ('marketProjection' in json) {
            this.marketProjection = json.marketProjection;
        }
        if ('sort' in json) {
            this.sort.setValue(json.sort);
        }
        if ('maxResults' in json) {
            this.maxResults = json.maxResults;
        }
        if ('locale' in json) {
            this.locale = json.locale;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.filter.isValid()) {
            json.filter = this.filter.toJson();
        }
        if (this.marketProjection.size > 0) {
            json.marketProjection = this.marketProjection;
        }
        if (this.sort.isValid()) {
            json.sort = this.sort;
        }
        if (this.maxResults !== null) {
            json.maxResults = this.maxResults;
        }
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        return json;
    }

    public isValid(): boolean {
        return this.filter.isValid() &&
            this.maxResults !== null;
    }

    public getFilter(): MarketFilter {
        return this.filter;
    }
    public setFilter(filter: MarketFilter): void {
        this.filter = filter;
    }
    public getMarketProjection(): Set<MarketProjection> {
        return this.marketProjection;
    }
    public setMarketProjection(marketProjection: Set<MarketProjection>): void {
        this.marketProjection = marketProjection;
    }
    public getSort(): MarketSort {
        return this.sort;
    }
    public setSort(sort: MarketSort): void {
        this.sort = sort;
    }
    public getMaxResults(): number | null {
        return this.maxResults;
    }
    public setMaxResults(maxResults: number | null): void {
        this.maxResults = maxResults;
    }
    public getLocale(): string {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }

}
