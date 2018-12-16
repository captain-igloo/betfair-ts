/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PriceSize from '../sport/PriceSize';
export default class StartingPrices extends JsonMember {
    private nearPrice;
    private farPrice;
    private backStakeTaken;
    private layLiabilityTaken;
    private actualSP;
    constructor(nearPrice?: number | null, farPrice?: number | null, backStakeTaken?: PriceSize[], layLiabilityTaken?: PriceSize[], actualSP?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getNearPrice(): number | null;
    setNearPrice(nearPrice: number | null): void;
    getFarPrice(): number | null;
    setFarPrice(farPrice: number | null): void;
    getBackStakeTaken(): PriceSize[];
    setBackStakeTaken(backStakeTaken: PriceSize[]): void;
    getLayLiabilityTaken(): PriceSize[];
    setLayLiabilityTaken(layLiabilityTaken: PriceSize[]): void;
    getActualSP(): number | null;
    setActualSP(actualSP: number | null): void;
}
