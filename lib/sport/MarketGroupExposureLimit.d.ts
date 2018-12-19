/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import ExposureLimit from '../sport/ExposureLimit';
import MarketGroupId from '../sport/MarketGroupId';
export default class MarketGroupExposureLimit extends JsonMember {
    private groupId;
    private limit;
    constructor(groupId?: MarketGroupId, limit?: ExposureLimit);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getGroupId(): MarketGroupId;
    setGroupId(groupId: MarketGroupId): void;
    getLimit(): ExposureLimit;
    setLimit(limit: ExposureLimit): void;
}
