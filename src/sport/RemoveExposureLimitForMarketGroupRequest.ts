/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketGroup from '../sport/MarketGroup';

export default class RemoveExposureLimitForMarketGroupRequest extends JsonRequest {
    private marketGroup: MarketGroup;

    constructor(
        marketGroup: MarketGroup = new MarketGroup(),
    ) {
        super();
        this.marketGroup = marketGroup;
    }

    public fromJson(json: any): void {
        if ('marketGroup' in json) {
            this.marketGroup.fromJson(json.marketGroup);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketGroup.isValid()) {
            json.marketGroup = this.marketGroup.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketGroup.isValid();
    }

    public getMarketGroup(): MarketGroup {
        return this.marketGroup;
    }
    public setMarketGroup(marketGroup: MarketGroup): void {
        this.marketGroup = marketGroup;
    }

}
