/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import MarketTypeResult, { IMarketTypeResultOptions } from '../sport/MarketTypeResult';

export interface IListMarketTypesResponseOptions {
    marketTypeResults?: Array<MarketTypeResult | IMarketTypeResultOptions>;
}

export default class ListMarketTypesResponse extends JsonResponse {
    private marketTypeResults?: MarketTypeResult[];

    constructor(options: Array<MarketTypeResult | IMarketTypeResultOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketTypeResults = this.arrayFromJson(options, MarketTypeResult);
            }
        }
    }

    public toJson(): IListMarketTypesResponseOptions {
        throw new Error('not implemented');
    }

    public getMarketTypeResults(): MarketTypeResult[] | undefined {
        return this.marketTypeResults;
    }
    public setMarketTypeResults(marketTypeResults: MarketTypeResult[]): void {
        this.marketTypeResults = marketTypeResults;
    }

}
