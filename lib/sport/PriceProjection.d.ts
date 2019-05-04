/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PriceData from '../sport/enum/PriceData';
import ExBestOffersOverrides from '../sport/ExBestOffersOverrides';
export default class PriceProjection extends JsonMember {
    private priceData;
    private exBestOffersOverrides;
    private virtualise;
    private rolloverStakes;
    constructor(priceData?: Set<PriceData>, exBestOffersOverrides?: ExBestOffersOverrides, virtualise?: boolean | null, rolloverStakes?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getPriceData(): Set<PriceData>;
    setPriceData(priceData: Set<PriceData>): void;
    getExBestOffersOverrides(): ExBestOffersOverrides;
    setExBestOffersOverrides(exBestOffersOverrides: ExBestOffersOverrides): void;
    getVirtualise(): boolean | null;
    setVirtualise(virtualise: boolean | null): void;
    getRolloverStakes(): boolean | null;
    setRolloverStakes(rolloverStakes: boolean | null): void;
}
