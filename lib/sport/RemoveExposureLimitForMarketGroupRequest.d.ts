/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroup, { IMarketGroupOptions } from '../sport/MarketGroup';
export interface IRemoveExposureLimitForMarketGroupRequestOptions {
    marketGroup: MarketGroup | IMarketGroupOptions;
}
export default class RemoveExposureLimitForMarketGroupRequest extends JsonRequest {
    private marketGroup;
    constructor(options: IRemoveExposureLimitForMarketGroupRequestOptions);
    toJson(): IRemoveExposureLimitForMarketGroupRequestOptions;
    getMarketGroup(): MarketGroup;
    setMarketGroup(marketGroup: MarketGroup): void;
}
