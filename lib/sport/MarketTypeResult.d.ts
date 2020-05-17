/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IMarketTypeResultOptions {
    marketType?: string;
    marketCount?: number;
}
export default class MarketTypeResult extends JsonMember {
    private marketType?;
    private marketCount?;
    constructor(options: IMarketTypeResultOptions);
    toJson(): IMarketTypeResultOptions;
    getMarketType(): string | undefined;
    setMarketType(marketType: string): void;
    getMarketCount(): number | undefined;
    setMarketCount(marketCount: number): void;
}
