/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketBook, { IMarketBookOptions } from '../sport/MarketBook';
export interface IListMarketBookResponseOptions {
    marketBooks?: (MarketBook | IMarketBookOptions)[];
}
export default class ListMarketBookResponse extends JsonResponse {
    private marketBooks?;
    constructor(options: (MarketBook | IMarketBookOptions)[]);
    toJson(): IListMarketBookResponseOptions;
    getMarketBooks(): MarketBook[] | undefined;
    setMarketBooks(marketBooks: MarketBook[]): void;
}
