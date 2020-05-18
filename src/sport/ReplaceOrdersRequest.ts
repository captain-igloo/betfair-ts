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
    private marketId: string;
    private instructions: ReplaceInstruction[];
    private customerRef?: string;
    private marketVersion?: MarketVersion;
    private async?: boolean;

    constructor(options: IReplaceOrdersRequestOptions) {
        super();
        this.marketId = options.marketId;
        this.instructions = this.arrayFromJson(options.instructions, ReplaceInstruction);
        this.customerRef = options.customerRef;
        this.marketVersion = options.marketVersion && this.fromJson(options.marketVersion, MarketVersion);
        this.async = options.async;
    }

    public toJson(): IReplaceOrdersRequestOptions {
        const json: IReplaceOrdersRequestOptions = {
            marketId: this.marketId,
            instructions: this.instructions.map((value) => value.toJson()),
        };
        if (typeof this.customerRef !== 'undefined') {
            json.customerRef = this.customerRef;
        }
        if (this.marketVersion) {
            json.marketVersion = this.marketVersion.toJson();
        }
        if (typeof this.async !== 'undefined') {
            json.async = this.async;
        }
        return json;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getInstructions(): ReplaceInstruction[] {
        return this.instructions;
    }
    public setInstructions(instructions: ReplaceInstruction[]): void {
        this.instructions = instructions;
    }
    public getCustomerRef(): string | undefined {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }
    public getMarketVersion(): MarketVersion | undefined {
        return this.marketVersion;
    }
    public setMarketVersion(marketVersion: MarketVersion): void {
        this.marketVersion = marketVersion;
    }
    public getAsync(): boolean | undefined {
        return this.async;
    }
    public setAsync(async: boolean): void {
        this.async = async;
    }

}
