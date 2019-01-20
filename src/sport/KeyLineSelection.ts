/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class KeyLineSelection extends JsonMember {
    private selectionId: number | null;
    private handicap: number | null;

    constructor(
        selectionId: number | null = null,
        handicap: number | null = null,
    ) {
        super();
        this.selectionId = selectionId;
        this.handicap = handicap;
    }

    public fromJson(json: any): void {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        return json;
    }

    public isValid(): boolean {
        return this.selectionId !== null &&
            this.handicap !== null;
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
