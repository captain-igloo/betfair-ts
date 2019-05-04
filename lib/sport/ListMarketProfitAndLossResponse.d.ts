/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketProfitAndLoss from '../sport/MarketProfitAndLoss';
export default class ListMarketProfitAndLossResponse extends JsonResponse {
    private marketProfitAndLosses;
    constructor(marketProfitAndLosses?: MarketProfitAndLoss[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketProfitAndLosses(): MarketProfitAndLoss[];
    setMarketProfitAndLosses(marketProfitAndLosses: MarketProfitAndLoss[]): void;
}
