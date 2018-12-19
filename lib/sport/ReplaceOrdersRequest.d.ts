/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketVersion from '../sport/MarketVersion';
import ReplaceInstruction from '../sport/ReplaceInstruction';
export default class ReplaceOrdersRequest extends JsonRequest {
    private marketId;
    private instructions;
    private customerRef;
    private marketVersion;
    private async;
    constructor(marketId?: string, instructions?: ReplaceInstruction[], customerRef?: string, marketVersion?: MarketVersion, async?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructions(): ReplaceInstruction[];
    setInstructions(instructions: ReplaceInstruction[]): void;
    getCustomerRef(): string;
    setCustomerRef(customerRef: string): void;
    getMarketVersion(): MarketVersion;
    setMarketVersion(marketVersion: MarketVersion): void;
    getAsync(): boolean | null;
    setAsync(async: boolean | null): void;
}
