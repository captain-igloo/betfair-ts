/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class CancelInstruction extends JsonMember {
    private betId: string;
    private sizeReduction: number | null;

    constructor(
        betId: string = '',
        sizeReduction: number | null = null,
    ) {
        super();
        this.betId = betId;
        this.sizeReduction = sizeReduction;
    }

    public fromJson(json: any): void {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('sizeReduction' in json) {
            this.sizeReduction = json.sizeReduction;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.sizeReduction !== null) {
            json.sizeReduction = this.sizeReduction;
        }
        return json;
    }

    public isValid(): boolean {
        return this.betId !== null;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getSizeReduction(): number | null {
        return this.sizeReduction;
    }
    public setSizeReduction(sizeReduction: number | null): void {
        this.sizeReduction = sizeReduction;
    }

}
