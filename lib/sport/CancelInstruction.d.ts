/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ICancelInstructionOptions {
    betId: string;
    sizeReduction?: number;
}
export default class CancelInstruction extends JsonMember {
    private betId;
    private sizeReduction?;
    constructor(options: ICancelInstructionOptions);
    toJson(): ICancelInstructionOptions;
    getBetId(): string;
    setBetId(betId: string): void;
    getSizeReduction(): number | undefined;
    setSizeReduction(sizeReduction: number): void;
}
