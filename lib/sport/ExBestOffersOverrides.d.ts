/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import RollupModel from '../sport/enum/RollupModel';
export default class ExBestOffersOverrides extends JsonMember {
    private bestPricesDepth;
    private rollupModel;
    private rollupLimit;
    private rollupLiabilityThreshold;
    private rollupLiabilityFactor;
    constructor(bestPricesDepth?: number | null, rollupModel?: RollupModel, rollupLimit?: number | null, rollupLiabilityThreshold?: number | null, rollupLiabilityFactor?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBestPricesDepth(): number | null;
    setBestPricesDepth(bestPricesDepth: number | null): void;
    getRollupModel(): RollupModel;
    setRollupModel(rollupModel: RollupModel): void;
    getRollupLimit(): number | null;
    setRollupLimit(rollupLimit: number | null): void;
    getRollupLiabilityThreshold(): number | null;
    setRollupLiabilityThreshold(rollupLiabilityThreshold: number | null): void;
    getRollupLiabilityFactor(): number | null;
    setRollupLiabilityFactor(rollupLiabilityFactor: number | null): void;
}
