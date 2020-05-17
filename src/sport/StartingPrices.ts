/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PriceSize, { IPriceSizeOptions } from '../sport/PriceSize';

export interface IStartingPricesOptions {
    nearPrice?: number;
    farPrice?: number;
    backStakeTaken?: Array<PriceSize | IPriceSizeOptions>;
    layLiabilityTaken?: Array<PriceSize | IPriceSizeOptions>;
    actualSP?: number;
}

export default class StartingPrices extends JsonMember {
    private nearPrice?: number;
    private farPrice?: number;
    private backStakeTaken?: PriceSize[];
    private layLiabilityTaken?: PriceSize[];
    private actualSP?: number;

    constructor(options: IStartingPricesOptions) {
        super();
        this.nearPrice = options.nearPrice;
        this.farPrice = options.farPrice;
        if (options.backStakeTaken) {
            this.backStakeTaken = this.arrayFromJson(options.backStakeTaken, PriceSize);
        }
        if (options.layLiabilityTaken) {
            this.layLiabilityTaken = this.arrayFromJson(options.layLiabilityTaken, PriceSize);
        }
        this.actualSP = options.actualSP;
    }

    public toJson(): IStartingPricesOptions {
        const json: IStartingPricesOptions = {
        };
        if (typeof this.nearPrice !== 'undefined') {
            json.nearPrice = this.nearPrice;
        }
        if (typeof this.farPrice !== 'undefined') {
            json.farPrice = this.farPrice;
        }
        if (this.backStakeTaken && this.backStakeTaken.length > 0) {
            json.backStakeTaken = this.backStakeTaken.map((value) => value.toJson());
        }
        if (this.layLiabilityTaken && this.layLiabilityTaken.length > 0) {
            json.layLiabilityTaken = this.layLiabilityTaken.map((value) => value.toJson());
        }
        if (typeof this.actualSP !== 'undefined') {
            json.actualSP = this.actualSP;
        }
        return json;
    }

    public getNearPrice(): number | undefined {
        return this.nearPrice;
    }
    public setNearPrice(nearPrice: number): void {
        this.nearPrice = nearPrice;
    }
    public getFarPrice(): number | undefined {
        return this.farPrice;
    }
    public setFarPrice(farPrice: number): void {
        this.farPrice = farPrice;
    }
    public getBackStakeTaken(): PriceSize[] | undefined {
        return this.backStakeTaken;
    }
    public setBackStakeTaken(backStakeTaken: PriceSize[]): void {
        this.backStakeTaken = backStakeTaken;
    }
    public getLayLiabilityTaken(): PriceSize[] | undefined {
        return this.layLiabilityTaken;
    }
    public setLayLiabilityTaken(layLiabilityTaken: PriceSize[]): void {
        this.layLiabilityTaken = layLiabilityTaken;
    }
    public getActualSP(): number | undefined {
        return this.actualSP;
    }
    public setActualSP(actualSP: number): void {
        this.actualSP = actualSP;
    }

}
