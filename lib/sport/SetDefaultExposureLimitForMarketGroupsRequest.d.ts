/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroupType from '../sport/enum/MarketGroupType';
import ExposureLimit from '../sport/ExposureLimit';
export default class SetDefaultExposureLimitForMarketGroupsRequest extends JsonRequest {
    private marketGroupType;
    private limit;
    constructor(marketGroupType?: MarketGroupType, limit?: ExposureLimit);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketGroupType(): MarketGroupType;
    setMarketGroupType(marketGroupType: MarketGroupType): void;
    getLimit(): ExposureLimit;
    setLimit(limit: ExposureLimit): void;
}
