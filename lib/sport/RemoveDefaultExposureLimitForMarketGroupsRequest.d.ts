/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroupType from '../sport/enum/MarketGroupType';
export interface IRemoveDefaultExposureLimitForMarketGroupsRequestOptions {
    marketGroupType: MarketGroupType | string;
}
export default class RemoveDefaultExposureLimitForMarketGroupsRequest extends JsonRequest {
    private marketGroupType;
    constructor(options: IRemoveDefaultExposureLimitForMarketGroupsRequestOptions);
    toJson(): IRemoveDefaultExposureLimitForMarketGroupsRequestOptions;
    getMarketGroupType(): MarketGroupType;
    setMarketGroupType(marketGroupType: MarketGroupType): void;
}
