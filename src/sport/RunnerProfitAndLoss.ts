/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class RunnerProfitAndLoss extends JsonMember {
    private selectionId: number | null;
    private ifWin: number | null;
    private ifLose: number | null;
    private ifPlace: number | null;

    constructor(
        selectionId: number | null = null,
        ifWin: number | null = null,
        ifLose: number | null = null,
        ifPlace: number | null = null,
    ) {
        super();
        this.selectionId = selectionId;
        this.ifWin = ifWin;
        this.ifLose = ifLose;
        this.ifPlace = ifPlace;
    }

    public fromJson(json: any): void {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('ifWin' in json) {
            this.ifWin = json.ifWin;
        }
        if ('ifLose' in json) {
            this.ifLose = json.ifLose;
        }
        if ('ifPlace' in json) {
            this.ifPlace = json.ifPlace;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.ifWin !== null) {
            json.ifWin = this.ifWin;
        }
        if (this.ifLose !== null) {
            json.ifLose = this.ifLose;
        }
        if (this.ifPlace !== null) {
            json.ifPlace = this.ifPlace;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getSelectionId(): number | null {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number | null): void {
        this.selectionId = selectionId;
    }
    public getIfWin(): number | null {
        return this.ifWin;
    }
    public setIfWin(ifWin: number | null): void {
        this.ifWin = ifWin;
    }
    public getIfLose(): number | null {
        return this.ifLose;
    }
    public setIfLose(ifLose: number | null): void {
        this.ifLose = ifLose;
    }
    public getIfPlace(): number | null {
        return this.ifPlace;
    }
    public setIfPlace(ifPlace: number | null): void {
        this.ifPlace = ifPlace;
    }

}
