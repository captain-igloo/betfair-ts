/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketTypeResult from '../sport/MarketTypeResult';
export default class ListMarketTypesResponse extends JsonResponse {
    private marketTypeResults;
    constructor(marketTypeResults?: MarketTypeResult[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketTypeResults(): MarketTypeResult[];
    setMarketTypeResults(marketTypeResults: MarketTypeResult[]): void;
}
