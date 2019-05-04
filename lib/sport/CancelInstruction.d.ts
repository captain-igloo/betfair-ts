/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class CancelInstruction extends JsonMember {
    private betId;
    private sizeReduction;
    constructor(betId?: string, sizeReduction?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBetId(): string;
    setBetId(betId: string): void;
    getSizeReduction(): number | null;
    setSizeReduction(sizeReduction: number | null): void;
}
