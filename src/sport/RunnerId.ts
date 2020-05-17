/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IRunnerIdOptions {
    marketId: string;
    selectionId: number;
    handicap?: number;
}

export default class RunnerId extends JsonMember {
    private marketId: string;
    private selectionId: number;
    private handicap?: number;

    constructor(options: IRunnerIdOptions) {
        super();
        this.marketId = options.marketId;
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
    }

    public toJson(): IRunnerIdOptions {
        const json: IRunnerIdOptions = {
            marketId: this.marketId,
            selectionId: this.selectionId,
        };
        if (typeof this.handicap !== 'undefined') {
            json.handicap = this.handicap;
        }
        return json;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getSelectionId(): number {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number | undefined {
        return this.handicap;
    }
    public setHandicap(handicap: number): void {
        this.handicap = handicap;
    }

}
