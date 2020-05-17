/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IMarketTypeResultOptions {
    marketType?: string;
    marketCount?: number;
}

export default class MarketTypeResult extends JsonMember {
    private marketType?: string;
    private marketCount?: number;

    constructor(options: IMarketTypeResultOptions) {
        super();
        this.marketType = options.marketType;
        this.marketCount = options.marketCount;
    }

    public toJson(): IMarketTypeResultOptions {
        const json: IMarketTypeResultOptions = {
        };
        if (typeof this.marketType !== 'undefined') {
            json.marketType = this.marketType;
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
    }

    public getMarketType(): string | undefined {
        return this.marketType;
    }
    public setMarketType(marketType: string): void {
        this.marketType = marketType;
    }
    public getMarketCount(): number | undefined {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number): void {
        this.marketCount = marketCount;
    }

}
