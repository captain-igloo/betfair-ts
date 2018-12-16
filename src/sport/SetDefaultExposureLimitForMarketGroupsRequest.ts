/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroupType from '../sport/enum/MarketGroupType';
import ExposureLimit from '../sport/ExposureLimit';

export default class SetDefaultExposureLimitForMarketGroupsRequest extends JsonRequest {
    private marketGroupType: MarketGroupType;
    private limit: ExposureLimit;

    constructor(
        marketGroupType: MarketGroupType = new MarketGroupType(),
        limit: ExposureLimit = new ExposureLimit(),
    ) {
        super();
        this.marketGroupType = marketGroupType;
        this.limit = limit;
    }

    public fromJson(json: any): void {
        if ('marketGroupType' in json) {
            this.marketGroupType.setValue(json.marketGroupType);
        }
        if ('limit' in json) {
            this.limit.fromJson(json.limit);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketGroupType.isValid()) {
            json.marketGroupType = this.marketGroupType;
        }
        if (this.limit.isValid()) {
            json.limit = this.limit.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketGroupType.isValid() &&
            this.limit.isValid();
    }

    public getMarketGroupType(): MarketGroupType {
        return this.marketGroupType;
    }
    public setMarketGroupType(marketGroupType: MarketGroupType): void {
        this.marketGroupType = marketGroupType;
    }
    public getLimit(): ExposureLimit {
        return this.limit;
    }
    public setLimit(limit: ExposureLimit): void {
        this.limit = limit;
    }

}
