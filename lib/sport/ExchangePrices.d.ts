/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PriceSize from '../sport/PriceSize';
export default class ExchangePrices extends JsonMember {
    private availableToBack;
    private availableToLay;
    private tradedVolume;
    constructor(availableToBack?: PriceSize[], availableToLay?: PriceSize[], tradedVolume?: PriceSize[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAvailableToBack(): PriceSize[];
    setAvailableToBack(availableToBack: PriceSize[]): void;
    getAvailableToLay(): PriceSize[];
    setAvailableToLay(availableToLay: PriceSize[]): void;
    getTradedVolume(): PriceSize[];
    setTradedVolume(tradedVolume: PriceSize[]): void;
}
