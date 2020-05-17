/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import TimeGranularity from '../sport/enum/TimeGranularity';
import MarketFilter, { IMarketFilterOptions } from '../sport/MarketFilter';

export interface IListTimeRangesRequestOptions {
    filter: MarketFilter | IMarketFilterOptions;
    granularity: TimeGranularity | string;
}

export default class ListTimeRangesRequest extends JsonRequest {
    private filter: MarketFilter;
    private granularity: TimeGranularity;

    constructor(options: IListTimeRangesRequestOptions) {
        super();
        this.filter = this.fromJson(options.filter, MarketFilter);
        this.granularity = this.fromJson(options.granularity, TimeGranularity);
    }

    public toJson(): IListTimeRangesRequestOptions {
        const json: IListTimeRangesRequestOptions = {
            filter: this.filter.toJson(),
            granularity: this.granularity.getValue(),
        };
        return json;
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
