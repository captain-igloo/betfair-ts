/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketGroupType from '../sport/enum/MarketGroupType';
import MarketGroup, { IMarketGroupOptions } from '../sport/MarketGroup';

export interface IListExposureLimitsForMarketGroupsRequestOptions {
    marketGroupTypeFilter?: MarketGroupType | string;
    marketGroupFilter?: Array<MarketGroup | IMarketGroupOptions>;
}

export default class ListExposureLimitsForMarketGroupsRequest extends JsonRequest {
    private marketGroupTypeFilter?: MarketGroupType;
    private marketGroupFilter?: MarketGroup[];

    constructor(options: IListExposureLimitsForMarketGroupsRequestOptions) {
        super();
        if (options.marketGroupTypeFilter) {
            this.marketGroupTypeFilter = this.fromJson(options.marketGroupTypeFilter, MarketGroupType);
        }
        if (options.marketGroupFilter) {
            this.marketGroupFilter = this.arrayFromJson(options.marketGroupFilter, MarketGroup);
        }
    }

    public toJson(): IListExposureLimitsForMarketGroupsRequestOptions {
        const json: IListExposureLimitsForMarketGroupsRequestOptions = {
        };
        if (this.marketGroupTypeFilter) {
            json.marketGroupTypeFilter = this.marketGroupTypeFilter.getValue();
        }
        if (this.marketGroupFilter && this.marketGroupFilter.length > 0) {
            json.marketGroupFilter = this.marketGroupFilter.map((value) => value.toJson());
        }
        return json;
    }

    public getMarketGroupTypeFilter(): MarketGroupType | undefined {
        return this.marketGroupTypeFilter;
    }
    public setMarketGroupTypeFilter(marketGroupTypeFilter: MarketGroupType): void {
        this.marketGroupTypeFilter = marketGroupTypeFilter;
    }
    public getMarketGroupFilter(): MarketGroup[] | undefined {
        return this.marketGroupFilter;
    }
    public setMarketGroupFilter(marketGroupFilter: MarketGroup[]): void {
        this.marketGroupFilter = marketGroupFilter;
    }

}
