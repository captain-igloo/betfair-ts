/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import UpdateInstruction, { IUpdateInstructionOptions } from '../sport/UpdateInstruction';
export interface IUpdateOrdersRequestOptions {
    marketId: string;
    instructions: (UpdateInstruction | IUpdateInstructionOptions)[];
    customerRef?: string;
}
export default class UpdateOrdersRequest extends JsonRequest {
    private marketId;
    private instructions;
    private customerRef?;
    constructor(options: IUpdateOrdersRequestOptions);
    toJson(): IUpdateOrdersRequestOptions;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructions(): UpdateInstruction[];
    setInstructions(instructions: UpdateInstruction[]): void;
    getCustomerRef(): string | undefined;
    setCustomerRef(customerRef: string): void;
}
