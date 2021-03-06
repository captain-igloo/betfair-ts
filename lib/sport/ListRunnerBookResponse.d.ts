/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketBook, { IMarketBookOptions } from '../sport/MarketBook';
export interface IListRunnerBookResponseOptions {
    marketBooks?: (MarketBook | IMarketBookOptions)[];
}
export default class ListRunnerBookResponse extends JsonResponse {
    private marketBooks?;
    constructor(options: (MarketBook | IMarketBookOptions)[]);
    toJson(): IListRunnerBookResponseOptions;
    getMarketBooks(): MarketBook[] | undefined;
    setMarketBooks(marketBooks: MarketBook[]): void;
}
