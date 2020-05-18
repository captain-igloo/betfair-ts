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
    private availableToBack?;
    private availableToLay?;
    private tradedVolume?;
    constructor(options: IExchangePricesOptions);
    toJson(): IExchangePricesOptions;
    getAvailableToBack(): PriceSize[] | undefined;
    setAvailableToBack(availableToBack: PriceSize[]): void;
    getAvailableToLay(): PriceSize[] | undefined;
    setAvailableToLay(availableToLay: PriceSize[]): void;
    getTradedVolume(): PriceSize[] | undefined;
    setTradedVolume(tradedVolume: PriceSize[]): void;
}
