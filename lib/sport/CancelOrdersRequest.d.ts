/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import CancelInstruction from '../sport/CancelInstruction';
export default class CancelOrdersRequest extends JsonRequest {
    private marketId;
    private instructions;
    private customerRef;
    constructor(marketId?: string, instructions?: CancelInstruction[], customerRef?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructions(): CancelInstruction[];
    setInstructions(instructions: CancelInstruction[]): void;
    getCustomerRef(): string;
    setCustomerRef(customerRef: string): void;
}
