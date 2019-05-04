/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroupType from '../sport/enum/MarketGroupType';
import MarketGroup from '../sport/MarketGroup';
export default class ListExposureLimitsForMarketGroupsRequest extends JsonRequest {
    private marketGroupTypeFilter;
    private marketGroupFilter;
    constructor(marketGroupTypeFilter?: MarketGroupType, marketGroupFilter?: MarketGroup[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketGroupTypeFilter(): MarketGroupType;
    setMarketGroupTypeFilter(marketGroupTypeFilter: MarketGroupType): void;
    getMarketGroupFilter(): MarketGroup[];
    setMarketGroupFilter(marketGroupFilter: MarketGroup[]): void;
}
