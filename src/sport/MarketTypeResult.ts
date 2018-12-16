/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class MarketTypeResult extends JsonMember {
    private marketType: string;
    private marketCount: number | null;

    constructor(
        marketType: string = '',
        marketCount: number | null = null,
    ) {
        super();
        this.marketType = marketType;
        this.marketCount = marketCount;
    }

    public fromJson(json: any): void {
        if ('marketType' in json) {
            this.marketType = json.marketType;
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketType !== null) {
            json.marketType = this.marketType;
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getMarketType(): string {
        return this.marketType;
    }
    public setMarketType(marketType: string): void {
        this.marketType = marketType;
    }
    public getMarketCount(): number | null {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number | null): void {
        this.marketCount = marketCount;
    }

}
