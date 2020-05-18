/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PriceSize, { IPriceSizeOptions } from '../sport/PriceSize';

export interface IExchangePricesOptions {
    availableToBack?: (PriceSize | IPriceSizeOptions)[];
    availableToLay?: (PriceSize | IPriceSizeOptions)[];
    tradedVolume?: (PriceSize | IPriceSizeOptions)[];
}

export default class ExchangePrices extends JsonMember {
    private availableToBack?: PriceSize[];
    private availableToLay?: PriceSize[];
    private tradedVolume?: PriceSize[];

    constructor(options: IExchangePricesOptions) {
        super();
        if (options.availableToBack) {
            this.availableToBack = this.arrayFromJson(options.availableToBack, PriceSize);
        }
        if (options.availableToLay) {
            this.availableToLay = this.arrayFromJson(options.availableToLay, PriceSize);
        }
        if (options.tradedVolume) {
            this.tradedVolume = this.arrayFromJson(options.tradedVolume, PriceSize);
        }
    }

    public toJson(): IExchangePricesOptions {
        const json: IExchangePricesOptions = {
        };
        if (this.availableToBack && this.availableToBack.length > 0) {
            json.availableToBack = this.availableToBack.map((value) => value.toJson());
        }
        if (this.availableToLay && this.availableToLay.length > 0) {
            json.availableToLay = this.availableToLay.map((value) => value.toJson());
        }
        if (this.tradedVolume && this.tradedVolume.length > 0) {
            json.tradedVolume = this.tradedVolume.map((value) => value.toJson());
        }
        return json;
    }

    public getAvailableToBack(): PriceSize[] | undefined {
        return this.availableToBack;
    }
    public setAvailableToBack(availableToBack: PriceSize[]): void {
        this.availableToBack = availableToBack;
    }
    public getAvailableToLay(): PriceSize[] | undefined {
        return this.availableToLay;
    }
    public setAvailableToLay(availableToLay: PriceSize[]): void {
        this.availableToLay = availableToLay;
    }
    public getTradedVolume(): PriceSize[] | undefined {
        return this.tradedVolume;
    }
    public setTradedVolume(tradedVolume: PriceSize[]): void {
        this.tradedVolume = tradedVolume;
    }

}
