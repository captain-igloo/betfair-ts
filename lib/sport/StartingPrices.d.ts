/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PriceSize, { IPriceSizeOptions } from '../sport/PriceSize';
export interface IStartingPricesOptions {
    nearPrice?: number;
    farPrice?: number;
    backStakeTaken?: (PriceSize | IPriceSizeOptions)[];
    layLiabilityTaken?: (PriceSize | IPriceSizeOptions)[];
    actualSP?: number;
}
export default class StartingPrices extends JsonMember {
    private nearPrice?;
    private farPrice?;
    private backStakeTaken?;
    private layLiabilityTaken?;
    private actualSP?;
    constructor(options: IStartingPricesOptions);
    toJson(): IStartingPricesOptions;
    getNearPrice(): number | undefined;
    setNearPrice(nearPrice: number): void;
    getFarPrice(): number | undefined;
    setFarPrice(farPrice: number): void;
    getBackStakeTaken(): PriceSize[] | undefined;
    setBackStakeTaken(backStakeTaken: PriceSize[]): void;
    getLayLiabilityTaken(): PriceSize[] | undefined;
    setLayLiabilityTaken(layLiabilityTaken: PriceSize[]): void;
    getActualSP(): number | undefined;
    setActualSP(actualSP: number): void;
}
