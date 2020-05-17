/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketTypeResult, { IMarketTypeResultOptions } from '../sport/MarketTypeResult';
export interface IListMarketTypesResponseOptions {
    marketTypeResults?: Array<MarketTypeResult | IMarketTypeResultOptions>;
}
export default class ListMarketTypesResponse extends JsonResponse {
    private marketTypeResults?;
    constructor(options: Array<MarketTypeResult | IMarketTypeResultOptions>);
    toJson(): IListMarketTypesResponseOptions;
    getMarketTypeResults(): MarketTypeResult[] | undefined;
    setMarketTypeResults(marketTypeResults: MarketTypeResult[]): void;
}
