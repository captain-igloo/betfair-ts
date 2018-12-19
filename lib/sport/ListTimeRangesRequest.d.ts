/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import TimeGranularity from '../sport/enum/TimeGranularity';
import MarketFilter from '../sport/MarketFilter';
export default class ListTimeRangesRequest extends JsonRequest {
    private filter;
    private granularity;
    constructor(filter?: MarketFilter, granularity?: TimeGranularity);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getFilter(): MarketFilter;
    setFilter(filter: MarketFilter): void;
    getGranularity(): TimeGranularity;
    setGranularity(granularity: TimeGranularity): void;
}
