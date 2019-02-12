/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import MarketCatalogue from '../sport/MarketCatalogue';

export default class ListMarketCatalogueResponse extends JsonResponse {
    private marketCatalogues: MarketCatalogue[];

    constructor(
        marketCatalogues: MarketCatalogue[] = [],
    ) {
        super();
        this.marketCatalogues = marketCatalogues;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.marketCatalogues = json.map((marketCataloguesJson: any) => {
                const element = new MarketCatalogue();
                element.fromJson(marketCataloguesJson);
                return element;
            });
        }
    }

    public toJson(): any {
        let json: any = {};
        if (this.marketCatalogues.length > 0) {
            json.marketCatalogues = this.marketCatalogues.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketCatalogues.length > 0;
    }

    public getMarketCatalogues(): MarketCatalogue[] {
        return this.marketCatalogues;
    }
    public setMarketCatalogues(marketCatalogues: MarketCatalogue[]): void {
        this.marketCatalogues = marketCatalogues;
    }

}
