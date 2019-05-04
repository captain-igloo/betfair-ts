/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class MarketTypeResult extends JsonMember {
    private marketType;
    private marketCount;
    constructor(marketType?: string, marketCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketType(): string;
    setMarketType(marketType: string): void;
    getMarketCount(): number | null;
    setMarketCount(marketCount: number | null): void;
}
