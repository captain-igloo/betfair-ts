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
    private marketGroupType: MarketGroupType;
    private defaultLimit?: ExposureLimit;
    private groupLimits?: MarketGroupExposureLimit[];
    private blockedMarketGroups?: MarketGroupId[];

    constructor(options: IExposureLimitsForMarketGroupsOptions) {
        super();
        this.marketGroupType = this.fromJson(options.marketGroupType, MarketGroupType);
        this.defaultLimit = options.defaultLimit && this.fromJson(options.defaultLimit, ExposureLimit);
        if (options.groupLimits) {
            this.groupLimits = this.arrayFromJson(options.groupLimits, MarketGroupExposureLimit);
        }
        if (options.blockedMarketGroups) {
            this.blockedMarketGroups = this.arrayFromJson(options.blockedMarketGroups, MarketGroupId);
        }
    }

    public toJson(): IExposureLimitsForMarketGroupsOptions {
        const json: IExposureLimitsForMarketGroupsOptions = {
            marketGroupType: this.marketGroupType.getValue(),
        };
        if (this.defaultLimit) {
            json.defaultLimit = this.defaultLimit.toJson();
        }
        if (this.groupLimits && this.groupLimits.length > 0) {
            json.groupLimits = this.groupLimits.map((value) => value.toJson());
        }
        if (this.blockedMarketGroups && this.blockedMarketGroups.length > 0) {
            json.blockedMarketGroups = this.blockedMarketGroups.map((value) => value.toJson());
        }
        return json;
    }

    public getMarketGroupType(): MarketGroupType {
        return this.marketGroupType;
    }
    public setMarketGroupType(marketGroupType: MarketGroupType): void {
        this.marketGroupType = marketGroupType;
    }
    public getDefaultLimit(): ExposureLimit | undefined {
        return this.defaultLimit;
    }
    public setDefaultLimit(defaultLimit: ExposureLimit): void {
        this.defaultLimit = defaultLimit;
    }
    public getGroupLimits(): MarketGroupExposureLimit[] | undefined {
        return this.groupLimits;
    }
    public setGroupLimits(groupLimits: MarketGroupExposureLimit[]): void {
        this.groupLimits = groupLimits;
    }
    public getBlockedMarketGroups(): MarketGroupId[] | undefined {
        return this.blockedMarketGroups;
    }
    public setBlockedMarketGroups(blockedMarketGroups: MarketGroupId[]): void {
        this.blockedMarketGroups = blockedMarketGroups;
    }

}
