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
    private filter: MarketFilter;
    private locale?: string;

    constructor(options: IListEventsRequestOptions) {
        super();
        this.filter = this.fromJson(options.filter, MarketFilter);
        this.locale = options.locale;
    }

    public toJson(): IListEventsRequestOptions {
        const json: IListEventsRequestOptions = {
            filter: this.filter.toJson(),
        };
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
    public getLocale(): string | undefined {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }

}
