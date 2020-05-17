/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketGroupType from '../sport/enum/MarketGroupType';
import ExposureLimit, { IExposureLimitOptions } from '../sport/ExposureLimit';

export interface ISetDefaultExposureLimitForMarketGroupsRequestOptions {
    marketGroupType: MarketGroupType | string;
    limit: ExposureLimit | IExposureLimitOptions;
}

export default class SetDefaultExposureLimitForMarketGroupsRequest extends JsonRequest {
    private marketGroupType: MarketGroupType;
    private limit: ExposureLimit;

    constructor(options: ISetDefaultExposureLimitForMarketGroupsRequestOptions) {
        super();
        this.marketGroupType = this.fromJson(options.marketGroupType, MarketGroupType);
        this.limit = this.fromJson(options.limit, ExposureLimit);
    }

    public toJson(): ISetDefaultExposureLimitForMarketGroupsRequestOptions {
        const json: ISetDefaultExposureLimitForMarketGroupsRequestOptions = {
            marketGroupType: this.marketGroupType.getValue(),
            limit: this.limit.toJson(),
        };
        return json;
    }

    public getMarketGroupType(): MarketGroupType {
        return this.marketGroupType;
    }
    public setMarketGroupType(marketGroupType: MarketGroupType): void {
        this.marketGroupType = marketGroupType;
    }
    public getLimit(): ExposureLimit {
        return this.limit;
    }
    public setLimit(limit: ExposureLimit): void {
        this.limit = limit;
    }

}
