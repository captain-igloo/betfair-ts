/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PriceSize from '../sport/PriceSize';

export default class StartingPrices extends JsonMember {
    private nearPrice: number | null;
    private farPrice: number | null;
    private backStakeTaken: PriceSize[];
    private layLiabilityTaken: PriceSize[];
    private actualSP: number | null;

    constructor(
        nearPrice: number | null = null,
        farPrice: number | null = null,
        backStakeTaken: PriceSize[] = [],
        layLiabilityTaken: PriceSize[] = [],
        actualSP: number | null = null,
    ) {
        super();
        this.nearPrice = nearPrice;
        this.farPrice = farPrice;
        this.backStakeTaken = backStakeTaken;
        this.layLiabilityTaken = layLiabilityTaken;
        this.actualSP = actualSP;
    }

    public fromJson(json: any): void {
        if ('nearPrice' in json) {
            this.nearPrice = json.nearPrice;
        }
        if ('farPrice' in json) {
            this.farPrice = json.farPrice;
        }
        if ('backStakeTaken' in json) {
            this.backStakeTaken = json.backStakeTaken.map((backStakeTakenJson: any) => {
                const element = new PriceSize();
                element.fromJson(backStakeTakenJson);
                return element;
            });
        }
        if ('layLiabilityTaken' in json) {
            this.layLiabilityTaken = json.layLiabilityTaken.map((layLiabilityTakenJson: any) => {
                const element = new PriceSize();
                element.fromJson(layLiabilityTakenJson);
                return element;
            });
        }
        if ('actualSP' in json) {
            this.actualSP = json.actualSP;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.nearPrice !== null) {
            json.nearPrice = this.nearPrice;
        }
        if (this.farPrice !== null) {
            json.farPrice = this.farPrice;
        }
        if (this.backStakeTaken.length > 0) {
            json.backStakeTaken = this.backStakeTaken.map((value) => value.toJson());
        }
        if (this.layLiabilityTaken.length > 0) {
            json.layLiabilityTaken = this.layLiabilityTaken.map((value) => value.toJson());
        }
        if (this.actualSP !== null) {
            json.actualSP = this.actualSP;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getNearPrice(): number | null {
        return this.nearPrice;
    }
    public setNearPrice(nearPrice: number | null): void {
        this.nearPrice = nearPrice;
    }
    public getFarPrice(): number | null {
        return this.farPrice;
    }
    public setFarPrice(farPrice: number | null): void {
        this.farPrice = farPrice;
    }
    public getBackStakeTaken(): PriceSize[] {
        return this.backStakeTaken;
    }
    public setBackStakeTaken(backStakeTaken: PriceSize[]): void {
        this.backStakeTaken = backStakeTaken;
    }
    public getLayLiabilityTaken(): PriceSize[] {
        return this.layLiabilityTaken;
    }
    public setLayLiabilityTaken(layLiabilityTaken: PriceSize[]): void {
        this.layLiabilityTaken = layLiabilityTaken;
    }
    public getActualSP(): number | null {
        return this.actualSP;
    }
    public setActualSP(actualSP: number | null): void {
        this.actualSP = actualSP;
    }

}
