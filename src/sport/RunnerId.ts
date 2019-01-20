/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class RunnerId extends JsonMember {
    private marketId: string;
    private selectionId: number | null;
    private handicap: number | null;

    constructor(
        marketId: string = '',
        selectionId: number | null = null,
        handicap: number | null = null,
    ) {
        super();
        this.marketId = marketId;
        this.selectionId = selectionId;
        this.handicap = handicap;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketId !== '') {
            json.marketId = this.marketId;
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketId !== '' &&
            this.selectionId !== null;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getSelectionId(): number | null {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number | null): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number | null {
        return this.handicap;
    }
    public setHandicap(handicap: number | null): void {
        this.handicap = handicap;
    }

}
