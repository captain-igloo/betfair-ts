/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PriceData from '../sport/enum/PriceData';
import ExBestOffersOverrides from '../sport/ExBestOffersOverrides';

export default class PriceProjection extends JsonMember {
    private priceData: Set<PriceData>;
    private exBestOffersOverrides: ExBestOffersOverrides;
    private virtualise: boolean | null;
    private rolloverStakes: boolean | null;

    constructor(
        priceData: Set<PriceData> = new Set(),
        exBestOffersOverrides: ExBestOffersOverrides = new ExBestOffersOverrides(),
        virtualise: boolean | null = null,
        rolloverStakes: boolean | null = null,
    ) {
        super();
        this.priceData = priceData;
        this.exBestOffersOverrides = exBestOffersOverrides;
        this.virtualise = virtualise;
        this.rolloverStakes = rolloverStakes;
    }

    public fromJson(json: any): void {
        if ('priceData' in json) {
            this.priceData = json.priceData;
        }
        if ('exBestOffersOverrides' in json) {
            this.exBestOffersOverrides.fromJson(json.exBestOffersOverrides);
        }
        if ('virtualise' in json) {
            this.virtualise = json.virtualise;
        }
        if ('rolloverStakes' in json) {
            this.rolloverStakes = json.rolloverStakes;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.priceData.size > 0) {
            json.priceData = Array.from(this.priceData);
        }
        if (this.exBestOffersOverrides.isValid()) {
            json.exBestOffersOverrides = this.exBestOffersOverrides.toJson();
        }
        if (this.virtualise !== null) {
            json.virtualise = this.virtualise;
        }
        if (this.rolloverStakes !== null) {
            json.rolloverStakes = this.rolloverStakes;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getPriceData(): Set<PriceData> {
        return this.priceData;
    }
    public setPriceData(priceData: Set<PriceData>): void {
        this.priceData = priceData;
    }
    public getExBestOffersOverrides(): ExBestOffersOverrides {
        return this.exBestOffersOverrides;
    }
    public setExBestOffersOverrides(exBestOffersOverrides: ExBestOffersOverrides): void {
        this.exBestOffersOverrides = exBestOffersOverrides;
    }
    public getVirtualise(): boolean | null {
        return this.virtualise;
    }
    public setVirtualise(virtualise: boolean | null): void {
        this.virtualise = virtualise;
    }
    public getRolloverStakes(): boolean | null {
        return this.rolloverStakes;
    }
    public setRolloverStakes(rolloverStakes: boolean | null): void {
        this.rolloverStakes = rolloverStakes;
    }

}
