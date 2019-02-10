/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import MarketGroupType from '../sport/enum/MarketGroupType';
import ExposureLimit from '../sport/ExposureLimit';
import MarketGroupExposureLimit from '../sport/MarketGroupExposureLimit';
import MarketGroupId from '../sport/MarketGroupId';

export default class ExposureLimitsForMarketGroups extends JsonMember {
    private marketGroupType: MarketGroupType;
    private defaultLimit: ExposureLimit;
    private groupLimits: MarketGroupExposureLimit[];
    private blockedMarketGroups: MarketGroupId[];

    constructor(
        marketGroupType: MarketGroupType = new MarketGroupType(),
        defaultLimit: ExposureLimit = new ExposureLimit(),
        groupLimits: MarketGroupExposureLimit[] = [],
        blockedMarketGroups: MarketGroupId[] = [],
    ) {
        super();
        this.marketGroupType = marketGroupType;
        this.defaultLimit = defaultLimit;
        this.groupLimits = groupLimits;
        this.blockedMarketGroups = blockedMarketGroups;
    }

    public fromJson(json: any): void {
        if ('marketGroupType' in json) {
            this.marketGroupType.setValue(json.marketGroupType);
        }
        if ('defaultLimit' in json) {
            this.defaultLimit.fromJson(json.defaultLimit);
        }
        if ('groupLimits' in json) {
            this.groupLimits = json.groupLimits.map((groupLimitsJson: any) => {
                const element = new MarketGroupExposureLimit();
                element.fromJson(groupLimitsJson);
                return element;
            });
        }
        if ('blockedMarketGroups' in json) {
            this.blockedMarketGroups = json.blockedMarketGroups.map((blockedMarketGroupsJson: any) => {
                const element = new MarketGroupId();
                element.fromJson(blockedMarketGroupsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketGroupType.isValid()) {
            json.marketGroupType = this.marketGroupType.getValue();
        }
        if (this.defaultLimit.isValid()) {
            json.defaultLimit = this.defaultLimit.toJson();
        }
        if (this.groupLimits.length > 0) {
            json.groupLimits = this.groupLimits.map((value) => value.toJson());
        }
        if (this.blockedMarketGroups.length > 0) {
            json.blockedMarketGroups = this.blockedMarketGroups.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketGroupType.isValid();
    }

    public getMarketGroupType(): MarketGroupType {
        return this.marketGroupType;
    }
    public setMarketGroupType(marketGroupType: MarketGroupType): void {
        this.marketGroupType = marketGroupType;
    }
    public getDefaultLimit(): ExposureLimit {
        return this.defaultLimit;
    }
    public setDefaultLimit(defaultLimit: ExposureLimit): void {
        this.defaultLimit = defaultLimit;
    }
    public getGroupLimits(): MarketGroupExposureLimit[] {
        return this.groupLimits;
    }
    public setGroupLimits(groupLimits: MarketGroupExposureLimit[]): void {
        this.groupLimits = groupLimits;
    }
    public getBlockedMarketGroups(): MarketGroupId[] {
        return this.blockedMarketGroups;
    }
    public setBlockedMarketGroups(blockedMarketGroups: MarketGroupId[]): void {
        this.blockedMarketGroups = blockedMarketGroups;
    }

}
