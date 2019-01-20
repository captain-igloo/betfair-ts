/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketVersion from '../sport/MarketVersion';
import PlaceInstruction from '../sport/PlaceInstruction';

export default class PlaceOrdersRequest extends JsonRequest {
    private marketId: string;
    private instructions: PlaceInstruction[];
    private customerRef: string;
    private marketVersion: MarketVersion;
    private customerStrategyRef: string;
    private async: boolean | null;

    constructor(
        marketId: string = '',
        instructions: PlaceInstruction[] = [],
        customerRef: string = '',
        marketVersion: MarketVersion = new MarketVersion(),
        customerStrategyRef: string = '',
        async: boolean | null = null,
    ) {
        super();
        this.marketId = marketId;
        this.instructions = instructions;
        this.customerRef = customerRef;
        this.marketVersion = marketVersion;
        this.customerStrategyRef = customerStrategyRef;
        this.async = async;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('instructions' in json) {
            this.instructions = json.instructions.map((instructionsJson: any) => {
                const element = new PlaceInstruction();
                element.fromJson(instructionsJson);
                return element;
            });
        }
        if ('customerRef' in json) {
            this.customerRef = json.customerRef;
        }
        if ('marketVersion' in json) {
            this.marketVersion.fromJson(json.marketVersion);
        }
        if ('customerStrategyRef' in json) {
            this.customerStrategyRef = json.customerStrategyRef;
        }
        if ('async' in json) {
            this.async = json.async;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketId !== '') {
            json.marketId = this.marketId;
        }
        if (this.instructions.length > 0) {
            json.instructions = this.instructions.map((value) => value.toJson());
        }
        if (this.customerRef !== '') {
            json.customerRef = this.customerRef;
        }
        if (this.marketVersion.isValid()) {
            json.marketVersion = this.marketVersion.toJson();
        }
        if (this.customerStrategyRef !== '') {
            json.customerStrategyRef = this.customerStrategyRef;
        }
        if (this.async !== null) {
            json.async = this.async;
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketId !== '' &&
            this.instructions.length > 0;
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
    public getCustomerRef(): string {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }
    public getMarketVersion(): MarketVersion {
        return this.marketVersion;
    }
    public setMarketVersion(marketVersion: MarketVersion): void {
        this.marketVersion = marketVersion;
    }
    public getCustomerStrategyRef(): string {
        return this.customerStrategyRef;
    }
    public setCustomerStrategyRef(customerStrategyRef: string): void {
        this.customerStrategyRef = customerStrategyRef;
    }
    public getAsync(): boolean | null {
        return this.async;
    }
    public setAsync(async: boolean | null): void {
        this.async = async;
    }

}
