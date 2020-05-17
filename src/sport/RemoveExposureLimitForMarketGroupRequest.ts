/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketGroup, { IMarketGroupOptions } from '../sport/MarketGroup';

export interface IRemoveExposureLimitForMarketGroupRequestOptions {
    marketGroup: MarketGroup | IMarketGroupOptions;
}

export default class RemoveExposureLimitForMarketGroupRequest extends JsonRequest {
    private marketGroup: MarketGroup;

    constructor(options: IRemoveExposureLimitForMarketGroupRequestOptions) {
        super();
        this.marketGroup = this.fromJson(options.marketGroup, MarketGroup);
    }

    public toJson(): IRemoveExposureLimitForMarketGroupRequestOptions {
        const json: IRemoveExposureLimitForMarketGroupRequestOptions = {
            marketGroup: this.marketGroup.toJson(),
        };
        return json;
    }

    public getMarketGroup(): MarketGroup {
        return this.marketGroup;
    }
    public setMarketGroup(marketGroup: MarketGroup): void {
        this.marketGroup = marketGroup;
    }

}
