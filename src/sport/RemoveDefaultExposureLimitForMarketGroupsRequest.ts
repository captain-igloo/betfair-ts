/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroupType from '../sport/enum/MarketGroupType';

export default class RemoveDefaultExposureLimitForMarketGroupsRequest extends JsonRequest {
    private marketGroupType: MarketGroupType;

    constructor(
        marketGroupType: MarketGroupType = new MarketGroupType(),
    ) {
        super();
        this.marketGroupType = marketGroupType;
    }

    public fromJson(json: any): void {
        if ('marketGroupType' in json) {
            this.marketGroupType.setValue(json.marketGroupType);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketGroupType.isValid()) {
            json.marketGroupType = this.marketGroupType;
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

}
