/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import RollupModel from '../sport/enum/RollupModel';

export interface IExBestOffersOverridesOptions {
    bestPricesDepth?: number;
    rollupModel?: RollupModel | string;
    rollupLimit?: number;
    rollupLiabilityThreshold?: number;
    rollupLiabilityFactor?: number;
}

export default class ExBestOffersOverrides extends JsonMember {
    private bestPricesDepth?: number;
    private rollupModel?: RollupModel;
    private rollupLimit?: number;
    private rollupLiabilityThreshold?: number;
    private rollupLiabilityFactor?: number;

    constructor(options: IExBestOffersOverridesOptions) {
        super();
        this.bestPricesDepth = options.bestPricesDepth;
        if (options.rollupModel) {
            this.rollupModel = this.fromJson(options.rollupModel, RollupModel);
        }
        this.rollupLimit = options.rollupLimit;
        this.rollupLiabilityThreshold = options.rollupLiabilityThreshold;
        this.rollupLiabilityFactor = options.rollupLiabilityFactor;
    }

    public toJson(): IExBestOffersOverridesOptions {
        const json: IExBestOffersOverridesOptions = {
        };
        if (typeof this.bestPricesDepth !== 'undefined') {
            json.bestPricesDepth = this.bestPricesDepth;
        }
        if (this.rollupModel) {
            json.rollupModel = this.rollupModel.getValue();
        }
        if (typeof this.rollupLimit !== 'undefined') {
            json.rollupLimit = this.rollupLimit;
        }
        if (typeof this.rollupLiabilityThreshold !== 'undefined') {
            json.rollupLiabilityThreshold = this.rollupLiabilityThreshold;
        }
        if (typeof this.rollupLiabilityFactor !== 'undefined') {
            json.rollupLiabilityFactor = this.rollupLiabilityFactor;
        }
        return json;
    }

    public getBestPricesDepth(): number | undefined {
        return this.bestPricesDepth;
    }
    public setBestPricesDepth(bestPricesDepth: number): void {
        this.bestPricesDepth = bestPricesDepth;
    }
    public getRollupModel(): RollupModel | undefined {
        return this.rollupModel;
    }
    public setRollupModel(rollupModel: RollupModel): void {
        this.rollupModel = rollupModel;
    }
    public getRollupLimit(): number | undefined {
        return this.rollupLimit;
    }
    public setRollupLimit(rollupLimit: number): void {
        this.rollupLimit = rollupLimit;
    }
    public getRollupLiabilityThreshold(): number | undefined {
        return this.rollupLiabilityThreshold;
    }
    public setRollupLiabilityThreshold(rollupLiabilityThreshold: number): void {
        this.rollupLiabilityThreshold = rollupLiabilityThreshold;
    }
    public getRollupLiabilityFactor(): number | undefined {
        return this.rollupLiabilityFactor;
    }
    public setRollupLiabilityFactor(rollupLiabilityFactor: number): void {
        this.rollupLiabilityFactor = rollupLiabilityFactor;
    }

}
