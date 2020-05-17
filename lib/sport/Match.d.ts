/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Side from '../sport/enum/Side';
export interface IMatchOptions {
    betId?: string;
    matchId?: string;
    side: Side | string;
    price: number;
    size: number;
    matchDate?: Date | string;
}
export default class Match extends JsonMember {
    private betId?;
    private matchId?;
    private side;
    private price;
    private size;
    private matchDate?;
    constructor(options: IMatchOptions);
    toJson(): IMatchOptions;
    getBetId(): string | undefined;
    setBetId(betId: string): void;
    getMatchId(): string | undefined;
    setMatchId(matchId: string): void;
    getSide(): Side;
    setSide(side: Side): void;
    getPrice(): number;
    setPrice(price: number): void;
    getSize(): number;
    setSize(size: number): void;
    getMatchDate(): Date | undefined;
    setMatchDate(matchDate: Date): void;
}
