/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import CancelInstruction, { ICancelInstructionOptions } from '../sport/CancelInstruction';
export interface ICancelOrdersRequestOptions {
    marketId?: string;
    instructions?: (CancelInstruction | ICancelInstructionOptions)[];
    customerRef?: string;
}
export default class CancelOrdersRequest extends JsonRequest {
    private marketId?;
    private instructions?;
    private customerRef?;
    constructor(options: ICancelOrdersRequestOptions);
    toJson(): ICancelOrdersRequestOptions;
    getMarketId(): string | undefined;
    setMarketId(marketId: string): void;
    getInstructions(): CancelInstruction[] | undefined;
    setInstructions(instructions: CancelInstruction[]): void;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
}
