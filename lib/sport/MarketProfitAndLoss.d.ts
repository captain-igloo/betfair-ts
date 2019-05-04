/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import RunnerProfitAndLoss from '../sport/RunnerProfitAndLoss';
export default class MarketProfitAndLoss extends JsonMember {
    private marketId;
    private commissionApplied;
    private profitAndLosses;
    constructor(marketId?: string, commissionApplied?: number | null, profitAndLosses?: RunnerProfitAndLoss[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getCommissionApplied(): number | null;
    setCommissionApplied(commissionApplied: number | null): void;
    getProfitAndLosses(): RunnerProfitAndLoss[];
    setProfitAndLosses(profitAndLosses: RunnerProfitAndLoss[]): void;
}
