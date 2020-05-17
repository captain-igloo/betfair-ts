/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketGroup, { IMarketGroupOptions } from '../sport/MarketGroup';

export interface IUnblockMarketGroupRequestOptions {
    marketGroup: MarketGroup | IMarketGroupOptions;
}

export default class UnblockMarketGroupRequest extends JsonRequest {
    private marketGroup: MarketGroup;

    constructor(options: IUnblockMarketGroupRequestOptions) {
        super();
        this.marketGroup = this.fromJson(options.marketGroup, MarketGroup);
    }

    public toJson(): IUnblockMarketGroupRequestOptions {
        const json: IUnblockMarketGroupRequestOptions = {
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
