/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroup from '../sport/MarketGroup';
export default class RemoveExposureLimitForMarketGroupRequest extends JsonRequest {
    private marketGroup;
    constructor(marketGroup?: MarketGroup);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketGroup(): MarketGroup;
    setMarketGroup(marketGroup: MarketGroup): void;
}
