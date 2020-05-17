/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import UpdateInstruction, { IUpdateInstructionOptions } from '../sport/UpdateInstruction';

export interface IUpdateOrdersRequestOptions {
    marketId: string;
    instructions: Array<UpdateInstruction | IUpdateInstructionOptions>;
    customerRef?: string;
}

export default class UpdateOrdersRequest extends JsonRequest {
    private marketId: string;
    private instructions: UpdateInstruction[];
    private customerRef?: string;

    constructor(options: IUpdateOrdersRequestOptions) {
        super();
        this.marketId = options.marketId;
        this.instructions = this.arrayFromJson(options.instructions, UpdateInstruction);
        this.customerRef = options.customerRef;
    }

    public toJson(): IUpdateOrdersRequestOptions {
        const json: IUpdateOrdersRequestOptions = {
            marketId: this.marketId,
            instructions: this.instructions.map((value) => value.toJson()),
        };
        if (typeof this.customerRef !== 'undefined') {
            json.customerRef = this.customerRef;
        }
        return json;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getInstructions(): UpdateInstruction[] {
        return this.instructions;
    }
    public setInstructions(instructions: UpdateInstruction[]): void {
        this.instructions = instructions;
    }
    public getCustomerRef(): string | undefined {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }

}
