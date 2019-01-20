/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MarketVersion from '../sport/MarketVersion';
import ReplaceInstruction from '../sport/ReplaceInstruction';

export default class ReplaceOrdersRequest extends JsonRequest {
    private marketId: string;
    private instructions: ReplaceInstruction[];
    private customerRef: string;
    private marketVersion: MarketVersion;
    private async: boolean | null;

    constructor(
        marketId: string = '',
        instructions: ReplaceInstruction[] = [],
        customerRef: string = '',
        marketVersion: MarketVersion = new MarketVersion(),
        async: boolean | null = null,
    ) {
        super();
        this.marketId = marketId;
        this.instructions = instructions;
        this.customerRef = customerRef;
        this.marketVersion = marketVersion;
        this.async = async;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('instructions' in json) {
            this.instructions = json.instructions.map((instructionsJson: any) => {
                const element = new ReplaceInstruction();
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
    public getInstructions(): ReplaceInstruction[] {
        return this.instructions;
    }
    public setInstructions(instructions: ReplaceInstruction[]): void {
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
    public getAsync(): boolean | null {
        return this.async;
    }
    public setAsync(async: boolean | null): void {
        this.async = async;
    }

}
