/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketGroupType from '../sport/enum/MarketGroupType';

export interface IRemoveDefaultExposureLimitForMarketGroupsRequestOptions {
    marketGroupType: MarketGroupType | string;
}

export default class RemoveDefaultExposureLimitForMarketGroupsRequest extends JsonRequest {
    private marketGroupType: MarketGroupType;

    constructor(options: IRemoveDefaultExposureLimitForMarketGroupsRequestOptions) {
        super();
        this.marketGroupType = this.fromJson(options.marketGroupType, MarketGroupType);
    }

    public toJson(): IRemoveDefaultExposureLimitForMarketGroupsRequestOptions {
        const json: IRemoveDefaultExposureLimitForMarketGroupsRequestOptions = {
            marketGroupType: this.marketGroupType.getValue(),
        };
        return json;
    }

    public getMarketGroupType(): MarketGroupType {
        return this.marketGroupType;
    }
    public setMarketGroupType(marketGroupType: MarketGroupType): void {
        this.marketGroupType = marketGroupType;
    }

}
