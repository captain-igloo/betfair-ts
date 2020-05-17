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
    private bestPricesDepth?;
    private rollupModel?;
    private rollupLimit?;
    private rollupLiabilityThreshold?;
    private rollupLiabilityFactor?;
    constructor(options: IExBestOffersOverridesOptions);
    toJson(): IExBestOffersOverridesOptions;
    getBestPricesDepth(): number | undefined;
    setBestPricesDepth(bestPricesDepth: number): void;
    getRollupModel(): RollupModel | undefined;
    setRollupModel(rollupModel: RollupModel): void;
    getRollupLimit(): number | undefined;
    setRollupLimit(rollupLimit: number): void;
    getRollupLiabilityThreshold(): number | undefined;
    setRollupLiabilityThreshold(rollupLiabilityThreshold: number): void;
    getRollupLiabilityFactor(): number | undefined;
    setRollupLiabilityFactor(rollupLiabilityFactor: number): void;
}
