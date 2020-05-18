/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketProfitAndLoss, { IMarketProfitAndLossOptions } from '../sport/MarketProfitAndLoss';
export interface IListMarketProfitAndLossResponseOptions {
    marketProfitAndLosses?: (MarketProfitAndLoss | IMarketProfitAndLossOptions)[];
}
export default class ListMarketProfitAndLossResponse extends JsonResponse {
    private marketProfitAndLosses?;
    constructor(options: (MarketProfitAndLoss | IMarketProfitAndLossOptions)[]);
    toJson(): IListMarketProfitAndLossResponseOptions;
    getMarketProfitAndLosses(): MarketProfitAndLoss[] | undefined;
    setMarketProfitAndLosses(marketProfitAndLosses: MarketProfitAndLoss[]): void;
}
