/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import UpdateInstruction from '../sport/UpdateInstruction';

export default class UpdateOrdersRequest extends JsonRequest {
    private marketId: string;
    private instructions: UpdateInstruction[];
    private customerRef: string;

    constructor(
        marketId: string = '',
        instructions: UpdateInstruction[] = [],
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
                const element = new UpdateInstruction();
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
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.instructions.length > 0) {
            json.instructions = this.instructions.map((value) => value.toJson());
        }
        if (this.customerRef !== null) {
            json.customerRef = this.customerRef;
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketId !== null &&
            this.instructions.length > 0;
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
    public getCustomerRef(): string {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }

}
