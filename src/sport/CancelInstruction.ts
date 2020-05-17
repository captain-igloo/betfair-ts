/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ICancelInstructionOptions {
    betId: string;
    sizeReduction?: number;
}

export default class CancelInstruction extends JsonMember {
    private betId: string;
    private sizeReduction?: number;

    constructor(options: ICancelInstructionOptions) {
        super();
        this.betId = options.betId;
        this.sizeReduction = options.sizeReduction;
    }

    public toJson(): ICancelInstructionOptions {
        const json: ICancelInstructionOptions = {
            betId: this.betId,
        };
        if (typeof this.sizeReduction !== 'undefined') {
            json.sizeReduction = this.sizeReduction;
        }
        return json;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getSizeReduction(): number | undefined {
        return this.sizeReduction;
    }
    public setSizeReduction(sizeReduction: number): void {
        this.sizeReduction = sizeReduction;
    }

}
