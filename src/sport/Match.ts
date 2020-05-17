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
    private betId?: string;
    private matchId?: string;
    private side: Side;
    private price: number;
    private size: number;
    private matchDate?: Date;

    constructor(options: IMatchOptions) {
        super();
        this.betId = options.betId;
        this.matchId = options.matchId;
        this.side = this.fromJson(options.side, Side);
        this.price = options.price;
        this.size = options.size;
        if (options.matchDate) {
            this.matchDate = this.fromJson(options.matchDate, Date);
        }
    }

    public toJson(): IMatchOptions {
        const json: IMatchOptions = {
            side: this.side.getValue(),
            price: this.price,
            size: this.size,
        };
        if (typeof this.betId !== 'undefined') {
            json.betId = this.betId;
        }
        if (typeof this.matchId !== 'undefined') {
            json.matchId = this.matchId;
        }
        if (typeof this.matchDate !== 'undefined') {
            json.matchDate = this.matchDate.toISOString();
        }
        return json;
    }

    public getBetId(): string | undefined {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getMatchId(): string | undefined {
        return this.matchId;
    }
    public setMatchId(matchId: string): void {
        this.matchId = matchId;
    }
    public getSide(): Side {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number): void {
        this.price = price;
    }
    public getSize(): number {
        return this.size;
    }
    public setSize(size: number): void {
        this.size = size;
    }
    public getMatchDate(): Date | undefined {
        return this.matchDate;
    }
    public setMatchDate(matchDate: Date): void {
        this.matchDate = matchDate;
    }

}
