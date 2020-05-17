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
    private marketGroup;
    private limit;
    constructor(options: ISetExposureLimitForMarketGroupRequestOptions);
    toJson(): ISetExposureLimitForMarketGroupRequestOptions;
    getMarketGroup(): MarketGroup;
    setMarketGroup(marketGroup: MarketGroup): void;
    getLimit(): ExposureLimit;
    setLimit(limit: ExposureLimit): void;
}
