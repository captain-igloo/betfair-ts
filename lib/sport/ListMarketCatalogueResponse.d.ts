/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketCatalogue, { IMarketCatalogueOptions } from '../sport/MarketCatalogue';
export interface IListMarketCatalogueResponseOptions {
    marketCatalogues?: Array<MarketCatalogue | IMarketCatalogueOptions>;
}
export default class ListMarketCatalogueResponse extends JsonResponse {
    private marketCatalogues?;
    constructor(options: Array<MarketCatalogue | IMarketCatalogueOptions>);
    toJson(): IListMarketCatalogueResponseOptions;
    getMarketCatalogues(): MarketCatalogue[] | undefined;
    setMarketCatalogues(marketCatalogues: MarketCatalogue[]): void;
}
