/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import MarketProfitAndLoss from '../sport/MarketProfitAndLoss';

export default class ListMarketProfitAndLossResponse extends JsonResponse {
    private marketProfitAndLosses: MarketProfitAndLoss[];

    constructor(
        marketProfitAndLosses: MarketProfitAndLoss[] = [],
    ) {
        super();
        this.marketProfitAndLosses = marketProfitAndLosses;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.marketProfitAndLosses = json.map((marketProfitAndLossesJson: any) => {
                const element = new MarketProfitAndLoss();
                element.fromJson(marketProfitAndLossesJson);
                return element;
            });
        }
    }

    public toJson(): any {
        let json: any = {};
        if (this.marketProfitAndLosses.length > 0) {
            json.marketProfitAndLosses = this.marketProfitAndLosses.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketProfitAndLosses.length > 0;
    }

    public getMarketProfitAndLosses(): MarketProfitAndLoss[] {
        return this.marketProfitAndLosses;
    }
    public setMarketProfitAndLosses(marketProfitAndLosses: MarketProfitAndLoss[]): void {
        this.marketProfitAndLosses = marketProfitAndLosses;
    }

}
