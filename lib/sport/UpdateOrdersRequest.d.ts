/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import UpdateInstruction from '../sport/UpdateInstruction';
export default class UpdateOrdersRequest extends JsonRequest {
    private marketId;
    private instructions;
    private customerRef;
    constructor(marketId?: string, instructions?: UpdateInstruction[], customerRef?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getInstructions(): UpdateInstruction[];
    setInstructions(instructions: UpdateInstruction[]): void;
    getCustomerRef(): string;
    setCustomerRef(customerRef: string): void;
}
