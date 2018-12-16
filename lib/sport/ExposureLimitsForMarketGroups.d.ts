/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketGroupType from '../sport/enum/MarketGroupType';
import ExposureLimit from '../sport/ExposureLimit';
import MarketGroupExposureLimit from '../sport/MarketGroupExposureLimit';
import MarketGroupId from '../sport/MarketGroupId';
export default class ExposureLimitsForMarketGroups extends JsonMember {
    private marketGroupType;
    private defaultLimit;
    private groupLimits;
    private blockedMarketGroups;
    constructor(marketGroupType?: MarketGroupType, defaultLimit?: ExposureLimit, groupLimits?: MarketGroupExposureLimit[], blockedMarketGroups?: MarketGroupId[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketGroupType(): MarketGroupType;
    setMarketGroupType(marketGroupType: MarketGroupType): void;
    getDefaultLimit(): ExposureLimit;
    setDefaultLimit(defaultLimit: ExposureLimit): void;
    getGroupLimits(): MarketGroupExposureLimit[];
    setGroupLimits(groupLimits: MarketGroupExposureLimit[]): void;
    getBlockedMarketGroups(): MarketGroupId[];
    setBlockedMarketGroups(blockedMarketGroups: MarketGroupId[]): void;
}
