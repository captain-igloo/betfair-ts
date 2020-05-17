/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import MarketProfitAndLoss, { IMarketProfitAndLossOptions } from '../sport/MarketProfitAndLoss';

export interface IListMarketProfitAndLossResponseOptions {
    marketProfitAndLosses?: Array<MarketProfitAndLoss | IMarketProfitAndLossOptions>;
}

export default class ListMarketProfitAndLossResponse extends JsonResponse {
    private marketProfitAndLosses?: MarketProfitAndLoss[];

    constructor(options: Array<MarketProfitAndLoss | IMarketProfitAndLossOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketProfitAndLosses = this.arrayFromJson(options, MarketProfitAndLoss);
            }
        }
    }

    public toJson(): IListMarketProfitAndLossResponseOptions {
        throw new Error('not implemented');
    }

    public getMarketProfitAndLosses(): MarketProfitAndLoss[] | undefined {
        return this.marketProfitAndLosses;
    }
    public setMarketProfitAndLosses(marketProfitAndLosses: MarketProfitAndLoss[]): void {
        this.marketProfitAndLosses = marketProfitAndLosses;
    }

}
