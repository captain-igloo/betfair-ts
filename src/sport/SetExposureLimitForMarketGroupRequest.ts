/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import ExposureLimit from '../sport/ExposureLimit';
import MarketGroup from '../sport/MarketGroup';

export default class SetExposureLimitForMarketGroupRequest extends JsonRequest {
    private marketGroup: MarketGroup;
    private limit: ExposureLimit;

    constructor(
        marketGroup: MarketGroup = new MarketGroup(),
        limit: ExposureLimit = new ExposureLimit(),
    ) {
        super();
        this.marketGroup = marketGroup;
        this.limit = limit;
    }

    public fromJson(json: any): void {
        if ('marketGroup' in json) {
            this.marketGroup.fromJson(json.marketGroup);
        }
        if ('limit' in json) {
            this.limit.fromJson(json.limit);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketGroup.isValid()) {
            json.marketGroup = this.marketGroup.toJson();
        }
        if (this.limit.isValid()) {
            json.limit = this.limit.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketGroup.isValid() &&
            this.limit.isValid();
    }

    public getMarketGroup(): MarketGroup {
        return this.marketGroup;
    }
    public setMarketGroup(marketGroup: MarketGroup): void {
        this.marketGroup = marketGroup;
    }
    public getLimit(): ExposureLimit {
        return this.limit;
    }
    public setLimit(limit: ExposureLimit): void {
        this.limit = limit;
    }

}
