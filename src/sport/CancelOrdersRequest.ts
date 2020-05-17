/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import CancelInstruction, { ICancelInstructionOptions } from '../sport/CancelInstruction';

export interface ICancelOrdersRequestOptions {
    marketId?: string;
    instructions?: Array<CancelInstruction | ICancelInstructionOptions>;
    customerRef?: string;
}

export default class CancelOrdersRequest extends JsonRequest {
    private marketId?: string;
    private instructions?: CancelInstruction[];
    private customerRef?: string;

    constructor(options: ICancelOrdersRequestOptions) {
        super();
        this.marketId = options.marketId;
        if (options.instructions) {
            this.instructions = this.arrayFromJson(options.instructions, CancelInstruction);
        }
        this.customerRef = options.customerRef;
    }

    public toJson(): ICancelOrdersRequestOptions {
        const json: ICancelOrdersRequestOptions = {
        };
        if (typeof this.marketId !== 'undefined') {
            json.marketId = this.marketId;
        }
        if (this.instructions && this.instructions.length > 0) {
            json.instructions = this.instructions.map((value) => value.toJson());
        }
        if (typeof this.customerRef !== 'undefined') {
            json.customerRef = this.customerRef;
        }
        return json;
    }

    public getMarketId(): string | undefined {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getInstructions(): CancelInstruction[] | undefined {
        return this.instructions;
    }
    public setInstructions(instructions: CancelInstruction[]): void {
        this.instructions = instructions;
    }
    public getCustomerRef(): string | undefined {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }

}
