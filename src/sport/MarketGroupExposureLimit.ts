/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import ExposureLimit from '../sport/ExposureLimit';
import MarketGroupId from '../sport/MarketGroupId';

export default class MarketGroupExposureLimit extends JsonMember {
    private groupId: MarketGroupId;
    private limit: ExposureLimit;

    constructor(
        groupId: MarketGroupId = new MarketGroupId(),
        limit: ExposureLimit = new ExposureLimit(),
    ) {
        super();
        this.groupId = groupId;
        this.limit = limit;
    }

    public fromJson(json: any): void {
        if ('groupId' in json) {
            this.groupId.fromJson(json.groupId);
        }
        if ('limit' in json) {
            this.limit.fromJson(json.limit);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.groupId.isValid()) {
            json.groupId = this.groupId.toJson();
        }
        if (this.limit.isValid()) {
            json.limit = this.limit.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.groupId.isValid() &&
            this.limit.isValid();
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
