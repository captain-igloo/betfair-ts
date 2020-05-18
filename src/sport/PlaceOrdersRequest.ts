/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketVersion, { IMarketVersionOptions } from '../sport/MarketVersion';
import PlaceInstruction, { IPlaceInstructionOptions } from '../sport/PlaceInstruction';

export interface IPlaceOrdersRequestOptions {
    marketId: string;
    instructions: (PlaceInstruction | IPlaceInstructionOptions)[];
    customerRef?: string;
    marketVersion?: MarketVersion | IMarketVersionOptions;
    customerStrategyRef?: string;
    async?: boolean;
}

export default class PlaceOrdersRequest extends JsonRequest {
    private marketId: string;
    private instructions: PlaceInstruction[];
    private customerRef?: string;
    private marketVersion?: MarketVersion;
    private customerStrategyRef?: string;
    private async?: boolean;

    constructor(options: IPlaceOrdersRequestOptions) {
        super();
        this.marketId = options.marketId;
        this.instructions = this.arrayFromJson(options.instructions, PlaceInstruction);
        this.customerRef = options.customerRef;
        this.marketVersion = options.marketVersion && this.fromJson(options.marketVersion, MarketVersion);
        this.customerStrategyRef = options.customerStrategyRef;
        this.async = options.async;
    }

    public toJson(): IPlaceOrdersRequestOptions {
        const json: IPlaceOrdersRequestOptions = {
            marketId: this.marketId,
            instructions: this.instructions.map((value) => value.toJson()),
        };
        if (typeof this.customerRef !== 'undefined') {
            json.customerRef = this.customerRef;
        }
        if (this.marketVersion) {
            json.marketVersion = this.marketVersion.toJson();
        }
        if (typeof this.customerStrategyRef !== 'undefined') {
            json.customerStrategyRef = this.customerStrategyRef;
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
    public getInstructions(): PlaceInstruction[] {
        return this.instructions;
    }
    public setInstructions(instructions: PlaceInstruction[]): void {
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
    public getCustomerStrategyRef(): string | undefined {
        return this.customerStrategyRef;
    }
    public setCustomerStrategyRef(customerStrategyRef: string): void {
        this.customerStrategyRef = customerStrategyRef;
    }
    public getAsync(): boolean | undefined {
        return this.async;
    }
    public setAsync(async: boolean): void {
        this.async = async;
    }

}
