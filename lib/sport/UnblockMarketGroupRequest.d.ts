/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroup, { IMarketGroupOptions } from '../sport/MarketGroup';
export interface IUnblockMarketGroupRequestOptions {
    marketGroup: MarketGroup | IMarketGroupOptions;
}
export default class UnblockMarketGroupRequest extends JsonRequest {
    private marketGroup;
    constructor(options: IUnblockMarketGroupRequestOptions);
    toJson(): IUnblockMarketGroupRequestOptions;
    getMarketGroup(): MarketGroup;
    setMarketGroup(marketGroup: MarketGroup): void;
}
