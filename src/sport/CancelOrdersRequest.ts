/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import CancelInstruction from '../sport/CancelInstruction';

export default class CancelOrdersRequest extends JsonRequest {
    private marketId: string;
    private instructions: CancelInstruction[];
    private customerRef: string;

    constructor(
        marketId: string = '',
        instructions: CancelInstruction[] = [],
        customerRef: string = '',
    ) {
        super();
        this.marketId = marketId;
        this.instructions = instructions;
        this.customerRef = customerRef;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('instructions' in json) {
            this.instructions = json.instructions.map((instructionsJson: any) => {
                const element = new CancelInstruction();
                element.fromJson(instructionsJson);
                return element;
            });
        }
        if ('customerRef' in json) {
            this.customerRef = json.customerRef;
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
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getInstructions(): CancelInstruction[] {
        return this.instructions;
    }
    public setInstructions(instructions: CancelInstruction[]): void {
        this.instructions = instructions;
    }
    public getCustomerRef(): string {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }

}
