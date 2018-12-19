/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketVersion from '../sport/MarketVersion';
import PlaceInstruction from '../sport/PlaceInstruction';
export default class PlaceOrdersRequest extends JsonRequest {
    private marketId;
    private instructions;
    private customerRef;
    private marketVersion;
    private customerStrategyRef;
    private async;
    constructor(marketId?: string, instructions?: PlaceInstruction[], customerRef?: string, marketVersion?: MarketVersion, customerStrategyRef?: string, async?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructions(): PlaceInstruction[];
    setInstructions(instructions: PlaceInstruction[]): void;
    getCustomerRef(): string;
    setCustomerRef(customerRef: string): void;
    getMarketVersion(): MarketVersion;
    setMarketVersion(marketVersion: MarketVersion): void;
    getCustomerStrategyRef(): string;
    setCustomerStrategyRef(customerStrategyRef: string): void;
    getAsync(): boolean | null;
    setAsync(async: boolean | null): void;
}
