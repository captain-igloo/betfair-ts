/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import ExposureLimit, { IExposureLimitOptions } from '../sport/ExposureLimit';
import MarketGroup, { IMarketGroupOptions } from '../sport/MarketGroup';

export interface ISetExposureLimitForMarketGroupRequestOptions {
    marketGroup: MarketGroup | IMarketGroupOptions;
    limit: ExposureLimit | IExposureLimitOptions;
}

export default class SetExposureLimitForMarketGroupRequest extends JsonRequest {
    private marketGroup: MarketGroup;
    private limit: ExposureLimit;

    constructor(options: ISetExposureLimitForMarketGroupRequestOptions) {
        super();
        this.marketGroup = this.fromJson(options.marketGroup, MarketGroup);
        this.limit = this.fromJson(options.limit, ExposureLimit);
    }

    public toJson(): ISetExposureLimitForMarketGroupRequestOptions {
        const json: ISetExposureLimitForMarketGroupRequestOptions = {
            marketGroup: this.marketGroup.toJson(),
            limit: this.limit.toJson(),
        };
        return json;
    }

    public getMarketGroup(): MarketGroup {
        return this.marketGroup;
    }
    public setMarketGroup(marketGroup: MarketGroup): void {
        this.marketGroup = marketGroup;
    }
    public getLimit(): ExposureLimit {
        return this.limit;
    }
    public setLimit(limit: ExposureLimit): void {
        this.limit = limit;
    }

}
