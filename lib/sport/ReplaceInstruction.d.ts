/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class ReplaceInstruction extends JsonMember {
    private betId;
    private newPrice;
    constructor(betId?: string, newPrice?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBetId(): string;
    setBetId(betId: string): void;
    getNewPrice(): number | null;
    setNewPrice(newPrice: number | null): void;
}
