/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class ReplaceInstruction extends JsonMember {
    private betId: string;
    private newPrice: number | null;

    constructor(
        betId: string = '',
        newPrice: number | null = null,
    ) {
        super();
        this.betId = betId;
        this.newPrice = newPrice;
    }

    public fromJson(json: any): void {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('newPrice' in json) {
            this.newPrice = json.newPrice;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.newPrice !== null) {
            json.newPrice = this.newPrice;
        }
        return json;
    }

    public isValid(): boolean {
        return this.betId !== null &&
            this.newPrice !== null;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getNewPrice(): number | null {
        return this.newPrice;
    }
    public setNewPrice(newPrice: number | null): void {
        this.newPrice = newPrice;
    }

}
