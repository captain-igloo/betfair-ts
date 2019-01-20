/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PriceSize from '../sport/PriceSize';

export default class ExchangePrices extends JsonMember {
    private availableToBack: PriceSize[];
    private availableToLay: PriceSize[];
    private tradedVolume: PriceSize[];

    constructor(
        availableToBack: PriceSize[] = [],
        availableToLay: PriceSize[] = [],
        tradedVolume: PriceSize[] = [],
    ) {
        super();
        this.availableToBack = availableToBack;
        this.availableToLay = availableToLay;
        this.tradedVolume = tradedVolume;
    }

    public fromJson(json: any): void {
        if ('availableToBack' in json) {
            this.availableToBack = json.availableToBack.map((availableToBackJson: any) => {
                const element = new PriceSize();
                element.fromJson(availableToBackJson);
                return element;
            });
        }
        if ('availableToLay' in json) {
            this.availableToLay = json.availableToLay.map((availableToLayJson: any) => {
                const element = new PriceSize();
                element.fromJson(availableToLayJson);
                return element;
            });
        }
        if ('tradedVolume' in json) {
            this.tradedVolume = json.tradedVolume.map((tradedVolumeJson: any) => {
                const element = new PriceSize();
                element.fromJson(tradedVolumeJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.availableToBack.length > 0) {
            json.availableToBack = this.availableToBack.map((value) => value.toJson());
        }
        if (this.availableToLay.length > 0) {
            json.availableToLay = this.availableToLay.map((value) => value.toJson());
        }
        if (this.tradedVolume.length > 0) {
            json.tradedVolume = this.tradedVolume.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getAvailableToBack(): PriceSize[] {
        return this.availableToBack;
    }
    public setAvailableToBack(availableToBack: PriceSize[]): void {
        this.availableToBack = availableToBack;
    }
    public getAvailableToLay(): PriceSize[] {
        return this.availableToLay;
    }
    public setAvailableToLay(availableToLay: PriceSize[]): void {
        this.availableToLay = availableToLay;
    }
    public getTradedVolume(): PriceSize[] {
        return this.tradedVolume;
    }
    public setTradedVolume(tradedVolume: PriceSize[]): void {
        this.tradedVolume = tradedVolume;
    }

}
