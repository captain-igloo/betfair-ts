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
    private filter;
    private granularity;
    constructor(options: IListTimeRangesRequestOptions);
    toJson(): IListTimeRangesRequestOptions;
    getFilter(): MarketFilter;
    setFilter(filter: MarketFilter): void;
    getGranularity(): TimeGranularity;
    setGranularity(granularity: TimeGranularity): void;
}
