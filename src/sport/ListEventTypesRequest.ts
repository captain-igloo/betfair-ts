/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketFilter from '../sport/MarketFilter';

export default class ListEventTypesRequest extends JsonRequest {
    private filter: MarketFilter;
    private locale: string;

    constructor(
        filter: MarketFilter = new MarketFilter(),
        locale: string = '',
    ) {
        super();
        this.filter = filter;
        this.locale = locale;
    }

    public fromJson(json: any): void {
        if ('filter' in json) {
            this.filter.fromJson(json.filter);
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
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        return json;
    }

    public isValid(): boolean {
        return this.filter.isValid();
    }

    public getFilter(): MarketFilter {
        return this.filter;
    }
    public setFilter(filter: MarketFilter): void {
        this.filter = filter;
    }
    public getLocale(): string {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }

}
