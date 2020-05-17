/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IKeyLineSelectionOptions {
    selectionId: number;
    handicap: number;
}

export default class KeyLineSelection extends JsonMember {
    private selectionId: number;
    private handicap: number;

    constructor(options: IKeyLineSelectionOptions) {
        super();
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
    }

    public toJson(): IKeyLineSelectionOptions {
        const json: IKeyLineSelectionOptions = {
            selectionId: this.selectionId,
            handicap: this.handicap,
        };
        return json;
    }

    public getSelectionId(): number {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number {
        return this.handicap;
    }
    public setHandicap(handicap: number): void {
        this.handicap = handicap;
    }

}
