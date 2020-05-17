/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import MarketCatalogue, { IMarketCatalogueOptions } from '../sport/MarketCatalogue';

export interface IListMarketCatalogueResponseOptions {
    marketCatalogues?: Array<MarketCatalogue | IMarketCatalogueOptions>;
}

export default class ListMarketCatalogueResponse extends JsonResponse {
    private marketCatalogues?: MarketCatalogue[];

    constructor(options: Array<MarketCatalogue | IMarketCatalogueOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketCatalogues = this.arrayFromJson(options, MarketCatalogue);
            }
        }
    }

    public toJson(): IListMarketCatalogueResponseOptions {
        throw new Error('not implemented');
    }

    public getMarketCatalogues(): MarketCatalogue[] | undefined {
        return this.marketCatalogues;
    }
    public setMarketCatalogues(marketCatalogues: MarketCatalogue[]): void {
        this.marketCatalogues = marketCatalogues;
    }

}
