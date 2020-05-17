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
    private marketGroupType;
    private limit;
    constructor(options: ISetDefaultExposureLimitForMarketGroupsRequestOptions);
    toJson(): ISetDefaultExposureLimitForMarketGroupsRequestOptions;
    getMarketGroupType(): MarketGroupType;
    setMarketGroupType(marketGroupType: MarketGroupType): void;
    getLimit(): ExposureLimit;
    setLimit(limit: ExposureLimit): void;
}
