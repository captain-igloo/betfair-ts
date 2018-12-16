/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import RunnerProfitAndLoss from '../sport/RunnerProfitAndLoss';

export default class MarketProfitAndLoss extends JsonMember {
    private marketId: string;
    private commissionApplied: number | null;
    private profitAndLosses: RunnerProfitAndLoss[];

    constructor(
        marketId: string = '',
        commissionApplied: number | null = null,
        profitAndLosses: RunnerProfitAndLoss[] = [],
    ) {
        super();
        this.marketId = marketId;
        this.commissionApplied = commissionApplied;
        this.profitAndLosses = profitAndLosses;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('commissionApplied' in json) {
            this.commissionApplied = json.commissionApplied;
        }
        if ('profitAndLosses' in json) {
            this.profitAndLosses = json.profitAndLosses.map((profitAndLossesJson: any) => {
                const element = new RunnerProfitAndLoss();
                element.fromJson(profitAndLossesJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.commissionApplied !== null) {
            json.commissionApplied = this.commissionApplied;
        }
        if (this.profitAndLosses.length > 0) {
            json.profitAndLosses = this.profitAndLosses.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getCommissionApplied(): number | null {
        return this.commissionApplied;
    }
    public setCommissionApplied(commissionApplied: number | null): void {
        this.commissionApplied = commissionApplied;
    }
    public getProfitAndLosses(): RunnerProfitAndLoss[] {
        return this.profitAndLosses;
    }
    public setProfitAndLosses(profitAndLosses: RunnerProfitAndLoss[]): void {
        this.profitAndLosses = profitAndLosses;
    }

}
