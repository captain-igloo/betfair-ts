/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import MarketTypeResult from '../sport/MarketTypeResult';

export default class ListMarketTypesResponse extends JsonResponse {
    private marketTypeResults: MarketTypeResult[];

    constructor(
        marketTypeResults: MarketTypeResult[] = [],
    ) {
        super();
        this.marketTypeResults = marketTypeResults;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('marketTypeResults' in json) {
                this.marketTypeResults = json.map((marketTypeResultsJson: any) => {
                    const element = new MarketTypeResult();
                    element.fromJson(marketTypeResultsJson);
                    return element;
                });
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketTypeResults.length > 0) {
            json.marketTypeResults = this.marketTypeResults.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketTypeResults.length > 0;
    }

    public getMarketTypeResults(): MarketTypeResult[] {
        return this.marketTypeResults;
    }
    public setMarketTypeResults(marketTypeResults: MarketTypeResult[]): void {
        this.marketTypeResults = marketTypeResults;
    }

}
