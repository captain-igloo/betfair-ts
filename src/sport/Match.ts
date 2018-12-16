/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Side from '../sport/enum/Side';

export default class Match extends JsonMember {
    private betId: string;
    private matchId: string;
    private side: Side;
    private price: number | null;
    private size: number | null;
    private matchDate: Date | null;

    constructor(
        betId: string = '',
        matchId: string = '',
        side: Side = new Side(),
        price: number | null = null,
        size: number | null = null,
        matchDate: Date | null = null,
    ) {
        super();
        this.betId = betId;
        this.matchId = matchId;
        this.side = side;
        this.price = price;
        this.size = size;
        this.matchDate = matchDate;
    }

    public fromJson(json: any): void {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('matchId' in json) {
            this.matchId = json.matchId;
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('price' in json) {
            this.price = json.price;
        }
        if ('size' in json) {
            this.size = json.size;
        }
        if ('matchDate' in json) {
            this.matchDate = new Date(json.matchDate);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.matchId !== null) {
            json.matchId = this.matchId;
        }
        if (this.side.isValid()) {
            json.side = this.side;
        }
        if (this.price !== null) {
            json.price = this.price;
        }
        if (this.size !== null) {
            json.size = this.size;
        }
        if (this.matchDate !== null) {
            json.matchDate = this.matchDate.toISOString();
        }
        return json;
    }

    public isValid(): boolean {
        return this.side.isValid() &&
            this.price !== null &&
            this.size !== null;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getMatchId(): string {
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
    public getPrice(): number | null {
        return this.price;
    }
    public setPrice(price: number | null): void {
        this.price = price;
    }
    public getSize(): number | null {
        return this.size;
    }
    public setSize(size: number | null): void {
        this.size = size;
    }
    public getMatchDate(): Date | null {
        return this.matchDate;
    }
    public setMatchDate(matchDate: Date | null): void {
        this.matchDate = matchDate;
    }

}
