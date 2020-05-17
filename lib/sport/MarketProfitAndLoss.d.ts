/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import RunnerProfitAndLoss, { IRunnerProfitAndLossOptions } from '../sport/RunnerProfitAndLoss';
export interface IMarketProfitAndLossOptions {
    marketId?: string;
    commissionApplied?: number;
    profitAndLosses?: Array<RunnerProfitAndLoss | IRunnerProfitAndLossOptions>;
}
export default class MarketProfitAndLoss extends JsonMember {
    private marketId?;
    private commissionApplied?;
    private profitAndLosses?;
    constructor(options: IMarketProfitAndLossOptions);
    toJson(): IMarketProfitAndLossOptions;
    getMarketId(): string | undefined;
    setMarketId(marketId: string): void;
    getCommissionApplied(): number | undefined;
    setCommissionApplied(commissionApplied: number): void;
    getProfitAndLosses(): RunnerProfitAndLoss[] | undefined;
    setProfitAndLosses(profitAndLosses: RunnerProfitAndLoss[]): void;
}
