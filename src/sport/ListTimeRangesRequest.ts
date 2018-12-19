/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import TimeGranularity from '../sport/enum/TimeGranularity';
import MarketFilter from '../sport/MarketFilter';

export default class ListTimeRangesRequest extends JsonRequest {
    private filter: MarketFilter;
    private granularity: TimeGranularity;

    constructor(
        filter: MarketFilter = new MarketFilter(),
        granularity: TimeGranularity = new TimeGranularity(),
    ) {
        super();
        this.filter = filter;
        this.granularity = granularity;
    }

    public fromJson(json: any): void {
        if ('filter' in json) {
            this.filter.fromJson(json.filter);
        }
        if ('granularity' in json) {
            this.granularity.setValue(json.granularity);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.filter.isValid()) {
            json.filter = this.filter.toJson();
        }
        if (this.granularity.isValid()) {
            json.granularity = this.granularity;
        }
        return json;
    }

    public isValid(): boolean {
        return this.filter.isValid() &&
            this.granularity.isValid();
    }

    public getFilter(): MarketFilter {
        return this.filter;
    }
    public setFilter(filter: MarketFilter): void {
        this.filter = filter;
    }
    public getGranularity(): TimeGranularity {
        return this.granularity;
    }
    public setGranularity(granularity: TimeGranularity): void {
        this.granularity = granularity;
    }

}
