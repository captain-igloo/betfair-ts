/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroupType from '../sport/enum/MarketGroupType';
import MarketGroup, { IMarketGroupOptions } from '../sport/MarketGroup';
export interface IListExposureLimitsForMarketGroupsRequestOptions {
    marketGroupTypeFilter?: MarketGroupType | string;
    marketGroupFilter?: (MarketGroup | IMarketGroupOptions)[];
}
export default class ListExposureLimitsForMarketGroupsRequest extends JsonRequest {
    private marketGroupTypeFilter?;
    private marketGroupFilter?;
    constructor(options: IListExposureLimitsForMarketGroupsRequestOptions);
    toJson(): IListExposureLimitsForMarketGroupsRequestOptions;
    getMarketGroupTypeFilter(): MarketGroupType | undefined;
    setMarketGroupTypeFilter(marketGroupTypeFilter: MarketGroupType): void;
    getMarketGroupFilter(): MarketGroup[] | undefined;
    setMarketGroupFilter(marketGroupFilter: MarketGroup[]): void;
}
