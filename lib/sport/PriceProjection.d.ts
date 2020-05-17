/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PriceData from '../sport/enum/PriceData';
import ExBestOffersOverrides, { IExBestOffersOverridesOptions } from '../sport/ExBestOffersOverrides';
export interface IPriceProjectionOptions {
    priceData?: Set<PriceData> | string[];
    exBestOffersOverrides?: ExBestOffersOverrides | IExBestOffersOverridesOptions;
    virtualise?: boolean;
    rolloverStakes?: boolean;
}
export default class PriceProjection extends JsonMember {
    private priceData?;
    private exBestOffersOverrides?;
    private virtualise?;
    private rolloverStakes?;
    constructor(options: IPriceProjectionOptions);
    toJson(): IPriceProjectionOptions;
    getPriceData(): Set<PriceData> | undefined;
    setPriceData(priceData: Set<PriceData>): void;
    getExBestOffersOverrides(): ExBestOffersOverrides | undefined;
    setExBestOffersOverrides(exBestOffersOverrides: ExBestOffersOverrides): void;
    getVirtualise(): boolean | undefined;
    setVirtualise(virtualise: boolean): void;
    getRolloverStakes(): boolean | undefined;
    setRolloverStakes(rolloverStakes: boolean): void;
}
