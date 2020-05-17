/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import ExposureLimit, { IExposureLimitOptions } from '../sport/ExposureLimit';
import MarketGroupId, { IMarketGroupIdOptions } from '../sport/MarketGroupId';
export interface IMarketGroupExposureLimitOptions {
    groupId: MarketGroupId | IMarketGroupIdOptions;
    limit: ExposureLimit | IExposureLimitOptions;
}
export default class MarketGroupExposureLimit extends JsonMember {
    private groupId;
    private limit;
    constructor(options: IMarketGroupExposureLimitOptions);
    toJson(): IMarketGroupExposureLimitOptions;
    getGroupId(): MarketGroupId;
    setGroupId(groupId: MarketGroupId): void;
    getLimit(): ExposureLimit;
    setLimit(limit: ExposureLimit): void;
}
