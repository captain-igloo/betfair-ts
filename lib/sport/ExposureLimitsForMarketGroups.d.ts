/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketGroupType from '../sport/enum/MarketGroupType';
import ExposureLimit, { IExposureLimitOptions } from '../sport/ExposureLimit';
import MarketGroupExposureLimit, { IMarketGroupExposureLimitOptions } from '../sport/MarketGroupExposureLimit';
import MarketGroupId, { IMarketGroupIdOptions } from '../sport/MarketGroupId';
export interface IExposureLimitsForMarketGroupsOptions {
    marketGroupType: MarketGroupType | string;
    defaultLimit?: ExposureLimit | IExposureLimitOptions;
    groupLimits?: Array<MarketGroupExposureLimit | IMarketGroupExposureLimitOptions>;
    blockedMarketGroups?: Array<MarketGroupId | IMarketGroupIdOptions>;
}
export default class ExposureLimitsForMarketGroups extends JsonMember {
    private marketGroupType;
    private defaultLimit?;
    private groupLimits?;
    private blockedMarketGroups?;
    constructor(options: IExposureLimitsForMarketGroupsOptions);
    toJson(): IExposureLimitsForMarketGroupsOptions;
    getMarketGroupType(): MarketGroupType;
    setMarketGroupType(marketGroupType: MarketGroupType): void;
    getDefaultLimit(): ExposureLimit | undefined;
    setDefaultLimit(defaultLimit: ExposureLimit): void;
    getGroupLimits(): MarketGroupExposureLimit[] | undefined;
    setGroupLimits(groupLimits: MarketGroupExposureLimit[]): void;
    getBlockedMarketGroups(): MarketGroupId[] | undefined;
    setBlockedMarketGroups(blockedMarketGroups: MarketGroupId[]): void;
}
