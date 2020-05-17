/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IReplaceInstructionOptions {
    betId: string;
    newPrice: number;
}

export default class ReplaceInstruction extends JsonMember {
    private betId: string;
    private newPrice: number;

    constructor(options: IReplaceInstructionOptions) {
        super();
        this.betId = options.betId;
        this.newPrice = options.newPrice;
    }

    public toJson(): IReplaceInstructionOptions {
        const json: IReplaceInstructionOptions = {
            betId: this.betId,
            newPrice: this.newPrice,
        };
        return json;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getNewPrice(): number {
        return this.newPrice;
    }
    public setNewPrice(newPrice: number): void {
        this.newPrice = newPrice;
    }

}
