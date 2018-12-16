/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroupType from '../sport/enum/MarketGroupType';
export default class RemoveDefaultExposureLimitForMarketGroupsRequest extends JsonRequest {
    private marketGroupType;
    constructor(marketGroupType?: MarketGroupType);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketGroupType(): MarketGroupType;
    setMarketGroupType(marketGroupType: MarketGroupType): void;
}
