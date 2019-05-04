/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketCatalogue from '../sport/MarketCatalogue';
export default class ListMarketCatalogueResponse extends JsonResponse {
    private marketCatalogues;
    constructor(marketCatalogues?: MarketCatalogue[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketCatalogues(): MarketCatalogue[];
    setMarketCatalogues(marketCatalogues: MarketCatalogue[]): void;
}
