/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IReplaceInstructionOptions {
    betId: string;
    newPrice: number;
}
export default class ReplaceInstruction extends JsonMember {
    private betId;
    private newPrice;
    constructor(options: IReplaceInstructionOptions);
    toJson(): IReplaceInstructionOptions;
    getBetId(): string;
    setBetId(betId: string): void;
    getNewPrice(): number;
    setNewPrice(newPrice: number): void;
}
