/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Side from '../sport/enum/Side';
export default class Match extends JsonMember {
    private betId;
    private matchId;
    private side;
    private price;
    private size;
    private matchDate;
    constructor(betId?: string, matchId?: string, side?: Side, price?: number | null, size?: number | null, matchDate?: Date | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBetId(): string;
    setBetId(betId: string): void;
    getMatchId(): string;
    setMatchId(matchId: string): void;
    getSide(): Side;
    setSide(side: Side): void;
    getPrice(): number | null;
    setPrice(price: number | null): void;
    getSize(): number | null;
    setSize(size: number | null): void;
    getMatchDate(): Date | null;
    setMatchDate(matchDate: Date | null): void;
}
