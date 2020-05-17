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
    private groupId: MarketGroupId;
    private limit: ExposureLimit;

    constructor(options: IMarketGroupExposureLimitOptions) {
        super();
        this.groupId = this.fromJson(options.groupId, MarketGroupId);
        this.limit = this.fromJson(options.limit, ExposureLimit);
    }

    public toJson(): IMarketGroupExposureLimitOptions {
        const json: IMarketGroupExposureLimitOptions = {
            groupId: this.groupId.toJson(),
            limit: this.limit.toJson(),
        };
        return json;
    }

    public getGroupId(): MarketGroupId {
        return this.groupId;
    }
    public setGroupId(groupId: MarketGroupId): void {
        this.groupId = groupId;
    }
    public getLimit(): ExposureLimit {
        return this.limit;
    }
    public setLimit(limit: ExposureLimit): void {
        this.limit = limit;
    }

}
