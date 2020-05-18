/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketVersion, { IMarketVersionOptions } from '../sport/MarketVersion';
import ReplaceInstruction, { IReplaceInstructionOptions } from '../sport/ReplaceInstruction';
export interface IReplaceOrdersRequestOptions {
    marketId: string;
    instructions: (ReplaceInstruction | IReplaceInstructionOptions)[];
    customerRef?: string;
    marketVersion?: MarketVersion | IMarketVersionOptions;
    async?: boolean;
}
export default class ReplaceOrdersRequest extends JsonRequest {
    private marketId;
    private instructions;
    private customerRef?;
    private marketVersion?;
    private async?;
    constructor(options: IReplaceOrdersRequestOptions);
    toJson(): IReplaceOrdersRequestOptions;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructions(): ReplaceInstruction[];
    setInstructions(instructions: ReplaceInstruction[]): void;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
    getMarketVersion(): MarketVersion | undefined;
    setMarketVersion(marketVersion: MarketVersion): void;
    getAsync(): boolean | undefined;
    setAsync(async: boolean): void;
}
