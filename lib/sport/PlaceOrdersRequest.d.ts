/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MarketVersion, { IMarketVersionOptions } from '../sport/MarketVersion';
import PlaceInstruction, { IPlaceInstructionOptions } from '../sport/PlaceInstruction';
export interface IPlaceOrdersRequestOptions {
    marketId: string;
    instructions: Array<PlaceInstruction | IPlaceInstructionOptions>;
    customerRef?: string;
    marketVersion?: MarketVersion | IMarketVersionOptions;
    customerStrategyRef?: string;
    async?: boolean;
}
export default class PlaceOrdersRequest extends JsonRequest {
    private marketId;
    private instructions;
    private customerRef?;
    private marketVersion?;
    private customerStrategyRef?;
    private async?;
    constructor(options: IPlaceOrdersRequestOptions);
    toJson(): IPlaceOrdersRequestOptions;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructions(): PlaceInstruction[];
    setInstructions(instructions: PlaceInstruction[]): void;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
    getMarketVersion(): MarketVersion | undefined;
    setMarketVersion(marketVersion: MarketVersion): void;
    getCustomerStrategyRef(): string | undefined;
    setCustomerStrategyRef(customerStrategyRef: string): void;
    getAsync(): boolean | undefined;
    setAsync(async: boolean): void;
}
