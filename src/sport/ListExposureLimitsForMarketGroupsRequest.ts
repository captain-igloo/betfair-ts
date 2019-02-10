/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketGroupType from '../sport/enum/MarketGroupType';
import MarketGroup from '../sport/MarketGroup';

export default class ListExposureLimitsForMarketGroupsRequest extends JsonRequest {
    private marketGroupTypeFilter: MarketGroupType;
    private marketGroupFilter: MarketGroup[];

    constructor(
        marketGroupTypeFilter: MarketGroupType = new MarketGroupType(),
        marketGroupFilter: MarketGroup[] = [],
    ) {
        super();
        this.marketGroupTypeFilter = marketGroupTypeFilter;
        this.marketGroupFilter = marketGroupFilter;
    }

    public fromJson(json: any): void {
        if ('marketGroupTypeFilter' in json) {
            this.marketGroupTypeFilter.setValue(json.marketGroupTypeFilter);
        }
        if ('marketGroupFilter' in json) {
            this.marketGroupFilter = json.marketGroupFilter.map((marketGroupFilterJson: any) => {
                const element = new MarketGroup();
                element.fromJson(marketGroupFilterJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketGroupTypeFilter.isValid()) {
            json.marketGroupTypeFilter = this.marketGroupTypeFilter.getValue();
        }
        if (this.marketGroupFilter.length > 0) {
            json.marketGroupFilter = this.marketGroupFilter.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getMarketGroupTypeFilter(): MarketGroupType {
        return this.marketGroupTypeFilter;
    }
    public setMarketGroupTypeFilter(marketGroupTypeFilter: MarketGroupType): void {
        this.marketGroupTypeFilter = marketGroupTypeFilter;
    }
    public getMarketGroupFilter(): MarketGroup[] {
        return this.marketGroupFilter;
    }
    public setMarketGroupFilter(marketGroupFilter: MarketGroup[]): void {
        this.marketGroupFilter = marketGroupFilter;
    }

}
