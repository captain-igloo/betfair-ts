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
    private priceData?: Set<PriceData>;
    private exBestOffersOverrides?: ExBestOffersOverrides;
    private virtualise?: boolean;
    private rolloverStakes?: boolean;

    constructor(options: IPriceProjectionOptions) {
        super();
        this.priceData = options.priceData && this.setFromJson(options.priceData, PriceData);
        this.exBestOffersOverrides = options.exBestOffersOverrides && this.fromJson(options.exBestOffersOverrides, ExBestOffersOverrides);
        this.virtualise = options.virtualise;
        this.rolloverStakes = options.rolloverStakes;
    }

    public toJson(): IPriceProjectionOptions {
        const json: IPriceProjectionOptions = {
        };
        if (this.priceData && this.priceData.size > 0) {
            json.priceData = this.setToJson(this.priceData);
        }
        if (this.exBestOffersOverrides) {
            json.exBestOffersOverrides = this.exBestOffersOverrides.toJson();
        }
        if (typeof this.virtualise !== 'undefined') {
            json.virtualise = this.virtualise;
        }
        if (typeof this.rolloverStakes !== 'undefined') {
            json.rolloverStakes = this.rolloverStakes;
        }
        return json;
    }

    public getPriceData(): Set<PriceData> | undefined {
        return this.priceData;
    }
    public setPriceData(priceData: Set<PriceData>): void {
        this.priceData = priceData;
    }
    public getExBestOffersOverrides(): ExBestOffersOverrides | undefined {
        return this.exBestOffersOverrides;
    }
    public setExBestOffersOverrides(exBestOffersOverrides: ExBestOffersOverrides): void {
        this.exBestOffersOverrides = exBestOffersOverrides;
    }
    public getVirtualise(): boolean | undefined {
        return this.virtualise;
    }
    public setVirtualise(virtualise: boolean): void {
        this.virtualise = virtualise;
    }
    public getRolloverStakes(): boolean | undefined {
        return this.rolloverStakes;
    }
    public setRolloverStakes(rolloverStakes: boolean): void {
        this.rolloverStakes = rolloverStakes;
    }

}
