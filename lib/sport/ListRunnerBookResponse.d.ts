/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketBook from '../sport/MarketBook';
export default class ListRunnerBookResponse extends JsonResponse {
    private marketBooks;
    constructor(marketBooks?: MarketBook[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketBooks(): MarketBook[];
    setMarketBooks(marketBooks: MarketBook[]): void;
}
