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
    private marketId?: string;
    private commissionApplied?: number;
    private profitAndLosses?: RunnerProfitAndLoss[];

    constructor(options: IMarketProfitAndLossOptions) {
        super();
        this.marketId = options.marketId;
        this.commissionApplied = options.commissionApplied;
        if (options.profitAndLosses) {
            this.profitAndLosses = this.arrayFromJson(options.profitAndLosses, RunnerProfitAndLoss);
        }
    }

    public toJson(): IMarketProfitAndLossOptions {
        const json: IMarketProfitAndLossOptions = {
        };
        if (typeof this.marketId !== 'undefined') {
            json.marketId = this.marketId;
        }
        if (typeof this.commissionApplied !== 'undefined') {
            json.commissionApplied = this.commissionApplied;
        }
        if (this.profitAndLosses && this.profitAndLosses.length > 0) {
            json.profitAndLosses = this.profitAndLosses.map((value) => value.toJson());
        }
        return json;
    }

    public getMarketId(): string | undefined {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getCommissionApplied(): number | undefined {
        return this.commissionApplied;
    }
    public setCommissionApplied(commissionApplied: number): void {
        this.commissionApplied = commissionApplied;
    }
    public getProfitAndLosses(): RunnerProfitAndLoss[] | undefined {
        return this.profitAndLosses;
    }
    public setProfitAndLosses(profitAndLosses: RunnerProfitAndLoss[]): void {
        this.profitAndLosses = profitAndLosses;
    }

}
