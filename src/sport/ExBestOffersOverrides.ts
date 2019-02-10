/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import RollupModel from '../sport/enum/RollupModel';

export default class ExBestOffersOverrides extends JsonMember {
    private bestPricesDepth: number | null;
    private rollupModel: RollupModel;
    private rollupLimit: number | null;
    private rollupLiabilityThreshold: number | null;
    private rollupLiabilityFactor: number | null;

    constructor(
        bestPricesDepth: number | null = null,
        rollupModel: RollupModel = new RollupModel(),
        rollupLimit: number | null = null,
        rollupLiabilityThreshold: number | null = null,
        rollupLiabilityFactor: number | null = null,
    ) {
        super();
        this.bestPricesDepth = bestPricesDepth;
        this.rollupModel = rollupModel;
        this.rollupLimit = rollupLimit;
        this.rollupLiabilityThreshold = rollupLiabilityThreshold;
        this.rollupLiabilityFactor = rollupLiabilityFactor;
    }

    public fromJson(json: any): void {
        if ('bestPricesDepth' in json) {
            this.bestPricesDepth = json.bestPricesDepth;
        }
        if ('rollupModel' in json) {
            this.rollupModel.setValue(json.rollupModel);
        }
        if ('rollupLimit' in json) {
            this.rollupLimit = json.rollupLimit;
        }
        if ('rollupLiabilityThreshold' in json) {
            this.rollupLiabilityThreshold = json.rollupLiabilityThreshold;
        }
        if ('rollupLiabilityFactor' in json) {
            this.rollupLiabilityFactor = json.rollupLiabilityFactor;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.bestPricesDepth !== null) {
            json.bestPricesDepth = this.bestPricesDepth;
        }
        if (this.rollupModel.isValid()) {
            json.rollupModel = this.rollupModel.getValue();
        }
        if (this.rollupLimit !== null) {
            json.rollupLimit = this.rollupLimit;
        }
        if (this.rollupLiabilityThreshold !== null) {
            json.rollupLiabilityThreshold = this.rollupLiabilityThreshold;
        }
        if (this.rollupLiabilityFactor !== null) {
            json.rollupLiabilityFactor = this.rollupLiabilityFactor;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getBestPricesDepth(): number | null {
        return this.bestPricesDepth;
    }
    public setBestPricesDepth(bestPricesDepth: number | null): void {
        this.bestPricesDepth = bestPricesDepth;
    }
    public getRollupModel(): RollupModel {
        return this.rollupModel;
    }
    public setRollupModel(rollupModel: RollupModel): void {
        this.rollupModel = rollupModel;
    }
    public getRollupLimit(): number | null {
        return this.rollupLimit;
    }
    public setRollupLimit(rollupLimit: number | null): void {
        this.rollupLimit = rollupLimit;
    }
    public getRollupLiabilityThreshold(): number | null {
        return this.rollupLiabilityThreshold;
    }
    public setRollupLiabilityThreshold(rollupLiabilityThreshold: number | null): void {
        this.rollupLiabilityThreshold = rollupLiabilityThreshold;
    }
    public getRollupLiabilityFactor(): number | null {
        return this.rollupLiabilityFactor;
    }
    public setRollupLiabilityFactor(rollupLiabilityFactor: number | null): void {
        this.rollupLiabilityFactor = rollupLiabilityFactor;
    }

}
